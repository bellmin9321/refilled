import React from 'react';
import styles from './styles.module.scss';
import { FiShoppingCart } from 'react-icons/fi';
import { AiOutlineMenu } from 'react-icons/ai';
import Link from 'next/link';

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
