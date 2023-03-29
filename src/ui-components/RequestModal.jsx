import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

import { ProductContext } from '../context/ProductContext';
import { UserContext } from '../context/UserContext';
import { API } from '../services/API';
import Palette from '../styles/Palette';

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
    background: none;
  }

  & .request-box {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 350px;
    height: 40%;
    background: ${Palette.background};
    overflow: hidden;
    border-radius: 16px;
    color: #010101;
    gap: 2rem;
  }
  @media screen and (max-width: 1080px) {
    .request-box {
      width: 250px;
    }
  }
  & .request-box form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }
  & .request-box form .reqmessage {
    width: 100%;
    height: 100px;
    padding: 1rem;
    border-radius: 1rem;
    border: 1px solid ${Palette.secondary};
  }
  & .request-box span .requestbtn {
    padding: 0.2rem 0.6rem;
    border-radius: 0.5rem;
    background: ${Palette.secondary};
    color: ${Palette.background};
  }
  & .request-box form .requestbtn {
    padding: 0.2rem 0.6rem;
    border-radius: 0.5rem;
    background: ${Palette.secondary};
    color: ${Palette.background};
  }
  & .request-box span .requestbtn:hover {
    background-color: ${Palette.highlight};
  }
  & .request-box form .requestbtn:hover {
    background-color: ${Palette.highlight};
  }
  & .textarea {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
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
        <div className="request-box">
          <span>
            <button
              type="button"
              className="requestbtn"
              onClick={() => setModalRequest(false)}
            >
              Close
            </button>
          </span>
          <form onSubmit={handleSubmit(RequestSubmit)}>
            <span className="textarea">
              <label htmlFor="reqmessage">Send your message to {user.name} </label>
              <textarea
                type="text"
                id="reqmessage"
                className="reqmessage"
                placeholder="Hi! I`m interesting in your product..."
                {...register(`message`)}
              />
            </span>
            <button className="requestbtn">Submit</button>
          </form>
        </div>
      </div>
    </RequestStyled>
  );
};

export default RequestModal;
