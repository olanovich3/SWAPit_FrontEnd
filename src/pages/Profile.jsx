import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

import { UserContext } from '../context/UserContext';
import { API } from '../services/API';
import Palette from '../styles/Palette';
import AverageRating from '../ui-components/AverageRating';
import Button from '../ui-components/Button';
import CommentsAll from '../ui-components/CommentsAll';
import DivFlex from '../ui-components/DivFlex';
import ProductProfile from '../ui-components/ProfileProduct';

const ProfileStyled = styled.main`
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  & .profiledata {
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.6);
    width: 50vw;
    min-height: 450px;
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    margin-bottom: 5rem;
  }
  & .profavatar {
    width: 50%;
    height: 100%;
    background-color: ${Palette.terciary};
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  & .profavatar img {
    width: 100%;
    border-radius: 50%;
    padding: 3.5rem;
  }
  & .profavatar label {
    color: ${Palette.background};
    text-align: center;
  }
  & .inputfile {
    display: none;
  }
  & .locationicon {
    height: 1.3rem;
    width: auto;
  }
  & .btndeledit {
    display: flex;
    gap: 4rem;
  }

  & .buttonfile {
    padding: 8px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & .buttonfile:hover {
    padding: 8px;
    background-color: ${Palette.secondary};
    color: ${Palette.background};
  }
`;

const Profile = () => {
  const { register, handleSubmit } = useForm();

  const [data, setData] = useState({});
  const [comments, setComments] = useState({});
  const [loaded, setLoaded] = useState(false);

  const { user, setUser, logout } = useContext(UserContext);
  const [editProfile, setEditProfile] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [profile, setProfile] = useState(true);
  const [opinion, setOpinion] = useState(false);
  const [products, setProducts] = useState(false);
  const [showAvatar, setShowAvatar] = useState(user.avatar);
  const [valueAvatar, SetValueAvatar] = useState(user.avatar);

  const onChangeAvatar = (e) => {
    SetValueAvatar(e.target.files[0]);
    setShowAvatar(URL.createObjectURL(e.target.files[0]));
  };
  const getProfile = () => {
    API.get(`/users/${user._id}`).then((res) => {
      setData(res.data);
      setLoaded(true);
      setUser(res.data);
    });
  };
  const getComments = () => {
    API.get(`/user/comments/${user._id}`).then((res) => {
      setComments(res.data);
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
      avatar: valueAvatar,
    };
    API.patch(`/users/${data._id}`, updatedata, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }).then(() => {
      setEditProfile(false);
      getProfile();
    });
  };
  const deleteUser = (user) => {
    API.delete(`/users/${user._id}`).then(() => {
      logout();
    });
  };

  useEffect(() => {
    getProfile();
    getComments();
  }, [loaded]);

  return (
    <ProfileStyled>
      <DivFlex gap={'5rem'} padding={'3rem'}>
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
          text={'REVIEWS'}
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
      </DivFlex>
      {profile & loaded ? (
        editProfile === false ? (
          <div className="profiledata">
            <div className="profavatar">
              <img src={data.avatar} alt={data.name} />
            </div>
            <DivFlex
              className={'profinfo'}
              direction={'column'}
              align={'flex-start'}
              padding={'0 4rem'}
              width={'50%'}
              gap={'1rem'}
            >
              <h2>
                {data.name} {data.lastname}
              </h2>
              <p>{new Date(data.birthdate).toLocaleDateString('es-ES')}</p>
              <p>{data.email}</p>
              {data.rating.length ? (
                <AverageRating ratings={data.rating} />
              ) : (
                <h1>No rates</h1>
              )}

              <p>
                <img
                  className="locationicon"
                  src="https://res.cloudinary.com/dlvbfzkt9/image/upload/v1679864286/Resources/927667_rngpr5.png"
                  alt="Location icon"
                />
                {data.location.toUpperCase()}
              </p>
              {data.location == 'madrid' ? (
                <iframe
                  title="madrid"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194347.38441032713!2d-3.8196196332355483!3d40.438131079723014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422997800a3c81%3A0xc436dec1618c2269!2sMadrid!5e0!3m2!1ses!2ses!4v1679435067702!5m2!1ses!2ses"
                  width="280"
                  height="100"
                ></iframe>
              ) : (
                <></>
              )}
              <nav className="btndeledit">
                <Button
                  className={'principal'}
                  text="EDIT"
                  action={() => setEditProfile(true)}
                />
                <Button
                  className={'principal'}
                  text="DELETE"
                  action={() => {
                    deleteUser(data);
                  }}
                />
              </nav>
            </DivFlex>
          </div>
        ) : (
          <form className="profiledata" onSubmit={handleSubmit(formSubmit)}>
            <div className="profavatar">
              <img src={showAvatar} alt="" />
              <label htmlFor="avatar">
                <nav className="buttonfile">Choose an avatar</nav>
              </label>
              <input
                type="file"
                className="inputfile"
                id="avatar"
                placeholder="avatar"
                {...register(`avatar`)}
                onChange={onChangeAvatar}
              />
            </div>
            <DivFlex
              className={'profinfo'}
              direction={'column'}
              align={'flex-start'}
              padding={'0 4rem'}
              width={'50%'}
              gap={'0.5rem'}
            >
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="input"
                id="name"
                placeholder="name"
                {...register(`name`)}
                defaultValue={data.name}
              />
              <label htmlFor="lastname">Last name</label>
              <input
                type="text"
                className="input"
                id="lastname"
                placeholder="lastname"
                {...register(`lastname`)}
                defaultValue={data.lastname}
              />
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="input"
                id="email"
                placeholder="email"
                {...register(`email`)}
                defaultValue={data.email}
              />
              <label htmlFor="birthdate">Birthdate</label>
              <input
                type="date"
                className="input"
                id="birthdate"
                placeholder="birthdate"
                {...register(`birthdate`)}
                defaultValue={new Date(data.birthdate).toLocaleDateString('es-ES')}
              />
              <label htmlFor="location">Location</label>
              <input
                type="text"
                className="input"
                id="location"
                placeholder="location"
                {...register(`location`)}
                defaultValue={data.location}
              />
              <Button
                text="Change Password"
                type="button"
                action={() => setShowPassword(!showPassword)}
              />
              {showPassword && (
                <>
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="input"
                    id="password"
                    placeholder="password"
                    {...register(`password`)}
                    pattern="[A-Za-z][A-Za-z0-9]*[0-9][A-Za-z0-9]*"
                  />
                </>
              )}
              <Button type="submit" className={'principal'} text={'UPDATE'} />
            </DivFlex>
          </form>
        )
      ) : null}
      {opinion &&
        (comments.length ? <CommentsAll comment={comments} /> : <h1>no reviews</h1>)}
      {products && <ProductProfile data={data} />}
    </ProfileStyled>
  );
};

export default Profile;
