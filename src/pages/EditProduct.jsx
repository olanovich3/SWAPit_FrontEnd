import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { ProductContext } from '../context/ProductContext';
import { API } from '../services/API';
import Button from '../ui-components/Button';

const EditProductStyled = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  & .editproduct {
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    padding: 20px;
    width: 60%;
    height: 90%;
    display: flex;
    align-items: center;
  }

  & .form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
  & .editproductimgdata {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  & .editproductdata {
    display: flex;
    flex-direction: column;
    margin-left: 24px;
    gap: 1rem;
    width: 50%;
    height: 80%;
  }

  & .editproductimg {
    width: 50%;
    height: 80%;
  }
  & .editproductimg img {
    width: 100%;
    height: 100%;
  }
  & .inputdescription {
    height: 60px;
  }
`;

const EditProduct = () => {
  let navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { editProduct } = useContext(ProductContext);
  const defaultsValue = {
    title: editProduct.title,
    image1: editProduct.image1,
    description: editProduct.description,
    location: editProduct.location,
    category: editProduct.category,
    condition: editProduct.condition,
    status: editProduct.status,
  };
  const formSubmit = (formData) => {
    console.log(formData);
    const data = {
      title: formData.title,
      image1: formData.image1 ? formData.image1[0] : null,
      image2: formData.image2 ? formData.image2[0] : null,
      image3: formData.image3 ? formData.image3[0] : null,
      description: formData.description,
      location: formData.location,
      category: formData.category,
      condition: formData.condition,
      status: formData.status,
    };
    API.patch(`/${editProduct._id}`, data).then(() => {
      navigate('/profile');
    });
  };
  return (
    <EditProductStyled>
      <div className="editproduct">
        <form className="form" onSubmit={handleSubmit(formSubmit)}>
          <div className="editproductimgdata">
            <div className="editproductimg">
              <img src={defaultsValue.image1} alt={defaultsValue.title} />
            </div>

            <div className="editproductdata">
              <label htmlFor="title">Name of the product </label>
              <input
                className="input"
                type="text"
                id="title"
                name="title"
                {...register('title')}
                required
                defaultValue={defaultsValue.title}
              />
              <textarea
                className="inputdescription"
                type="text"
                id="description"
                name="description"
                placeholder="If you want you can put the description of your product"
                {...register('description')}
                required
              />
              <select name="category" id="category" {...register('category')}>
                <option value="movies, books & music">Movies, Books & Music</option>
                <option value="videogames">Videogames</option>
                <option value="appliances">Appliances</option>
                <option value="electronic">Electronic</option>
                <option value="sports & leisure">Sports & Leisure</option>
                <option value="home">Home</option>
                <option value="other">Other</option>
              </select>
              <select name="condition" id="condition" {...register('condition')}>
                <option value="new">New</option>
                <option value="as good as new">As good as new</option>
                <option value="good condition">Good condition</option>
                <option value="fair condition">Fair condition</option>
                <option value="heas given it all">Heas given it all</option>
              </select>
              <select name="status" id="status" {...register('status')}>
                <option value="available">Available</option>
                <option value="reserved">Reserved</option>
                <option value="not available">Not available</option>
              </select>
              <input
                type="file"
                className="inputfile"
                id="image1"
                placeholder="image1"
                {...register(`image1`)}
              />
              <input
                type="file"
                className="inputfile"
                id="image2"
                placeholder="image2"
                {...register(`image2`)}
              />
              <input
                type="file"
                className="inputfile"
                id="image3"
                placeholder="image3"
                {...register(`image3`)}
              />
            </div>
          </div>
          <Button type="submit" text="EDIT PRODUCT" />
        </form>
      </div>
    </EditProductStyled>
  );
};

export default EditProduct;
