import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './components/App';
import AboutPage from './components/AboutPage';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [{ index: true, element: <AboutPage /> }],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
