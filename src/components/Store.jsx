import { useState, useEffect } from 'react';
import getCategories from '../apiCalls';

export default function Store() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      const categoriesData = await getCategories();
      setCategories(categoriesData);
    };
    fetchCategories();
  }, []);

  console.log(categories);
  return (
    <div>
      <div>
        {categories.length > 0 && (
          <div>
            <label htmlFor='category'>Please Choose The Category</label>
            <select name='category' id='category'>
              {categories.map((element, index) => {
                return (
                  <option key={index} value={element} data-testid = 'options'>
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
