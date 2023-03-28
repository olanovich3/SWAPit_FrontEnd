import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { ProductContext } from '../context/ProductContext';

import { UserContext } from '../context/UserContext';
import { API } from '../services/API';

const RequestStyled = styled.div`
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
`;

const RequestModal = () => {
  const { requestID, modalRequest, setModalRequest } = useContext(ProductContext);
  const { user } = useContext(UserContext);
  const { register, handleSubmit } = useForm();
  const [item, setItem] = useState([]);
  item;
  const getProduct = () => {
    API.get(`/products/${requestID}`).then((res) => {
      console.log(res.data);
      setItem(res.data);
    });
  };

  const RequestSubmit = (formData) => {
    const requestdata = {
      message: formData.message,
    };

    API.post(`/request/${requestID}`, requestdata).then(() => {
      setModalRequest(false);
    });
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <RequestStyled>
      <div className={modalRequest ? 'modal' : 'hidden'}>
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
      </div>
    </RequestStyled>
  );
};

export default RequestModal;
