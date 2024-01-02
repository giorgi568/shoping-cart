import { useContext } from 'react';
import { CartContext } from './App';
import CartItemCard from './CartItemCard';

export default function Cart() {
  const { cartItems } = useContext(CartContext);
  console.log(cartItems, 55555);

  return (
    <div>
      <div>
        <div>
          {cartItems.length > 0 &&
            cartItems.map((item, index) => {
              return <CartItemCard item={item} index={index} />;
            })}
        </div>
      </div>
    </div>
  );
}
