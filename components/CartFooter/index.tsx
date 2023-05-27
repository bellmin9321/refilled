import React from 'react';
import styles from './styles.module.scss';
import { cartItemsHandler } from '@/context/CartItemsContext';
import Link from 'next/link';

function CartFooter() {
  const { cart, setCart } = cartItemsHandler();
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  const handleClick = () => {
    alert('구매를 완료하였습니다.');
    setCart([]);
  };

  return (
    <div className={styles.footer}>
      <Link href="/shop" className={styles.innerBox} onClick={handleClick}>
        <span className={styles.totalPrice}>{`${
          cart.length
        }개 | ${totalPrice.toLocaleString('ko-KR')}원`}</span>
        <span className={styles.buy}>&nbsp;구매하기</span>
      </Link>
    </div>
  );
}

export default CartFooter;
