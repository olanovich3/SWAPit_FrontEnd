import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';

import { ProductContext } from '../context/ProductContext';
import { UserContext } from '../context/UserContext';
import { API } from '../services/API';
import Palette from '../styles/Palette';
import CommentModal from '../ui-components/CommentModal.';

const ChatStyled = styled.main`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 6vh 1fr;
  padding: 2rem 4rem;
  border-radius: 0.5rem;
  gap: 1rem;

  & .chatinbox {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: flex-starts;
    align-items: center;
    border-bottom: 1px solid #e5e5e5;
    width: 100%;
    grid-column: 2 / 3;
    grid-row: 2/ 3;
    gap: 0.5rem;
  }

  & .requestchat {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
    grid-column: 1 / 2;
    grid-row: 2 / 2;
    width: 100%;
  }

  & .requestitle {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 5.5rem;
    background-color: ${Palette.secondary};
    color: ${Palette.background};
    grid-column: 1 / 2;
    grid-row: 1 / 1;
    border-radius: 0.5rem;
    width: 100%;
  }
  @media screen and (max-width: 1080px) {
    .requestitle {
      font-size: 11px;
      flex-wrap: nowrap;
      align-items: center;
      justify-content: center;
      padding-left: 0;
    }
    .requestitle h3 {
      text-align: center;
    }
  }

  & .requestitle2 {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 5.5rem;
    background-color: ${Palette.secondary};
    color: ${Palette.background};
    grid-column: 2 / 3;
    grid-row: 1 / 1;
    border-radius: 0.5rem;
    width: 100%;
  }
  @media screen and (max-width: 1080px) {
    .requestitle2 {
      font-size: 12px;
      flex-wrap: wrap;
      justify-content: center;
      padding: 0 0.5rem;
    }
    .requestitle2 h3 {
      text-align: center;
    }
  }

  & .reqprod {
    width: 80px;
    height: 80px;
  }

  & .requestCard {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 0.5rem;
    border-radius: 1rem;
    background-color: white;
    border: 1px solid lightgray;
    width: 100%;
    height: 70px;
  }
  @media screen and (max-width: 1080px) {
    .requestCard {
      height: 210px;
      justify-content: center;
    }
    .requestCard h3 {
      text-align: center;
    }
  }
  & .requestCard img {
    border-radius: 50%;
    height: 60px;
    width: 60px;
  }

  .requestCard h3 {
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: 16px;
    width: 100%;
    letter-spacing: 0.1rem;
  }
  & .requestbtn {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 0.5rem;
  }
  & .requestbtn button {
    background: none;
    background-color: ${Palette.background};
    color: ${Palette.secondary};
    border: 1px solid ${Palette.secondary};
    padding: 0.1rem 0.6rem;
    border-radius: 0.2rem;
  }
  & .quote {
    font-style: italic;
    font-size: 13px;
  }
  & .responsebox {
    display: flex;
    padding: 0.5rem;
    border-radius: 1rem;
    background-color: white;
    border: 1px solid lightgray;
    width: 100%;
    height: 70px;
  }
  @media screen and (max-width: 1080px) {
    .responsebox {
      height: 210px;
      justify-content: center;
      padding: 0%;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
  }

  & .responsebox button {
    background: none;
    border: none;
  }
  & .responsebox p {
    font-size: 13px;
    color: gray;

    padding: 0.5rem 1.5rem;
    border-radius: 1rem;
  }
  & .textrequest {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-left: 1.5rem;
  }
  .imgreq {
    display: flex;
  }
  .spanreq {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 1rem;
    padding-top: 0.2rem;
  }
  @media screen and (max-width: 1080px) {
    .spanreq {
      flex-direction: column;
      gap: 0.5rem;
    }
    .textrequest h3 {
      font-size: 14px;
      align-items: center;
    }
    .quote {
      display: none;
    }
    .textrequest {
      padding-left: 0;
    }
  }
  .spanreq button {
    background: none;
    border: none;
    color: ${Palette.secondary};
    border: 1px solid ${Palette.secondary};
    padding: 0.1rem 0.3rem;
    border-radius: 0.2rem;
  }
  .red:hover {
    background-color: ${Palette.secondary};
    color: ${Palette.background};
    border: 1px solid ${Palette.secondary};
  }
  .green:hover {
    background-color: ${Palette.secondary};
    color: ${Palette.background};
    border: 1px solid ${Palette.secondary};
  }
`;

