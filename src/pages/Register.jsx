import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

import { API } from '../services/API';
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
    width: 100%;
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
    display: flex;
    cursor: pointer;
  }
`;

const Register = () => {
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
    API.post('/users/register', data).then(() => {
      navigate('/');
    });
  };

  return (
    <RegisterStyled>
      <div className="form-box">
        <form className="form" onSubmit={handleSubmit(formSubmit)}>
          <span className="title">Sign up</span>
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
              <span className="filename">No file seleted</span>
              <span className="filebutton">Choose an avatar</span>
            </label>
          </div>
          <Button type="submit" className={'principal'} text={'Sign up'} />
        </form>
        <div className="form-section">
          <p>
            Have an account? <a href=".">Log in</a>
          </p>
        </div>
      </div>
    </RegisterStyled>
  );
};

export default Register;
