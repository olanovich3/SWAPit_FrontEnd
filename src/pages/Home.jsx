import './Home.css';

import Button from '../ui-components/Button';
import Carousel from '../ui-components/Carousel';
import CarouselByFavorites from '../ui-components/CarouselbyFavorites';
import CarouselUltimosProductos from '../ui-components/CarouselUltimosProductos';
import CategoriesNav from '../ui-components/CategoriesNav';
import DivFlex from '../ui-components/DivFlex';
import Search from '../ui-components/Search';

const Home = () => {
  return (
    <main className="home">
      <h1>Give what you don’t need & find what you’re missing</h1>
      <h2>from your heart to theirs, through our app</h2>
      <div className="h-search">
        <Search
          className={'categories'}
          placeholder={'🔍 Search in all categories'}
        ></Search>
        <Button text={'Search'}></Button>
      </div>
      <DivFlex direction={'column'} gap={'2rem'} padding={'3rem 0'}>
        <h2>Discover</h2>
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
