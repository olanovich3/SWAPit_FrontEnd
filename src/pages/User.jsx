import styled from 'styled-components';

const UserStyled = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;

  & .usercard {
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    padding: 20px;
    width: 600px;
    height: 600px;
  }
`;

const User = () => {
  return (
    <UserStyled>
      <div className="usercard">DATOS DEL USUARIO DUEÑO</div>
    </UserStyled>
  );
};

export default User;
