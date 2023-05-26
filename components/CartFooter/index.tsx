import React from 'react';
import styles from './styles.module.scss';

function CartFooter() {
  return (
    <div className={styles.footer}>
      <div className={styles.innerBox}>{`5개 구매하기`}</div>
    </div>
  );
}

export default CartFooter;
