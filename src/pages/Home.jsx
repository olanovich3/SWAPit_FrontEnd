import './Home.css';

import { NavLink } from 'react-router-dom';

import Button from '../ui-components/Button';
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
        <div className="categbtns">
          <NavLink to="/categories">
            <img
              src="https://res.cloudinary.com/dlvbfzkt9/image/upload/v1679410545/Resources/6344366_tfv88q.png"
              alt="icon"
            />
            <p>All</p>
          </NavLink>
          <NavLink to="/categories">
            <img
              src="https://res.cloudinary.com/dlvbfzkt9/image/upload/v1679413832/SWAPit/3729559_fvj3nx.png"
              alt="icon"
            />
            <p>Movies, Books & Music</p>
          </NavLink>
          <NavLink to="/categories">
            <img
              src="https://res.cloudinary.com/dlvbfzkt9/image/upload/v1679413101/SWAPit/9022479_bztwie.png"
              alt="icon"
            />
            <p>Videogames</p>
          </NavLink>
          <NavLink to="/categories">
            <img
              src="https://res.cloudinary.com/dlvbfzkt9/image/upload/v1679410936/SWAPit/6020736_dvs8rj.png"
              alt="icon"
            />
            <p>Appliances</p>
          </NavLink>
          <NavLink to="/categories">
            <img
              src="https://res.cloudinary.com/dlvbfzkt9/image/upload/v1679411365/SWAPit/408533_wvtjvm.png"
              alt="icon"
            />
            <p>Electronic</p>
          </NavLink>
          <NavLink to="/categories">
            <img
              src="https://res.cloudinary.com/dlvbfzkt9/image/upload/v1679411476/SWAPit/4163679_flhkfw.png"
              alt="icon"
            />
            <p>Sports & Leisure</p>
          </NavLink>
          <NavLink to="/categories">
            <img
              src="https://res.cloudinary.com/dlvbfzkt9/image/upload/v1679411613/SWAPit/2590393_qgw0c8.png"
              alt="icon"
            />
            <p>Home</p>
          </NavLink>
          <NavLink to="/categories">
            <img
              src="https://res.cloudinary.com/dlvbfzkt9/image/upload/v1679413744/SWAPit/3434148_japhcx.png"
              alt="icon"
            />
            <p>Other</p>
          </NavLink>
        </div>
      </DivFlex>
    </main>
  );
};

export default Home;
