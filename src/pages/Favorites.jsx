import './Favorites.css';

import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserContext } from '../context/UserContext';
import { API } from '../services/API';
import DivFlex from '../ui-components/DivFlex';
import ProductFigure from '../ui-components/ProductFigure';

const Favorites = () => {
  const navigate = useNavigate();

  const { user, setUser } = useContext(UserContext);

  const getUser = () => {
    API.get(`http://localhost:8080/api/v1/users/${user._id}`).then((res) => {
      localStorage.setItem('localuser', JSON.stringify(res.data));
      setUser(res.data);
    });
  };

  const removeFavorite = (id) => {
    API.patch(`products/favorites/${id}`).then(() => {
      getUser();
      navigate('/favorites');
    });
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <main>
      <DivFlex gap={'2rem'} margin={'2rem'}>
        {user.favorites.map((item) => {
          return (
            <DivFlex key={item._id} direction={'column'} gap={'0.5rem'}>
              <button
                className="butonfav"
                onClick={() => {
                  removeFavorite(item._id);
                }}
              >
                Remove Item
              </button>
              <ProductFigure product={item}></ProductFigure>
            </DivFlex>
          );
        })}
      </DivFlex>
    </main>
  );
};

export default Favorites;
