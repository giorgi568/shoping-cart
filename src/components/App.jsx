import '../App.css';
import { Outlet } from 'react-router-dom';
import styles from "../styles/App.module.css"

function App() {
  return (
    <>
      <div className={styles.nav}>
        <div className={styles.btnContainer}>
          <button className={styles.btn}>About Us</button>
          <button className={styles.btn}>Store</button>
          <div className={styles.slider} style={{transform: 'translateX(100%)'}}></div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default App;
