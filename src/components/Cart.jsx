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
          {cartItems.length > 0 && (
            <CartItemCard
              item={cartItems[0]}
              index={0}
            />
          )}
        </div>
      </div>
    </div>
  );
}