const Chat = () => {
  const { setComment } = useContext(ProductContext);
  const [loaded, setLoaded] = useState(false);
  const { user } = useContext(UserContext);

  const [request, setRequest] = useState([]);

  const getAllRequest = () => {
    API.get(`/request`).then((res) => {
      setRequest(res.data);
      setLoaded(true);
      console.log(res.data);
      localStorage.setItem('requestprod', JSON.stringify(res.data));
    });
  };

  const handleRequest = (id, status) => {
    API.put(`/request/${id}`, { status }).then((res) => {
      console.log(res.data);
      const updatedRequest = request.map((req) => {
        if (req._id === id) {
          return { ...req, status };
        }
        return req;
      });
      setRequest(updatedRequest);
    });
  };

  const userProductsIds = user.products.map((product) => product);
  console.log(userProductsIds);

  const filteredRequests = request.filter(
    (res) => res.userfrom !== user._id /* && userProductsIds.includes(req.product._id) */,
  );
  console.log(filteredRequests);
  const filteredRequestsent = request.filter((res) =>
    res.userfrom._id.includes(user._id),
  );

  useEffect(() => {
    getAllRequest();
  }, []);

  return (
    <ChatStyled>
      <div className="requestitle">
        <h3>Your requests received</h3>
      </div>
      <div className="requestitle2">
        <h3>Your requests sent</h3>
      </div>

      <div className="requestchat">
        {loaded ? (
          <div className="requestchat">
            {filteredRequests.length > 0 ? (
              filteredRequests.map((req) => {
                if (req.status == 'accepted') {
                  return (
                    <div className={'responsebox'} key={req._id}>
                      <p>
                        <strong>Request accepted!</strong>
                        <br /> You will shortly receive an email with all the data of the
                        new swapper
                      </p>
                    </div>
                  );
                }
                if (req.status == 'rejected') {
                  return (
                    <div key={req._id} className={'responsebox'}>
                      <p>
                        <strong>Request rejected</strong>
                        <br />
                        Oh no!! We will inform the user of your decision
                      </p>
                    </div>
                  );
                }

                if (user._id != req.userfrom) {
                  return (
                    <div className="requestCard" key={req._id}>
                      <div className="imgreq">
                        <img
                          className={'reqprod'}
                          src={req.product.image1}
                          alt={req.product.name}
                        />
                      </div>
                      <div className="textrequest">
                        <h3>{req.userfrom.name} wants your product!!</h3>
                        <span className="spanreq">
                          <q className="quote">{req.message}</q>
                          <button
                            className="green"
                            name="status"
                            value="accepted"
                            onClick={() => handleRequest(req._id, 'accepted')}
                          >
                            Accept
                          </button>
                          <button
                            className="red"
                            name="status"
                            value="rejected"
                            onClick={() => handleRequest(req._id, 'rejected')}
                          >
                            Reject
                          </button>
                        </span>
                      </div>
                    </div>
                  );
                }
              })
            ) : (
              <div>No product requests.</div>
            )}
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
      <div className="chatinbox">
        {loaded ? (
          filteredRequestsent.map((item) => {
            if (item.status === 'pending') {
              return (
                <div className={'responsebox'} key={item._id}>
                  <p>Tu solicitud está pendiente</p>
                </div>
              );
            }
            if (item.status === 'accepted') {
              return (
                <div className={'responsebox'} key={item._id}>
                  <p>Tu solicitud está aceptada</p>
                  <button
                    onClick={() => {
                      setComment(true);
                    }}
                  >
                    Comment
                  </button>
                  <CommentModal />
                </div>
              );
            }
            if (item.status === 'rejected') {
              return (
                <div className={'responsebox'} key={item._id}>
                  <p>Tu solicitud ha sido rechazada</p>
                </div>
              );
            }
          })
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </ChatStyled>
  );
};

export default Chat;
