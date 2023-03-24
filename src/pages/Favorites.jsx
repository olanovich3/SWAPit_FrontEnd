import { useContext, useEffect } from 'react';

import { UserContext } from '../context/UserContext';
import { API } from '../services/API';

const Favorites = () => {
  const { user } = useContext(UserContext);
  console.log(user);
  const getFavorites = () => {
    API.get(`users/${user}`).then((res) => console.log(res));
  };

  useEffect(() => {
    getFavorites();
  });
  return <main></main>;
};

export default Favorites;
