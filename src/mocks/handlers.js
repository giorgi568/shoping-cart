import { rest } from 'msw';

export const handlers = [
  rest.get('https://fakestoreapi.com/products/categories', (req, res, ctx) => {
    return res(
      ctx.json(['jewelery', 'cars', 'clothes']) // Replace with your desired mock data
    );
  }),
];