import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';

import { API } from '../services/API';

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
    <main>
      <h2>Register</h2>
      <form onSubmit={handleSubmit(formSubmit)}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" {...register('name')} />
        <label htmlFor="lastname">Lastname</label>
        <input type="text" id="lastname" {...register('lastname')} />
        <label htmlFor="gender">Gender</label>
        <input type="text" id="gender" {...register('gender')} />
        <label htmlFor="birthdate">Birthdate</label>
        <input type="date" id="birthdate" {...register('birthdate')} />
        <label htmlFor="location">Location</label>
        <input type="text" id="location" {...register('location')} />
        <label htmlFor="email">Email</label>
        <input type="text" id="email" {...register('email')} />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" {...register('password')} />
        <label htmlFor="avatar">Avatar</label>
        <input type="file" id="avatar" name="avatar" {...register('avatar')} />

        <button type="submit">Register</button>
      </form>
    </main>
  );
};

export default Register;
