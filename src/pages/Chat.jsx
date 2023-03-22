import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { API } from '../services/API';

const ChatStyled = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;

  & .chatinbox {
    border: 1px solid #d4d4d4;
    width: calc((100% - 1em) / 3);
    background-color: whitesmoke;
    float: left;
    height: 100%;
    padding: 4rem;
  }
  & .chatchat {
    width: calc((100% - 1em) / 3 + 20em);
    border: 1px solid #d4d4d4;
    background-color: whitesmoke;
    height: 100%;
    padding: 4rem;
  }
  & .chatproduct {
    width: calc((100% - 1em) / 3);
    float: right;
    border: 1px solid #d4d4d4;
    background-color: whitesmoke;
    height: 100%;
    padding: 4rem;
  }

  & .chatinbox1 {
    border-bottom: 1px solid #e5e5e5;
  }
`;

const Chat = () => {
  const [chat, setChat] = useState({});
  const getChat = () => {
    API.get('/chats').then((res) => {
      console.log(res);
      setChat(res.data);
      console.log(chat);
    });
  };
  useEffect(() => {
    getChat();
  }, []);
  return (
    <ChatStyled>
      <div className="chatinbox">
        <div className="chatinbox1">INBOX</div>
        <div>CHAT</div>
      </div>

      <div className="chatchat">CHAT</div>
      <div className="chatproduct">PRODUCT</div>
    </ChatStyled>
  );
};

export default Chat;
