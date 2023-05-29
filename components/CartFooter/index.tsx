import Link from 'next/link';
import React from 'react';

import styles from './styles.module.scss';

import useCart from '@/lib/hooks/useCart';

function CartFooter() {
  const { cart, totalPrice, buyAllInCart } = useCart();

  return (
    <div className={styles.footer}>
      <Link href="/shop" className={styles['inner-box']} onClick={buyAllInCart}>
        <span className={styles['total-price']}>{`${
          cart.length
        }개 | ${totalPrice.toLocaleString('ko-KR')}원`}</span>
        <span className={styles.buy}>&nbsp;구매하기</span>
      </Link>
    </div>
  );
}

export default CartFooter;
