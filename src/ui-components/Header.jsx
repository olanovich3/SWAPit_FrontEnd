import { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { UserContext } from '../context/UserContext';
import { API } from '../services/API';
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

  & .swapitlogo img {
    height: 2rem;
    width: auto;
  }
  .mainLogo {
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
  & .favoritenew {
    filter: hue-rotate(150deg);
    width: 20px;
  }
  & .favoriteavatar {
    width: 28px;
    height: 28px;
    border-radius: 50%;
  }
`;
const Header = () => {
  const [request, setRequest] = useState([]);
  const [unseenRequests, setUnseenRequests] = useState(0);
  const getRequest = () => {
    API.get(`/request`).then((res) => {
      const requests = res.data;
      const newRequests = requests.filter(
        (req) => req.userFrom === user.id && !req.isViewed,
      );
      setUnseenRequests(newRequests.length);
      setRequest(requests);
      newRequestAlert(requests);
    });
  };
  const newRequestAlert = async () => {
    await request.map((req) => {
      console.log(req);
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      getRequest();
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  const { user, logout } = useContext(UserContext);
  return (
    <HeaderStyled>
      <NavLink className="swapitlogo" to="/">
        {/* <img
          src="https://res.cloudinary.com/dlvbfzkt9/image/upload/v1679422771/SWAPit/SwapitLogo_wybblb.png"
          alt="Swapit logo"
        /> */}
        <h1 className="mainLogo">Swap it</h1>
      </NavLink>
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
          <NavLink className="navheader" to="chat" onClick={() => setUnseenRequests(0)}>
            {unseenRequests ? (
              <img
                className="favoritenew"
                src="https://res.cloudinary.com/dnkacmdmh/image/upload/v1680043436/warning_rdfkvd.png"
                alt="Icono de solicitud nueva"
              />
            ) : (
              <img
                className="favorite"
                src="https://res.cloudinary.com/dnkacmdmh/image/upload/v1679436989/correo_hogtcn.png"
                alt="chat Logo"
              />
            )}
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
    </HeaderStyled>
  );
};
export default Header;
