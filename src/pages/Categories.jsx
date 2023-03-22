import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { API } from '../services/API';
import CategoryCard from '../ui-components/CategoryCard';

const Categories = () => {
  const [categories, setCategories] = useState(null);

  const [cat, setCat] = useState('');
  const { category } = useParams();
  const getCategories = async () => {
    try {
      const res = await API.get(`/products/categories/${category}`);
      setCategories(res.data);
      setCat(category);
      console.log(res.data);
    } catch (error) {
      console.log(categories);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <main>
      <CategoryCard cat={cat}>categories</CategoryCard>
    </main>
  );
};

export default Categories;
