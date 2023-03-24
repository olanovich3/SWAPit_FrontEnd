import { useEffect, useState } from 'react';
import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { API } from '../services/API';
import Spinner from './Spinner';

const CarouselStyled = styled.div`
  height: 30vh;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: none;
  margin: 2rem auto;
  margin-top: 5rem;
  margin-bottom: 8rem;
  & .carousel-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
  }
  & .carousel-head button {
    border: none;
    filter: brightness(60%);
    background-color: transparent;
  }
  & .carousel-head button:hover {
    color: inherit;
    filter: brightness(100%);
  }
  & .scroll-container {
    display: flex;
    align-items: center;
    margin: 0 auto;
    gap: 0.2rem;
  }
  & .scroll-container button {
    border: none;
    background-color: transparent;
  }
  & .scroll-container button img {
    width: 20px;
    border: none;
    filter: brightness(100%);
    background-color: transparent;
    padding: 0.3rem;
    margin: 0.3rem;
  }
  & .scroll-container button img:hover {
    filter: brightness(0%);
  }
  & .prev {
    transform: rotate(180deg);
  }
  & .recent-prods {
    display: flex;
    align-items: center;
    height: 220px;
    width: 80vw;
    gap: 0.5rem;
    overflow-x: scroll;
    scroll-behavior: smooth;
  }
  & .recent-prods::-webkit-scrollbar {
    width: 0;
  }
  & .recent-prods img {
    height: 100%;
    max-width: 200px;
    object-fit: cover;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    margin-top: 0.8rem;
    cursor: pointer;
    border-radius: 5px;
    transition: 0.3s all ease-in-out;
  }
  & .recent-prods img:hover {
    transform: translateY(-10px);
  }
`;

const Carousel = () => {
  const [recentProd, setRecentProd] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const ref = useRef();
  const navigate = useNavigate();

  const scroll = (offset) => {
    ref.current.scrollLeft += offset;
  };
  const getRecent = () => {
    API.get('/products').then((res) => {
      setRecentProd(res.data);
      setLoaded(true);
    });
  };

  useEffect(() => {
    getRecent();
  }, []);

  return (
    <CarouselStyled className="carousel">
      <div className="carousel-head">
        <h2>All Products</h2>

        <button
          onClick={() => {
            navigate('/products');
          }}
        >
          View All
        </button>
      </div>

      <div className="scroll-container">
        <button className="prev" onClick={() => scroll(-1000)}>
          <img
            src="https://res.cloudinary.com/dnb4ujbgr/image/upload/v1676822765/Giphy/svg_xml_base64_PHN2ZyB3aWR0aD0iMTVweCIgaGVpZ2h0PSIzMHB4IiB2aWV3Qm94PSIwIDAgMTUgMzAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiPjxnIHRyYW5zZm9ybT0idHJhbnN_afv3jd.svg"
            alt="prev icon"
          />
        </button>
        <div className="recent-prods" ref={ref}>
          {loaded ? (
            recentProd.map((prod) => (
              <Link to={prod._id} key={prod._id}>
                <img src={prod.image1} alt={prod.title} />
              </Link>
            ))
          ) : (
            <Spinner />
          )}
        </div>
        <button className="next" onClick={() => scroll(1000)}>
          <img
            src="https://res.cloudinary.com/dnb4ujbgr/image/upload/v1676822765/Giphy/svg_xml_base64_PHN2ZyB3aWR0aD0iMTVweCIgaGVpZ2h0PSIzMHB4IiB2aWV3Qm94PSIwIDAgMTUgMzAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiPjxnIHRyYW5zZm9ybT0idHJhbnN_afv3jd.svg"
            alt="next icon"
          />
        </button>
      </div>
    </CarouselStyled>
  );
};

export default Carousel;
