import { useContext, useEffect, useState } from 'react';

import { UserContext } from '../context/UserContext';
import { API } from '../services/API';
import DivFlex from '../ui-components/DivFlex';
import FavIcon from '../ui-components/Favicon';

const Favorites = () => {
  const [fav, setFav] = useState();
  fav;
  const { user, addFav, setAddFav, detail, product } = useContext(UserContext);
  const getFavorites = () => {
    API.get(`/users/${user._id}`).then((res) => {
      localStorage.setItem('favorites', JSON.stringify(res.data));
      setFav(res.data);
    });
  };
  const removeFavorite = () => {
    API.patch(`products/favorites/${detail}`).then((res) => {
      console.log(res.data);
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
        {favorits?.favorites && !addFav ? (
          favorits.favorites.map((item) => {
            return (
              <figure key={item._id}>
                <img src={item.image1} alt={item.title} />

                {item.image2 && <img src={item.image2} alt={item.title} />}
                {item.image3 && <img src={item.image3} alt={item.title} />}
                <h3>{item.title}</h3>
                <button
                  onClick={() => {
                    removeFavorite(product);
                    setAddFav(!addFav);
                  }}
                >
                  {addFav ? (
                    <FavIcon
                      className={'fav-icon'}
                      src={
                        'https://res.cloudinary.com/dnkacmdmh/image/upload/v1679738836/love_jtiq6k.png'
                      }
                      alt={'favadd icon'}
                    />
                  ) : (
                    <FavIcon
                      className={'fav-icon'}
                      src={
                        'https://res.cloudinary.com/dnkacmdmh/image/upload/v1679738833/heart_2_ii0nmr.png'
                      }
                      alt={'favadd icon'}
                    />
                  )}
                </button>
              </figure>
            );
          })
        ) : (
          <p>No hay favoritos guardados</p>
        )}
      </DivFlex>
    </main>
  );
};

export default Favorites;
