import { useContext, useEffect, useState } from 'react';

import { UserContext } from '../context/UserContext';
import { API } from '../services/API';
import DivFlex from '../ui-components/DivFlex';
import ProductFigure from '../ui-components/ProductFigure';

const Favorites = () => {
  const [fav, setFav] = useState();
  fav;
  const { user } = useContext(UserContext);
  const getFavorites = () => {
    API.get(`/users/${user._id}`).then((res) => {
      localStorage.setItem('favorites', JSON.stringify(res.data));
      setFav(res.data);
    });
  };

  useEffect(() => {
    getFavorites();
  }, []);
  const favorits = JSON.parse(localStorage.getItem('favorites'));
  console.log(favorits);
  return (
    <main>
      <DivFlex gap={'2rem'}>
        {favorits &&
          favorits.favorites.map((item) => {
            return <ProductFigure product={item} key={item._id}></ProductFigure>;
          })}
      </DivFlex>
    </main>
  );
};

export default Favorites;
