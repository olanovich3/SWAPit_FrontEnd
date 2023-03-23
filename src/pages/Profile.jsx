import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { ProductContext } from '../context/ProductContext';
import { UserContext } from '../context/UserContext';
import { API } from '../services/API';
import Button from '../ui-components/Button';

const ProfileStyled = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 3rem;
  gap: 2rem;
  & .profilebutton {
    display: flex;
    gap: 48px;
  }
  & .productdata {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
  }

  & .productcard {
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    padding: 20px;
    width: 300px;
    height: 400px;
  }

  & .productcard img {
    width: 100%;
    object-fit: contain;
    object-position: center;
    height: 60%;
    margin: 0 auto;
  }

  & .description {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  & .profiledata {
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    padding: 20px;
    width: 50%;
    height: 450px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  & .profiledataimgdetails {
    display: flex;
    justify-content: center;
    height: 90%;
    width: 100%;
  }
  & .profiledataimg {
    width: 50%;
    height: 100%;
  }
  & .profiledataimg img {
    height: 80%;
    width: 70%;
    border-radius: 50%;

    padding: 2rem;
  }
  & .profiledatadetails {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 50%;
  }
`;

const Profile = () => {
  const { register, handleSubmit } = useForm();
  let navigate = useNavigate();
  const [data, setData] = useState({});
  const [loaded, setLoaded] = useState(false);

  const [editProfile, setEditProfile] = useState(false);
  const [profile, setProfile] = useState(true);
  const [opinion, setOpinion] = useState(false);
  const [products, setProducts] = useState(false);
  const getProfile = () => {
    API.get(`/users/${user._id}`).then((res) => {
      setData(res.data);
      setLoaded(true);
      setUser(res.data);
    });
  };
  const formSubmit = (formData) => {
    const updatedata = {
      name: formData.name,
      lastname: formData.lastname,
      gender: formData.gender,
      birthdate: formData.birthdate,
      location: formData.location,
      email: formData.email,
      password: formData.password,
      avatar: formData.avatar[0],
    };
    API.patch(`/users/${data._id}`, updatedata, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }).then(() => {
      setEditProfile(false);
      getProfile();
    });
  };
  //hola
  useEffect(() => {
    getProfile();
  }, [loaded]);

  return (
    <ProfileStyled>
      <div className="profilebutton">
        <Button
          className={'secondary'}
          bg={'second'}
          color={'second'}
          text={'PROFILE'}
          border={'yes'}
          action={() =>
            setProfile(true) &
            setOpinion(false) &
            setProducts(false) &
            setEditProfile(false)
          }
        />

        <Button
          className={'secondary'}
          bg={'second'}
          color={'second'}
          text={'REVIEW'}
          border={'yes'}
          action={() => setOpinion(true) & setProfile(false) & setProducts(false)}
        />
        <Button
          className={'secondary'}
          bg={'second'}
          color={'second'}
          text={'PRODUCTS'}
          border={'yes'}
          action={() => setProducts(true) & setOpinion(false) & setProfile(false)}
        />
      </div>
      {profile & loaded ? (
        editProfile === false ? (
          <div className="profiledata">
            <div className="profiledataimgdetails">
              <div className="profiledataimg">
                <img src={data.avatar} alt={data.name} />
              </div>
              <div className="profiledatadetails">
                <h1>{data.name}</h1>
                <h2>{data.lastname}</h2>
                <h2>{data.email}</h2>
                <h2>{data.birthdate}</h2>
                <h2>{data.location}</h2>
              </div>
            </div>
            <Button text="EDIT" action={() => setEditProfile(true)} />
          </div>
        ) : (
          <form className="profiledata" onSubmit={handleSubmit(formSubmit)}>
            <div className="profiledataimgdetails">
              <div className="profiledataimg">
                <input
                  type="file"
                  className="inputfile"
                  id="avatar"
                  placeholder="avatar"
                  {...register(`avatar`)}
                />
                <label htmlFor="avatar">
                  <nav className="buttonfile">Choose an avatar</nav>
                </label>
              </div>
              <div className="profiledatadetails">
                <input
                  type="text"
                  className="input"
                  id="name"
                  placeholder="name"
                  {...register(`name`)}
                  defaultValue={data.name}
                />
                <input
                  type="text"
                  className="input"
                  id="lastname"
                  placeholder="lastname"
                  {...register(`lastname`)}
                  defaultValue={data.lastname}
                />
                <input
                  type="text"
                  className="input"
                  id="email"
                  placeholder="email"
                  {...register(`email`)}
                  defaultValue={data.email}
                />
                <input
                  type="date"
                  className="input"
                  id="birthdate"
                  placeholder="birthdate"
                  {...register(`birthdate`)}
                  defaultValue={data.birthdate}
                />
                <input
                  type="text"
                  className="input"
                  id="location"
                  placeholder="location"
                  {...register(`location`)}
                  defaultValue={data.location}
                />

                <input
                  type="password"
                  className="input"
                  id="password"
                  placeholder="password"
                  {...register(`password`)}
                />
              </div>
            </div>

            <Button type="submit" className={'principal'} text={'UPDATE'} />
          </form>
        )
      ) : null}
      {opinion && <div className="opinionsdata">OPINION</div>}
      {products && (
        <div className="productdata">
          {data.products.map((item) => {
            return (
              <article className="productcard" key={item._id}>
                <img src={item.image1} alt={item._id} />
                <div className="description">
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                  <Button
                    text="EDIT"
                    action={() => {
                      navigate('/editproduct');
                      productsaved(item);
                    }}
                  />
                </div>
              </article>
            );
          })}
        </div>
      )}
    </ProfileStyled>
  );
};

export default Profile;
