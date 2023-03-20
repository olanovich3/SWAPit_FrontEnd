import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { UserContext } from '../context/UserContext';
import { API } from '../services/API';

const Login = () => {
  const { register, handleSubmit } = useForm();
  let navigate = useNavigate();
  const { login } = useContext(UserContext);

  const formSubmit = (formData) => {
    API.post('/users/login', formData).then((res) => {
      console.log(res.data);
      navigate;
      login;
    });
  };
  return (
    <main>
      <form onSubmit={handleSubmit(formSubmit)}>
        <label htmlFor="email">Email </label>
        <input type="text" id="email" name="email" {...register('email')} />
        <label htmlFor="password">Password </label>
        <input type="password" id="password" name="password" {...register('password')} />
        <button type="submit">Login</button>
      </form>
    </main>
  );
};

export default Login;
