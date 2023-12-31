import { useState, useEffect } from 'react';
import {getCategories, getProducts} from '../apiCalls';

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
  
  useEffect(()=> {
    const fetchProducts = async () => {
      const products = await getProducts(selectedCategory);
      setProductArr(products);
    }
    fetchProducts();
  }, [selectedCategory]);

  const handleSelectChange = (event) => {
    const selectedOption = event.target.value;
    setSelectedCategory(selectedOption);
  };

  return (
    <div>
      <div>
        {categories.length > 0 && (
          <div>
            <label htmlFor='category'>Please Choose The Category</label>
            <select name='category' id='category' onChange={handleSelectChange}>
              {categories.map((element, index) => {
                return (
                  <option key={index} value={element} data-testid='options' >
                    {element}
                  </option>
                );
              })}
            </select>
          </div>
        )}
      </div>


    </div>
  );
}
