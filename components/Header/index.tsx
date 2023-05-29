import Link from 'next/link';
import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';

import styles from './styles.module.scss';

function Header() {
  return (
    <div className={styles.headerLayout}>
      <header className={styles.header}>
        <Link className={styles.shop} href="/shop">
          <AiOutlineMenu size={25} />
        </Link>
        <div className={styles.title}>
          <Link href="/">Refilled</Link>
        </div>
        <Link className={styles.cart} href="/cart">
          <FiShoppingCart size={25} />
        </Link>
      </header>
    </div>
  );
}

export default Header;
