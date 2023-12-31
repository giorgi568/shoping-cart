const getCategories = async () => {
  let categories;
  try {
    const response = await fetch(
      'https://fakestoreapi.com/products/categories'
    );
    categories = await response.json();
  } catch (error) {
    console.error(error);
    categories = [];
  }
  return categories;
};
const getProducts = async (category) => {
  let products;
  try {
    const response = await fetch(
      `https://fakestoreapi.com/products/category/${category}`
    );
    products = await response.json();
  } catch (error) {
    console.log(error);
    products = [];
  } finally {
    // console.log(products);
    return products;
  }
};

export {getCategories, getProducts}
