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
    height: 40px;
    width: 60%;
    border-bottom: 1px solid #eee;
    font-size: 0.9rem;
    padding: 8px 15px;
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
`;

const RegisterModal = () => {
  const { register, handleSubmit } = useForm();
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
      avatar: formData.avatar[0],
    };
    API.post('/users/register', data).then((res) => {
      setShowRegister(!showRegister);
      navigate('/');
      login(res.data.user, res.data.token);
    });
  };
  const { login } = useContext(UserContext);
  const formLoginSubmit = (formData) => {
    API.post('/users/login', formData).then((res) => {
      login(res.data.user, res.data.token);
      navigate('/');
    });
  };

  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <RegisterStyled>
      <Button
        className={'secondary'}
        bg={'second'}
        color={'second'}
        text={'Log In'}
        border={'yes'}
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
                  <button className="close" onClick={() => setShowLogin(!showLogin)}>
                    Close
                  </button>
                </span>
                <div className="title">Log In</div>
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
                    type="password"
                    id="password"
                    name="password"
                    {...register('password')}
                  />
                </div>
                <Button text={'Log in'} type="submit">
                  Login
                </Button>
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
                <button className="close" onClick={() => setShowRegister(!showRegister)}>
                  Close
                </button>
              </span>
              <h1 className="title">Sign up</h1>
              <span className="subtitle">Create a free account with your email.</span>
              <div className="form-container">
                <input
                  type="text"
                  className="input"
                  id="name"
                  placeholder="name"
                  {...register(`name`)}
                />
                <input
                  type="text"
                  className="input"
                  id="lastname"
                  placeholder="lastname"
                  {...register(`lastname`)}
                />
                <input
                  type="text"
                  className="input"
                  id="gender"
                  placeholder="gender"
                  {...register(`gender`)}
                />
                <input
                  type="date"
                  className="input"
                  id="birthdate"
                  placeholder="birthdate"
                  {...register(`birthdate`)}
                />
                <input
                  type="text"
                  className="input"
                  id="location"
                  placeholder="location"
                  {...register(`location`)}
                />
                <input
                  type="text"
                  className="input"
                  id="email"
                  placeholder="email"
                  {...register(`email`)}
                />
                <input
                  type="password"
                  className="input"
                  id="password"
                  placeholder="password"
                  {...register(`password`)}
                />

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
              <Button type="submit" className={'principal'} text={'Sign up'} />
            </form>
          </div>
        </div>
      )}
    </RegisterStyled>
  );
};

export default RegisterModal;