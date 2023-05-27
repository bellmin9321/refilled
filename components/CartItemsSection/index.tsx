import React from 'react';
import styles from './styles.module.scss';
import { cartItemsHandler } from '@/context/CartItemsContext';
import { ItemType } from '@/types';
import CartItem from '../CartItem';
import Link from 'next/link';

function CartItemsSection() {
  const { cart } = cartItemsHandler();

  if (!cart.length) {
    return (
      <div className={styles.blankCartSection}>
        <h1>Refilled</h1>
        <div className={styles.subTitle}>
          {`장바구니에 담긴 상품이 없습니다.\n상품을 추가해 보세요.`}
        </div>
        <Link href="/shop" className={styles.moveShop}>
          상품 둘러보기
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.cartItemsSection}>
      {cart.length > 0 &&
        cart.map((item: ItemType) => <CartItem key={item.id} item={item} />)}
    </div>
  );
}

export default CartItemsSection;
