import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';

import { UserContext } from '../context/UserContext';
import { API } from '../services/API';
import Palette from '../styles/Palette';
import DivFlex from '../ui-components/DivFlex';

const ChatStyled = styled.main`
  display: grid;
  grid-template-columns: 20vw 1fr 20vw;
  padding: 2rem 4rem;
  min-height: 80vh;

  & .chatinbox {
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #e5e5e5;
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    background-color: pink;
  }

  & .mainchat {
    display: flex;
    justify-content: center;
    align-items: center;
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    background-color: green;
  }
  & .requestchat {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
    grid-column: 3 / 3;
    grid-row: 1 / 2;
    border: 1px solid black;
    width: 100%;
  }
  & .reqprod {
    width: 80px;
    height: 80px;
  }

  & .requestCard {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid ${Palette.secondary};
    background-color: ${Palette.background};
    padding: 1rem;
    width: 18vw;
    border-radius: 0.5rem;
    gap: 0.6rem;
  }

  .requestCard h3 {
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: 16px;
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
`;

const Chat = () => {
  const [loaded, setLoaded] = useState(false);
  const { user } = useContext(UserContext);

  const [request, setRequest] = useState([]);

  const getAllRequest = () => {
    API.get(`/request`).then((res) => {
      setRequest(res.data);
      setLoaded(true);

      console.log(res.data);
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
  const productosByUser = user.products;
  const userProductsIds = user.products.map((product) => product._id);
  console.log(productosByUser);

  const filteredRequests = request.filter((req) =>
    userProductsIds.includes(req.product._id),
  );

  useEffect(() => {
    getAllRequest();
  }, []);

  return (
    <ChatStyled>
      <div className="chatinbox">InBox</div>
      <div className="mainchat">Chat</div>

      <div className="requestchat">
        <h3>Product Request</h3>
        <div>
          {loaded ? (
            <div>
              {filteredRequests.length > 0 ? (
                filteredRequests.map((req) => {
                  if (req.status == 'accepted') {
                    return <div key={req._id}>Petición aceptada</div>;
                  }
                  if (req.status == 'rejected') {
                    return <div key={req._id}>Petición rechazada</div>;
                  }
                  if (user._id !== req.userfrom._id) {
                    return (
                      <div className="requestCard" key={req._id}>
                        <h3>{req.userfrom.name} wants your product!!</h3>
                        <q className="quote">{req.message}</q>
                        <DivFlex gap={'4rem'}>
                          <img
                            className={'reqprod'}
                            src={req.product.image1}
                            alt={req.product.name}
                          />
                          <span className="requestbtn">
                            <button
                              name="status"
                              value="accepted"
                              onClick={() => handleRequest(req._id, 'accepted')}
                            >
                              Accept
                            </button>
                            <button
                              name="status"
                              value="rejected"
                              onClick={() => handleRequest(req._id, 'rejected')}
                            >
                              Reject
                            </button>
                          </span>
                        </DivFlex>
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
      </div>
    </ChatStyled>
  );
};

export default Chat;
