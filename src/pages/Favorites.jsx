import { useContext, useEffect, useState } from 'react';

import { UserContext } from '../context/UserContext';
import { API } from '../services/API';
import DivFlex from '../ui-components/DivFlex';

const Favorites = () => {
  const [fav, setFav] = useState();
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
      <DivFlex>
        {favorits.favorites.map((item) => {
          return (
            <figure key={item._id}>
              <img src={item.image1} alt={item.title} />

              {item.image2 && <img src={item.image2} alt={item.title} />}
              {item.image3 && <img src={item.image3} alt={item.title} />}
              <h3>{item.title}</h3>
            </figure>
          );
        })}
      </DivFlex>
    </main>
  );
};

export default Favorites;
