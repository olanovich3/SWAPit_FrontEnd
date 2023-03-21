import styled from 'styled-components';

const ChatStyled = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;

  & .chatinbox {
    border: solid 2px black;
    width: calc((100% - 1em) / 3);
    background-color: aquamarine;
    float: left;
    height: 100%;
    padding: 4rem;
  }
  & .chatchat {
    width: calc((100% - 1em) / 3 + 30em);
    border: solid 2px black;
    background-color: whitesmoke;
    height: 100%;
    padding: 4rem;
  }
  & .chatproduct {
    width: calc((100% - 1em) / 3);
    float: right;
    border: solid 2px black;
    background-color: whitesmoke;
    height: 100%;
    padding: 4rem;
  }
`;

const Chat = () => {
  return (
    <ChatStyled>
      <div className="chatinbox">INBOX</div>
      <div className="chatchat">CHAT</div>
      <div className="chatproduct">PRODUCT</div>
    </ChatStyled>
  );
};

export default Chat;
