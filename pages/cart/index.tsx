import React from 'react';

import CartFooter from '@/components/CartFooter';
import CartItemsSection from '@/components/CartItemsSection';
import Content from '@/components/Content';

function Cart() {
  return (
    <Content>
      <CartItemsSection />
      <CartFooter />
    </Content>
  );
}

export default Cart;
