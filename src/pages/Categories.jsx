import { useContext, useState } from 'react';
import { useEffect } from 'react';

import { UserContext } from '../context/UserContext';
import { API } from '../services/API';
import CategoryCard from '../ui-components/CategoryCard';
import Divflex from '../ui-components/DivFlex';

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
    });
  };
  useEffect(() => {
    getCategories();
  }, []);
  return (
    <main>
      {!load ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          <Divflex transform={'capitalize'}>
            <h2 className="categoryTitle">{cat}</h2>
          </Divflex>
          <Divflex>
            {categories.map((item) => (
              <CategoryCard category={item} key={item._id} />
            ))}
          </Divflex>
        </div>
      )}
    </main>
  );
};

export default Categories;
