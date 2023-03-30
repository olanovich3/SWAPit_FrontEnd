import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { UserContext } from '../context/UserContext';
import { API } from '../services/API';
import Palette from '../styles/Palette';
import Button from '../ui-components/Button';

const CreateProductStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 72vh;
  & .form {
    border: 1px solid black;
    border-radius: 16px;
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 32px 24px 24px;
    gap: 16px;
    text-align: center;
    width: 400px;
  }
  & .inputfile {
    display: none;
  }
  .inputfile + label {
    cursor: pointer;
    width: 100%;
  }
  & .buttonfile {
    padding: 8px;
    height: 35px;
  }
  & .buttonfile:hover {
    padding: 8px;
    background-color: ${Palette.secondary};
    color: ${Palette.background};
  }
  & .inputdescription {
    height: 60px;
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
  @media (max-width: 420px) {
  }
`;
const CreateProduct = () => {
  const { register, handleSubmit } = useForm();
  let navigate = useNavigate();
  const [showOptionImage2, setShowOptionImage2] = useState(null);
  const [showOptionImage3, setShowOptionImage3] = useState(null);

  const [showImage2, setShowImage2] = useState(null);
  const [showImage3, setShowImage3] = useState(null);
  const [showImage1, setShowImage1] = useState(null);

  const [valueimg, setValueimg] = useState(null);
  const [valueimg2, setValueimg2] = useState(null);
  const [valueimg3, setValueimg3] = useState(null);
  /*  const [productPoster, setProductPoster] = useState(null); */
  const { user } = useContext(UserContext);
  const onChangeimg1 = (e) => {
    setValueimg(e.target.files[0]);
    setShowOptionImage2(1);
    setShowImage1(URL.createObjectURL(e.target.files[0]));
  };
  const onChangeimg2 = (e) => {
    setShowOptionImage3(1);
    setValueimg2(e.target.files[0]);
    setShowImage2(URL.createObjectURL(e.target.files[0]));
  };
  const onChangeimg3 = (e) => {
    setValueimg3(e.target.files[0]);
    setShowImage3(URL.createObjectURL(e.target.files[0]));
  };

  const formSubmit = (formData) => {
    const data = {
      title: formData.title,
      owner: user._id,
      image1: valueimg,
      image2: valueimg2,
      image3: valueimg3,
      description: formData.description,
      category: formData.category,
      condition: formData.condition,
      status: formData.status,
    };
    API.post('/products', data, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }).then(() => {
      navigate('/products');
    });
  };
  return (
    <main>
      <CreateProductStyled>
        <form className="form" onSubmit={handleSubmit(formSubmit)}>
          <label id="owner" name="owner" {...register('{user._id}')}>
            {user.name} wants to create a product
          </label>
          <label htmlFor="title">Name of the product: </label>
          <input
            className="input"
            type="text"
            id="title"
            name="title"
            placeholder="Max 40 characters"
            {...register('title')}
            required
            maxLength={40}
          />
          <input
            type="file"
            className="inputfile"
            id="image"
            {...register('image')}
            onChange={onChangeimg1}
          />
          <label htmlFor="image">
            <nav className="buttonfile">Choose an image</nav>
          </label>
          {showImage1 != null && (
            <>
              <img className="img1" src={showImage1} alt="" />
            </>
          )}
          {showOptionImage2 != null && (
            <>
              <input
                type="file"
                className="inputfile"
                id="image2"
                placeholder="image2"
                {...register(`image2`)}
                onChange={onChangeimg2}
              />
              <label htmlFor="image2">
                <nav className="buttonfile">Choose another image</nav>
              </label>
            </>
          )}
          {showImage2 != null && (
            <>
              <img className="img2" src={showImage2} alt="" />
            </>
          )}
          {showOptionImage3 != null && (
            <>
              <input
                type="file"
                className="inputfile"
                id="image3"
                placeholder="image3"
                {...register(`image3`)}
                onChange={onChangeimg3}
              />
              <label htmlFor="image3">
                <nav className="buttonfile">Choose last image</nav>
              </label>
            </>
          )}
          {showImage3 != null && (
            <>
              <img className="img3" src={showImage3} alt="" />
            </>
          )}
          <label htmlFor="description">Description</label>
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
          <Button type="submit" text={'Create a Product'} />
        </form>
      </CreateProductStyled>
    </main>
  );
};

export default CreateProduct;
