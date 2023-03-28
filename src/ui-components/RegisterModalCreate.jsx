import { useContext } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

import { UserContext } from '../context/UserContext';
import { API } from '../services/API';
import Palette from '../styles/Palette';
import Button from '../ui-components/Button';

const RegisterStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & .form-box {
    max-width: 300px;
    background: #f1f7fe;
    overflow: hidden;
    border-radius: 16px;
    color: #010101;
  }
  & .form {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 32px 24px 24px;
    gap: 16px;
    text-align: center;
  }
  & .title {
    font-weight: bold;
    font-size: 1.6rem;
  }
  & .subtitle {
    font-size: 1rem;
    color: #666;
  }
  & .form-container {
    overflow: hidden;
    border-radius: 8px;
    background-color: #fff;
    margin: 1rem 0 0.5rem;
    width: 100%;
  }
  & .input {
    background: none;
    border: 0;
    outline: 0;
    height: 25px;
    width: 60%;
    border-bottom: 1px solid #eee;
    font-size: 0.9rem;
    padding: 8px 15px;
  }
  & .label {
    display: block;
    margin-bottom: 0.3rem;
    font-size: 0.9rem;
    font-weight: bold;
    color: #05060f99;
    transition: color 0.3s cubic-bezier(0.25, 0.01, 0.25, 1) 0s;
  }

  & .form-section {
    padding: 16px;
    font-size: 0.85rem;
    background-color: #e0ecfb;
    box-shadow: rgb(0 0 0 / 8%) 0 -1px;
  }
  & .form-section a {
    font-weight: bold;
    color: #0066ff;
    transition: color 0.3s ease;
  }
  & .form-section a:hover {
    color: #005ce6;
    text-decoration: underline;
  }
  & .inputfile {
    display: none;
  }
  .inputfile + label {
    cursor: pointer;
    width: 100%;
  }

  & .buttonfile:hover {
    padding: 8px;
    background-color: ${Palette.secondary};
    color: ${Palette.background};
  }
  & .modal {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(8px);
    position: fixed;
    z-index: 999;
    left: 0;
    top: 0;
  }
  & .hidden {
    display: none !important;
  }
  & .form span {
    display: flex;
    justify-content: flex-end;
  }

  & .form-box .form span .close {
    background-color: transparent;
    color: ${Palette.secondary};
    border: none;
  }
  & .registerModal {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    padding-bottom: 1.5rem;
  }
  & .registernbtn {
    background: none;
    border: none;
    font-size: 1rem;
    color: ${Palette.secondary};
  }
  & .avatarimg {
    width: 75px;
    height: 75px;
    object-fit: cover;
    border-radius: 50%;
  }
  & .form-control {
    position: relative;
  }
  & .passwordeye {
    background-color: transparent;
    border: none;
    outline: none;
  }
  & .passwordimg {
    width: 20px;
    height: 20px;
  }
  & .modalAlert {
    color: red;
    font-size: 12px;
  }
  & .hiddenAlert {
    display: none !important;
  }
