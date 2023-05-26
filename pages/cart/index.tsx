import React from 'react';
import styles from './styles.module.scss';
import CartFooter from '@/components/CartFooter';
import Content from '@/components/Content';
import CartItemsSection from '@/components/CartItemsSection';

function Cart() {
  return (
    <Content>
      <CartItemsSection />
      <CartFooter />
    </Content>
  );
}

export default Cart;
