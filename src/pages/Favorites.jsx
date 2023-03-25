import { useContext, useEffect, useState } from 'react';

import { UserContext } from '../context/UserContext';
import { API } from '../services/API';
import DivFlex from '../ui-components/DivFlex';

const Favorites = () => {
  const [fav, setFav] = useState();
  fav;
  const { user, addFav } = useContext(UserContext);
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
              <button>
                {addFav ? (
                  <img
                    className="favicon"
                    src="https://res.cloudinary.com/dnkacmdmh/image/upload/v1679738836/love_jtiq6k.png"
                    alt="favadd icon"
                  ></img>
                ) : (
                  <img
                    className="favicon"
                    src="https://res.cloudinary.com/dnkacmdmh/image/upload/v1679738833/heart_2_ii0nmr.png"
                    alt="notfav icon"
                  />
                )}
              </button>
            </figure>
          );
        })}
      </DivFlex>
    </main>
  );
};

export default Favorites;
