import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';

import { UserContext } from '../context/UserContext';
import { API } from '../services/API';
import ProductFigure from '../ui-components/ProductFigure';

const ProductsStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 4rem;
`;
const Products = () => {
  const { value } = useContext(UserContext);
  const [products, setProducts] = useState([]);
  const [load, setLoad] = useState(false);
  products;
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
        {filterProd.map((prod) => (
          <ProductFigure product={prod} key={prod._id}></ProductFigure>
        ))}
      </ProductsStyled>
    </main>
  );
};

export default Products;
