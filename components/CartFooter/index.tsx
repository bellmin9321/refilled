import React from 'react';
import styles from './styles.module.scss';
import { cartItemsHandler } from '@/context/CartItemsContext';

function CartFooter() {
  const { cart } = cartItemsHandler();
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className={styles.footer}>
      <div className={styles.innerBox}>
        <span className={styles.totalPrice}>{`${
          cart.length
        }개 | ${totalPrice.toLocaleString('ko-KR')}원`}</span>
        <span className={styles.buy}>&nbsp;구매하기</span>
      </div>
    </div>
  );
}

export default CartFooter;
