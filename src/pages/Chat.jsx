import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';

import { UserContext } from '../context/UserContext';
import { API } from '../services/API';

const ChatStyled = styled.main`
  display: grid;
  grid-template-columns: 20vw 1fr 20vw;
  padding: 2rem 4rem;

  height: 80vh;

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
    justify-content: center;
    align-items: center;
    grid-column: 3 / 3;
    grid-row: 1 / 2;
    background-color: blue;
  }
`;

const Chat = () => {
  const { user } = useContext(UserContext);
  user;
  request;
  const [request, setRequest] = useState([]);
  const getAllRequest = () => {
    API.get(`/request`).then((res) => {
      setRequest(res.data);
    });
  };

  useEffect(() => {
    getAllRequest();
  }, []);

  return (
    <ChatStyled>
      <div className="chatinbox">InBox</div>
      <div className="mainchat">Chat</div>

      <div className="requestchat">
        <div>
          <h3>Product Request</h3>
          <h3>Product Request</h3>
        </div>
      </div>
    </ChatStyled>
  );
};

export default Chat;
