import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

import { UserContext } from '../context/UserContext';
import { API } from '../services/API';

const RequestStyled = styled.div``;

const RequestModal = () => {
  const { user } = useContext(UserContext);
  const { register, handleSubmit } = useForm();
  const [item, setItem] = useState([]);
  item;
  const getProduct = () => {
    API.get(`/products/6420197f090746410fa57486`).then((res) => {
      console.log(res.data);
      setItem(res.data);
    });
  };

  const RequestSubmit = (formData) => {
    const requestdata = {
      message: formData.message,
    };

    API.post('request/6420197f090746410fa57486', requestdata).then((res) => {
      console.log(res);
    });
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <RequestStyled>
      <form onSubmit={handleSubmit(RequestSubmit)}>
        <label htmlFor="reqmessage">Send your message to {user.name} </label>
        <input
          type="text"
          id="reqmessage"
          placeholder="Hi! I`m interesting in your product..."
          {...register(`message`)}
        />
        <button>Submit</button>
      </form>
    </RequestStyled>
  );
};

export default RequestModal;
