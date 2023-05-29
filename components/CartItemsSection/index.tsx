import Link from 'next/link';
import React from 'react';

import styles from './styles.module.scss';

import useCart from '@/lib/hooks/useCart';

import CartItem from '../CartItem';

import { ItemType } from '@/types';

function CartItemsSection() {
  const { cart } = useCart();

  if (!cart.length) {
    return (
      <div className={styles.blankCartSection}>
        <h1>Refilled</h1>
        <div className={styles.subTitle}>
          {`장바구니에 담긴 제품이 없습니다.\n제품을 추가해 보세요.`}
        </div>
        <Link href="/shop" className={styles.moveShop}>
          제품 둘러보기
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.cartItemsSection}>
      {cart.length > 0 &&
        cart.map((item: ItemType) => (
          <CartItem key={`${item.id}-${item.option}`} item={item} />
        ))}
    </div>
  );
}

export default CartItemsSection;
