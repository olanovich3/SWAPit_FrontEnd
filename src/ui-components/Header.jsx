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
  }
  & .navheader:hover {
    color: ${Palette.secondary};
  }
  & .logoname{
    color: ${Palette.secondary}
  }
`;
const Header = () => {
  const { user } = useContext(UserContext);
  return (
    <HeaderStyled>
      <div>
        <h1 className="logoname">Swap it</h1>
      </div>
      <div className="headerNav">
        {user && (
          <NavLink className="navheader" to="favorites">
            Favorites
          </NavLink>
        )}
        {user && (
          <NavLink className="navheader" to="chat">
            InBox
          </NavLink>
        )}
        {user && (
          <NavLink className="navheader" to="profile">
            Profile
          </NavLink>
        )}

        {!user && <RegisterModal />}
        <Button text={'Create Product'} />
      </div>
    </HeaderStyled>
  );
};
export default Header;
