import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';

import { UserContext } from '../context/UserContext';
import { API } from '../services/API';

const ProductsStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 4rem;

  & .productscard {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 1px solid black;
    padding: 1rem;
    gap: 1rem;
    width: 250px;
    height: 320px;
    border-radius: 0.5rem;
  }
  & .productscard img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }
  & .productscard h3 {
    font-size: 16px;
    text-align: center;
  }
`;
const Categories = () => {
  const { value } = useContext(UserContext);
  const [products, setProducts] = useState([]);
  const [load, setLoad] = useState(false);
  load;
  const [filterProd, setFilterProd] = useState([]);
  const getProducts = () => {
    API.get('/products').then((res) => {
      setProducts(res.data);
      setFilterProd(res.data);
      localStorage.setItem('products', JSON.stringify(res.data));
      filterProducts(value);
      setLoad(true);
      if (!value) {
        return [];
      }
    });
  };
  const filterProducts = (value) => {
    console.log(value);
    const products = JSON.parse(localStorage.getItem('products'));
    console.log(products);
    const filterProducts = products.filter(
      (product) =>
        product.title.toLowerCase().includes(value.toLowerCase()) ||
        product.category.toLowerCase().includes(value.toLowerCase()),
    );

    setFilterProd(filterProducts);
  };
  useEffect(() => {
    getProducts();
  }, [value]);

  console.log(filterProd);

  return (
    <main>
      <ProductsStyled>
        {products.map((item) => {
          return (
            <figure key={item._id} className="productscard">
              <img src={item.image1} alt={item.title} />
              <h3>{item.title}</h3>
            </figure>
          );
        })}
      </ProductsStyled>
    </main>
  );
};

