import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';

import { UserContext } from '../context/UserContext';
import { API } from '../services/API';
import Palette from '../styles/Palette';
import DivFlex from '../ui-components/DivFlex';

const ChatStyled = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 10vw 90vw;
  padding: 0 4rem;
  border-radius: 0.5rem;
  gap: 1rem;
  padding-bottom: 4rem;

  & .chatinbox {
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #e5e5e5;

    grid-column: 2 / 3;
    grid-row: 2/ 3;
    background-color: ${Palette.background};
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    border-radius: 0.5rem;
  }

  & .requestchat {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
    grid-column: 1 / 2;
    grid-row: 2 / 2;

    width: 100%;
    background-color: ${Palette.background};
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    border-radius: 0.5rem;
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

    padding: 1rem;
    width: 100%;
    border-radius: 0.5rem;
    gap: 0.6rem;
  }

  .requestCard h3 {
    display: flex;
    background-color: ${Palette.background};
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
  & .responsebox {
    padding: 0.5rem;
    border-radius: 1rem;
    background-color: white;
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

  const deleteRequest = (id) => {
    API.delete(`/request/${id}`).then(() => {});
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
      <div className="requestchat">
        <h3>Product Request</h3>
        <div>
          {loaded ? (
            <div>
              {filteredRequests.length > 0 ? (
                filteredRequests.map((req) => {
                  if (req.status == 'accepted') {
                    return (
                      <div className={'responsebox'} key={req._id}>
                        <button
                          onClick={() => {
                            deleteRequest();
                          }}
                        >
                          X
                        </button>
                        <p>
                          <strong>Request accepted!</strong>
                          <br /> You will shortly receive an email with all the data of
                          the new swapper
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
      <div className="chatinbox">InBox</div>
    </ChatStyled>
  );
};

export default Chat;
