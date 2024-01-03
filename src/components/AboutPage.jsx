import styles from '../styles/About.module.css';
import { useEffect, useState } from 'react';

export default function AboutPage() {
  const [wrapperStyle, setWrapperStyle] = useState({});

  useEffect(() => {
    setWrapperStyle({
      transform: 'translateX(0px)',
    });
  }, []);
  return (
    <div className={styles.wrapper}>
      <img
        src='shoping.svg'
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
