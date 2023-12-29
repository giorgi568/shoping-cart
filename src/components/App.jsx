import '../App.css';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import styles from '../styles/App.module.css';

function App() {
  const location = useLocation().pathname;
  let navigate = useNavigate();
  const sliderStyle =
    location === '/store' ? { transform: 'translateX(100%)', borderRadius:' 0px 8px 8px 0px' } : {};
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
      </div>
      <Outlet />
    </>
  );
}

export default App;
