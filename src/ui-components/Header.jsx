import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { UserContext } from '../context/UserContext';
import Palette from '../styles/Palette';
import Button from './Button';
import RegisterModal from './RegisterModal';
const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 0 5rem;
  align-items: center;
  background-color: ${Palette.background};

  & .headerNav {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }
  & .navheader {
    color: ${Palette.primary};
    transition: all 0.2s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.1rem;
    font-weight: 500;
  }

  & .logoname {
    color: ${Palette.secondary};
  }
  & .favorite {
    width: 20px;
  }
  & .favoriteavatar {
    width: 28px;
    height: 28px;
    border-radius: 50%;
  }
`;
const Header = () => {
  const { user, logout } = useContext(UserContext);
  return (
    <HeaderStyled>
      <div>
        <h1 className="logoname">Swap it</h1>
      </div>
      <div className="headerNav">
        {user && (
          <NavLink className="navheader" to="favorites">
            <img
              className="favorite"
              src="https://res.cloudinary.com/dnkacmdmh/image/upload/v1679436989/heart_juccjj.png"
              alt="favorite Logo"
            />
            Favorites
          </NavLink>
        )}
        {user && (
          <NavLink className="navheader" to="chat">
            <img
              className="favorite"
              src="https://res.cloudinary.com/dnkacmdmh/image/upload/v1679436989/correo_hogtcn.png"
              alt="favorite Logo"
            />
            InBox
          </NavLink>
        )}
        {user && (
          <NavLink className="navheader" to="profile">
            <img className="favoriteavatar" src={user.avatar} alt="favorite Logo" />
            {user.name}
          </NavLink>
        )}

        <Button className={'principal'} text={'Create Product'} />
        {!user && <RegisterModal />}
        {user && (
          <Button
            className={'secondary'}
            bg={'second'}
            color={'second'}
            text={'Logout'}
            border={'yes'}
            action={() => logout()}
          />
        )}
      </div>
    </HeaderStyled>
  );
};
export default Header;
