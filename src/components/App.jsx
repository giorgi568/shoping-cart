import '../App.css';
import { Outlet, useLocation, useNavigate, Link } from 'react-router-dom';
import styles from '../styles/App.module.css';
import { createContext } from 'react';

export const CartContext = createContext([]);

function App() {
  const location = useLocation().pathname;
  let navigate = useNavigate();
  let sliderStyle = {};
  if (location === '/cart') {
    sliderStyle = { display: 'none' };
  } else if (location === '/store') {
    sliderStyle = {
      transform: 'translateX(100%)',
      borderRadius: ' 0px 8px 8px 0px',
    };
  }
  return (
    <>
      <div className={styles.nav}>
        <div className={styles.btnContainer}>
          <button className={styles.btn} onClick={() => navigate('/')}>
            About Us
          </button>
          <button className={styles.btn} onClick={() => navigate('/store')}>
            Store
          </button>
          <div className={styles.slider} style={sliderStyle}></div>
        </div>
        <div className={styles.cartLogoWrapper}>
          <Link to={'/cart'}>
            <img src='./shopping_cart.svg' alt='shopping cart logo' />
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default App;
