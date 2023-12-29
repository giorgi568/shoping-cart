import styles from '../styles/About.module.css';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function AboutPage() {
  const location = useLocation().pathname;
  const isAboutPage = location === '/';
  const [initialRender, setInitialRender] = useState(true);
  useEffect(() => {
    setInitialRender(false);
  }, []);
  const wrapperStyle = {
    transform:
      isAboutPage || initialRender ? 'translateX(0px)' : 'translateX(-200px)',
    transition: 'transform 50s ease-in-out',
  };
  return (
    <div className={styles.wrapper}>
      <img
        src='/public/shoping.svg'
        alt='shoping illustration'
        width={'400px'}
        className={styles.img}
        style={wrapperStyle}
      />
      <h1 className={styles.header}>
        Hellow! This Is A Personal Project And Not A Real Service.
      </h1>
      <p className={styles.text}>
        {' '}
        In This Dummy Online Shopping Website You Can Swift Through Different
        Products, Put Them Into Your Shoping Cart And Even Attempt To Checkout
        (Spoiler Alert!!! It Won&apos;t Work)
      </p>
    </div>
  );
}
