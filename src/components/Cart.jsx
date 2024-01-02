import { useContext } from 'react';
import { CartContext } from './App';
import CartItemCard from './CartItemCard';
import styles from '../styles/Cart.module.css';

export default function Cart() {
  const { cartItems } = useContext(CartContext);
  console.log(cartItems, 55555);

  return (
    <div>
      <div>
        <div className={styles.cart}>
          {cartItems.length > 0 &&
            cartItems.map((item, index) => {
              return <CartItemCard item={item} index={index} key={item.id} />;
            })}
        </div>
      </div>
    </div>
  );
}
