import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './components/App';
import AboutPage from './components/AboutPage';
import Store from './components/Store';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        { index: true, element: <AboutPage /> },
        { path: 'store', element: <Store /> },
      ],
    },
    { path: 'g', element: <Store /> },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
