import { useContext } from 'react';
import { CartContext } from './App';
import CartItemCard from './CartItemCard';
import styles from '../styles/Cart.module.css';

export default function Cart() {
  const { cartItems } = useContext(CartContext);
  const getTotalPrice = () => {
    let total = 0;
    if (cartItems.length > 0) {
      cartItems.forEach((item) => {
        if (item.qnt) {
          total += item.price * item.qnt;
        } else {
          total += item.price;
        }
      });
    }
    return total;
  };

  return (
    <div>
      <div className={styles.cart}>
        {cartItems.length > 0 &&
          cartItems.map((item, index) => {
            return <CartItemCard item={item} index={index} key={item.id} />;
          })}
      </div>
      <div className={styles.checkoutBtn}>
        {cartItems.length > 0 && (
          <button
            className={styles.btn}
            onClick={(e) => {
              e.preventDefault;
              window.alert('Checkout not working (not a real store)');
            }}
          >
            Chekout {getTotalPrice()}$
          </button>
        )}
      </div>
      <img className={styles.img} src='./shopping_two.svg' alt='image of a man and lady shopping' />
    </div>
  );
}
