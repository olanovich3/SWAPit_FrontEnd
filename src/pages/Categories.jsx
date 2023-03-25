import { useContext, useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';

import { UserContext } from '../context/UserContext';
import { API } from '../services/API';
import DivFlex from '../ui-components/DivFlex';
import ProductFigure from '../ui-components/ProductFigure';
import Spinner from '../ui-components/Spinner';

const CategoriesStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 4rem;
`;

const Categories = () => {
  const { category } = useContext(UserContext);
  const [categories, setCategories] = useState([null]);
  const [load, setLoad] = useState(false);

  const [cat, setCat] = useState('');

  const getCategories = () => {
    API.get(`/products/categories/${category}`).then((res) => {
      setCategories(res.data);
      setCat(category);
      setLoad(true);
      console.log(res.data);
    });
  };
  useEffect(() => {
    getCategories();
  }, [category]);
  return (
    <main>
      <DivFlex transform={'uppercase'} padding={'2rem 0 0'}>
        <h2 className="categoryTitle">{cat}</h2>
      </DivFlex>
      <CategoriesStyled>
        {!load ? (
          <Spinner />
        ) : (
          categories.map((prod) => (
            <ProductFigure product={prod} key={prod._id}></ProductFigure>
          ))
        )}
      </CategoriesStyled>
    </main>
  );
};

export default Categories;