`;

const RegisterModalCreate = () => {
  const { register, handleSubmit } = useForm();
  const [showAvatar, setShowAvatar] = useState(null);
  const [valueAvatar, SetValueAvatar] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showAlertRegister, setShowAlertRegister] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const onChangeAvatar = (e) => {
    SetValueAvatar(e.target.files[0]);
    setShowAvatar(URL.createObjectURL(e.target.files[0]));
  };
  let navigate = useNavigate();
  const formSubmit = (formData) => {
    const data = {
      name: formData.name,
      lastname: formData.lastname,
      gender: formData.gender,
      birthdate: formData.birthdate,
      location: formData.location,
      email: formData.email,
      password: formData.password,
      avatar: valueAvatar,
    };

    API.post('/users/register', data, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
      .then((res) => {
        setShowRegister(!showRegister);
        navigate('/');
        login(res.data.user, res.data.token);
      })
      .catch(() => {
        setShowAlertRegister(true);
      });
  };
  const { login } = useContext(UserContext);

  const formLoginSubmit = (formData) => {
    API.post('/users/login', formData)
      .then((res) => {
        login(res.data.user, res.data.token);
        navigate('/');
      })
      .catch(() => {
        setShowAlert(true);
      });
  };

  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <RegisterStyled>
      <Button
        className={'principal'}
        text={'POST A PRODUCT'}
        action={() => {
          setShowLogin(!showLogin);
        }}
      ></Button>
      {showLogin && (
        <div>
          <div className={showLogin ? 'modal' : 'hidden'}>
            <div className="form-box">
              <form className="form" onSubmit={handleSubmit(formLoginSubmit)}>
                <span>
                  <button
                    className="close"
                    onClick={() => setShowLogin(!showLogin) & setShowAlert(false)}
                  >
                    Close
                  </button>
                </span>
                <div className="title">Log In</div>
                <div className={showAlert ? `modalAlert` : `hiddenAlert`}>
                  Looks like either your email address or password were incorrect. Wanna
                  try again?
                </div>
                <div className="form-container">
                  <label htmlFor="email">Email </label>
                  <input
                    className="input"
                    type="text"
                    id="email"
                    name="email"
                    {...register('email')}
                  />
                </div>
                <div className="form-container">
                  <label htmlFor="password">Password </label>
                  <input
                    className="input"
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    {...register('password')}
                  />
                </div>
                <button
                  className="passwordeye"
                  type="button"
                  onClick={toggleShowPassword}
                >
                  {showPassword ? (
                    <img
                      className="passwordimg"
                      src="https://res.cloudinary.com/dysog0ybg/image/upload/v1679668893/SocialMedia%20Icons/ojo_1_zgm7ud.png"
                      alt="Password shown"
                    />
                  ) : (
                    <img
                      className="passwordimg"
                      src="https://res.cloudinary.com/dysog0ybg/image/upload/v1679668893/SocialMedia%20Icons/ojo_trum0j.png"
                      alt="Password hidden"
                    />
                  )}
                </button>
                <Button text={'Log in'} type="submit" />
              </form>
              <span className="registerModal">
                <p>Don´t have an account?</p>
                <button
                  className="registernbtn"
                  onClick={() => {
                    setShowRegister(!showRegister);
                    setShowLogin(!showLogin);
                  }}
                >
                  Register
                </button>
              </span>
            </div>
          </div>
        </div>
      )}
      {showRegister && (
        <div className={showRegister ? 'modal' : 'hidden'}>
          <div className="form-box">
            <form className="form" onSubmit={handleSubmit(formSubmit)}>
              <span>
                <button
                  className="close"
                  onClick={() =>
                    setShowRegister(!showRegister) & setShowAlertRegister(false)
                  }
                >
                  Close
                </button>
              </span>
              <h1 className="title">Sign up</h1>
              <span className="subtitle">Create a free account with your email.</span>
              <div className={showAlertRegister ? `modalAlert` : `hiddenAlert`}>
                Looks like either your email address or password were not valid. Wanna try
                again?
              </div>
              <div className="form-container">
                <div className="form-control">
                  <label htmlFor="name" className="label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="input"
                    id="name"
                    {...register(`name`)}
                    required
                  />
                </div>
                <div className="form-control">
                  <label htmlFor="lastname" className="label">
                    Lastname
                  </label>
                  <input
                    type="text"
                    className="input"
                    id="lastname"
                    {...register(`lastname`)}
                    required
                  />
                </div>
                <label htmlFor="birthdate" className="label">
                  Birthdate
                </label>
                <input
                  type="date"
                  className="input"
                  id="birthdate"
                  {...register(`birthdate`)}
                  required
                />
                <label htmlFor="location" className="label">
                  Location
                </label>
                <input
                  type="text"
                  className="input"
                  id="location"
                  {...register(`location`)}
                  required
                />
                <label htmlFor="email" className="label">
                  Email
                </label>
                <input
                  type="text"
                  className="input"
                  id="email"
                  {...register(`email`)}
                  required
                />
                <label htmlFor="password" className="label">
                  Password
                </label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="input"
                  id="password"
                  {...register(`password`)}
                  required
                />
                <button
                  className="passwordeye"
                  type="button"
                  onClick={toggleShowPassword}
                >
                  {showPassword ? (
                    <img
                      className="passwordimg"
                      src="https://res.cloudinary.com/dysog0ybg/image/upload/v1679668893/SocialMedia%20Icons/ojo_1_zgm7ud.png"
                      alt="Password shown"
                    />
                  ) : (
                    <img
                      className="passwordimg"
                      src="https://res.cloudinary.com/dysog0ybg/image/upload/v1679668893/SocialMedia%20Icons/ojo_trum0j.png"
                      alt="Password hidden"
                    />
                  )}
                </button>

                <input
                  type="file"
                  className="inputfile"
                  id="avatar"
                  placeholder="avatar"
                  {...register(`avatar`)}
                  onChange={onChangeAvatar}
                />
                <label htmlFor="avatar">
                  <nav className="buttonfile">Choose an avatar</nav>
                  {showAvatar != null && (
                    <img className="avatarimg" src={showAvatar} alt="" />
                  )}
                </label>
              </div>
              <Button type="submit" className={'principal'} text={'Sign up'} />
            </form>
          </div>
        </div>
      )}
    </RegisterStyled>
  );
};

export default RegisterModalCreate;
