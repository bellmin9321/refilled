import React from 'react';
import styles from './styles.module.scss';

function CartItemsSection() {
  return (
    <div className={styles.cartItemsSection}>
      <h1 className={styles.title}>Refilled</h1>
      <div className={styles.subTitle}>
        {`장바구니에 담긴 제품이 없습니다.\n 제품을 추가해 보세요.`}
      </div>
    </div>
  );
}

export default CartItemsSection;
