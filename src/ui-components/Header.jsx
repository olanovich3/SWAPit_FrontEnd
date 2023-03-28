import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { UserContext } from '../context/UserContext';
import Palette from '../styles/Palette';
import Button from './Button';
import RegisterModal from './RegisterModal';
import RegisterModalCreate from './RegisterModalCreate';
const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 0 5rem;
  align-items: center;
  background-color: ${Palette.background};
  & .mainLogo {
    font-family: 'Caveat Brush', cursive;
    color: #07689f;
    font-size: 3.2rem;
  }
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
  & .favorite {
    width: 20px;
  }
  & .favoriteavatar {
    width: 28px;
    height: 28px;
    border-radius: 50%;
  }
  & .nav_toggle {
    display: none;
  }
  @media (max-width: 770px) {
    .mainLogo {
      font-size: 2.7rem;
    }
    .headerNav {
      position: absolute;
      top: 100px;
      left: 0;
      background: ${Palette.secondary};
      display: flex;
      flex-direction: column;
      width: 100%;
      height: -webkit-fill-available;
      transform: translateX(-100%);
      transition: 0.3s ease all;
    }
    .headerNav > a {
      color: white;
    }
    .headerNav.open {
      transform: translate(0) !important;
    }
    .nav_toggle {
      display: flex !important;
      flex-direction: column;
      margin: 15px;
    }
    .nav_toggle span {
      width: 30px;
      height: 4px;
      background: ${Palette.secondary};
      margin-bottom: 5px;
      border-radius: 2px;
      transform-origin: 5px 0px;
      transition: all 0.2s linear;
    }
    .nav_toggle.open > span {
      transform: rotate(45deg) translate(0px, 0px);
    }
    .nav_toggle.open > span:nth-child(2) {
      display: none;
    }
    .nav_toggle.open > span:nth-child(3) {
      transform: rotate(-45deg) translate(-5px, 1px);
    }
  }
`;
const Header = () => {
  const { user, logout } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <HeaderStyled>
      <NavLink className="swapitlogo" to="/">
        {/* <img
          src="https://res.cloudinary.com/dlvbfzkt9/image/upload/v1679422771/SWAPit/SwapitLogo_wybblb.png"
          alt="Swapit logo"
        /> */}
        <h1 className="mainLogo">Swap it</h1>
      </NavLink>
      <div className={`headerNav ${isOpen && 'open'}`}>
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
            Inbox
          </NavLink>
        )}
        {user && (
          <NavLink className="navheader" to="profile">
            <img className="favoriteavatar" src={user.avatar} alt="favorite Logo" />
            {user.name}
          </NavLink>
        )}
        {user ? (
          <NavLink to="createproduct">
            <Button className={'principal'} text={'Create Product'} />
          </NavLink>
        ) : (
          <RegisterModalCreate />
        )}

        {!user && <RegisterModal />}
        {user && (
          <Button
            className={'secondary'}
            bg={'second'}
            color={'second'}
            text={'Log out'}
            border={'yes'}
            padding={'sm'}
            action={() => logout()}
          />
        )}
      </div>
      <button
        className={`nav_toggle ${isOpen && 'open'}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </HeaderStyled>
  );
};
export default Header;
