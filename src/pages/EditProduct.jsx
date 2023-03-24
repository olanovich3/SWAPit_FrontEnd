import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { ProductContext } from '../context/ProductContext';
import { API } from '../services/API';
import Palette from '../styles/Palette';
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
    height: 99%;
    display: flex;
    align-items: center;
  }
  & .img1 {
    width: 100%;
    object-fit: cover;
  }
  & .img2 {
    width: 100%;
    object-fit: cover;
  }
  & .img3 {
    width: 100%;
    object-fit: cover;
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
    width: 30%;
    height: 80%;
  }
  & .inputdescription {
    height: 70px;
  }
  & .inputfile {
    display: none;
  }
  .inputfile + label {
    cursor: pointer;
    width: 100%;
  }
  & .buttonfile {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 6px;
    height: 21px;
  }
  & .buttonfile:hover {
    padding: 8px;
    background-color: ${Palette.secondary};
    color: ${Palette.background};
  }
`;

const EditProduct = () => {
  let navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { productdeleted } = useContext(ProductContext);
  const productoStorage = JSON.parse(localStorage.getItem('product'));
  const defaultsValue = {
    title: productoStorage.title,
    owner: productoStorage.owner,
    image1: productoStorage.image1,
    image2: productoStorage.image2,
    image3: productoStorage.image3,
    description: productoStorage.description,
    category: productoStorage.category,
    condition: productoStorage.condition,
    status: productoStorage.status,
  };
  const [showImage3, setShowImage3] = useState(productoStorage.image3);
  const [showImage2, setShowImage2] = useState(productoStorage.image2);
  const [showImage1, setShowImage1] = useState(productoStorage.image1);
  const [valueimg, setValueimg] = useState(productoStorage.image1);
  const [valueimg2, setValueimg2] = useState(productoStorage.image2);
  const [valueimg3, setValueimg3] = useState(productoStorage.image3);
  const onChangeimg1 = (e) => {
    setValueimg(e.target.files[0]);
    setShowImage1(URL.createObjectURL(e.target.files[0]));
  };
  const onChangeimg2 = (e) => {
    setValueimg2(e.target.files[0]);
    setShowImage2(URL.createObjectURL(e.target.files[0]));
  };
  const onChangeimg3 = (e) => {
    setValueimg3(e.target.files[0]);
    setShowImage3(URL.createObjectURL(e.target.files[0]));
  };
  const formSubmit = (formData) => {
    /* console.log(formData); */
    const data = {
      title: formData.title,
      image1: valueimg,
      image2: valueimg2,
      image3: valueimg3,
      description: formData.description,
      category: formData.category,
      condition: formData.condition,
      status: formData.status,
    };
    API.patch(`/products/${productoStorage._id}`, data, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }).then(() => {
      productdeleted();
      navigate('/profile');
    });
  };
  return (
    <EditProductStyled>
      <div className="editproduct">
        <form className="form" onSubmit={handleSubmit(formSubmit)}>
          <div className="editproductimgdata">
            <div className="editproductimg">
              {valueimg != null && (
                <>
                  <img className="img1" src={showImage1} alt="" />
                </>
              )}
              {valueimg2 != null && (
                <>
                  <img className="img2" src={showImage2} alt="" />
                </>
              )}
              {valueimg3 != null && (
                <>
                  <img className="img3" src={showImage3} alt="" />
                </>
              )}
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
                defaultValue={defaultsValue.description}
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
                onChange={onChangeimg1}
              />
              <label htmlFor="image1">
                <nav className="buttonfile">Change the first image</nav>
              </label>
              <input
                type="file"
                className="inputfile"
                id="image2"
                placeholder="image2"
                {...register(`image2`)}
                onChange={onChangeimg2}
              />
              <label htmlFor="image2">
                <nav className="buttonfile">Change the second image</nav>
              </label>
              <input
                type="file"
                className="inputfile"
                id="image3"
                placeholder="image3"
                {...register(`image3`)}
                onChange={onChangeimg3}
              />
              <label htmlFor="image3">
                <nav className="buttonfile">Change the third image</nav>
              </label>
            </div>
          </div>

          <Button type="submit" text="EDIT PRODUCT" />
        </form>
      </div>
    </EditProductStyled>
  );
};

export default EditProduct;
