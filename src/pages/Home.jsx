import './Home.css';

import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserContext } from '../context/UserContext';
import Button from '../ui-components/Button';
import Carousel from '../ui-components/Carousel';
import CarouselByFavorites from '../ui-components/CarouselbyFavorites';
import CarouselUltimosProductos from '../ui-components/CarouselUltimosProductos';
import CategoriesNav from '../ui-components/CategoriesNav';
import DivFlex from '../ui-components/DivFlex';
import Search from '../ui-components/Search';

const Home = () => {
  const { value, setValue } = useContext(UserContext);
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();
  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = () => {
    setValue(searchValue);
    navigate('/products');
    console.log(value);
  };
  return (
    <main className="home">
      <h1>Give what you don’t need & find what you’re missing</h1>
      <h2>from your heart to theirs, through our app</h2>
      <div className="h-search">
        <Search
          value={searchValue}
          action={handleInputChange}
          className={'categories'}
          placeholder={' Search in all categories'}
        ></Search>
        <Button action={handleSearch} text={'Search'}></Button>
      </div>
      <DivFlex direction={'column'} gap={'2rem'} padding={'2rem 0'}>
        <h2>Discover our categories</h2>
      </DivFlex>
      <CategoriesNav />
      <div>
        <CarouselUltimosProductos />
      </div>
      <div>
        <CarouselByFavorites />
      </div>
      <div>
        <Carousel />
      </div>
    </main>
  );
};

export default Home;
