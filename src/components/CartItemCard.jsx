import propTypes, { object } from 'prop-types';
import styles from '../styles/CartItemCard.module.css';
import { useContext, useState } from 'react';
import { CartContext } from './App';

export default function CartItemCard({ item, index }) {
  const { cartItems, addToCart } = useContext(CartContext);
  const deleteCartItem = (index) => {
    const newItems = [...cartItems];
    newItems.splice(index, 1);
    addToCart(newItems);
  };
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{item.title}</h3>
      <p className={styles.quantity}>Quantity:{item.qnt}</p>
      <p className={styles.price}>Price:{item.price * item.qnt}$</p>
      <button
        className={styles.btn}
        onClick={() => {
          deleteCartItem(index);
        }}
      >
        <img src="./close.svg" alt="close" />
      </button>
    </div>
  );
}

CartItemCard.propTypes = {
  item: propTypes.object,
};
