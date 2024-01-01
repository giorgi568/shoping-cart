import { useState, useEffect } from 'react';
import { getCategories, getProducts } from '../apiCalls';
import ItemCard from './ItemCard';
import styles from '../styles/Store.module.css';

export default function Store() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [productArr, setProductArr] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      const categoriesData = await getCategories();
      setCategories(categoriesData);
      setSelectedCategory(categoriesData[0]);
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      if (selectedCategory != '') {
        const products = await getProducts(selectedCategory);
        setProductArr(products);
      }
    };
    fetchProducts();
  }, [selectedCategory]);

  const handleSelectChange = (event) => {
    const selectedOption = event.target.value;
    setSelectedCategory(selectedOption);
  };
  // console.log(productArr[0].description);
  return (
    <div className={styles.content}>
      <div>
        {categories.length > 0 && (
          <div className={styles.categoryWrapper}>
            <label htmlFor='category'>Please Choose The Category</label>
            <select name='category' id='category' onChange={handleSelectChange}>
              {categories.map((element, index) => {
                return (
                  <option key={index} value={element} data-testid='options'>
                    {element}
                  </option>
                );
              })}
            </select>
          </div>
        )}
      </div>
      {productArr.length > 0 &&
        productArr.map((item) => {
          return <ItemCard item={item} key={item.id} />;
        })}
    </div>
  );
}
