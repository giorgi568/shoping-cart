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

export default getCategories;