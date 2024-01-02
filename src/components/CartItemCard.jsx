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
      <h3>{item.title}</h3>
      <p>Quantity: {item.qnt}</p>
      <p>Price: {item.price * item.qnt}$</p>
      <button
        onClick={() => {
          deleteCartItem(index);
        }}
      >
        Delete
      </button>
    </div>
  );
}

CartItemCard.propTypes = {
  item: propTypes.object,
};
