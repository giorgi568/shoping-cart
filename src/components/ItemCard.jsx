import styles from '../styles/ItemCard.module.css';
import propTypes from 'prop-types';
import { useContext, useState } from 'react';
import { CartContext } from './App';

export default function ItemCard({ item }) {
  const { cartItems, addToCart } = useContext(CartContext);
  const [inputError, setInputError] = useState('');
  const [qnt, setQnt] = useState(1);

  const checkQntValue = () => {
    if (qnt > 10) {
      setInputError('over10');
      return false;
    } else if (qnt < 1) {
      setInputError('below1');
      return false;
    } else if (!Number.isInteger(qnt)) {
      setInputError('notInteger');
      return false;
    } else {
      setInputError('');
      return true;
    }
  };

  const checkQnt = (id, qnt) => {
    let lessThanTen = true;
    if (cartItems.length < 1) {
      return true;
    }
    cartItems.forEach((item) => {
      if (item.id === id) {
        if (item.qnt) {
          if (item.qnt + qnt > 10) {
            lessThanTen = false;
          }
        }
      }
    });
    return lessThanTen;
  };
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{item.title}</h3>
      <div className={styles.wrapper}>
        <img
          src={item.image}
          alt='image of the product'
          className={styles.img}
        />
        <div className={styles.descriptionWrapper}>
          <p className={styles.description}>{item.description}</p>
        </div>
        <div className={styles.inputWrapper}>
          <div className={styles.labelWrapper}>
            <label className={styles.quantityLabel}>Quantity:</label>
            <input
              type='number'
              min={1}
              max={10}
              name='quantity'
              defaultValue={1}
              className={styles.quantityInput}
              onChange={(e) => setQnt(Number(e.target.value))}
            />
          </div>
          <button
            className={styles.btn}
            onClick={(e) => {
              let items = [...cartItems];
              e.preventDefault();
              if (checkQnt(item.id, qnt) && checkQntValue()) {
                let alreadyInCart = false;
                cartItems.forEach((product) => {
                  if (product.id === item.id) {
                    if (product.qnt) {
                      product.qnt = product.qnt + qnt;
                      alreadyInCart = true;
                    } else {
                      product.qnt = qnt;
                      alreadyInCart = true;
                    }
                  }
                });
                if (!alreadyInCart) {
                  item.qnt = qnt;
                  items.push(item);
                }
              }
              addToCart(items);
            }}
          >
            Add To Your Cart
          </button>

          {inputError === 'over10' && (
            <p className={styles.inputError}>
              Quantity Must Not Be lower Than 10
            </p>
          )}
          {inputError === 'below1' && (
            <p className={styles.inputError}>
              Quantity Must Not Be Higher Than 1
            </p>
          )}
          {inputError === 'notInteger' && (
            <p className={styles.inputError}>Quantity Must Be An Integer</p>
          )}
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.wrapper2}>
          <div className={styles.ratingWrapper}>
            <img src='./star.svg' alt='rating' />
            <p>{item.rating.rate}</p>
          </div>
          <div className={styles.ratingWrapper}>
            <img src='./group.svg' alt='count' />
            <p>{item.rating.count}</p>
          </div>
        </div>
        <p className={styles.price}> {item.price}$ </p>
      </div>
    </div>
  );
}

ItemCard.propTypes = {
  item: propTypes.object,
};
