import { ModalHandler } from '@/context/ModalContext';
import { ItemType } from '@/types';
import { useState } from 'react';

function useCart() {
  const [cart, setCart] = useState<ItemType[]>([]);
  const { setModalType } = ModalHandler();

  const addItemToCart = (item: ItemType) => {
    const newCart = [...cart];
    const duplicated = newCart.find((v) => v.id === item.id);

    if (duplicated) {
      alert('선택한 상품이 장바구니에 있습니다.');
      return;
    }

    setModalType('CART');
    setCart([...newCart, item]);
  };

  const deleteItemInCart = (item: ItemType) => {
    const newCart = [...cart];
    const index = newCart.findIndex((v) => v.id === item.id);
    newCart.splice(index, 1);

    setCart(newCart);
  };

  return { cart, setCart, addItemToCart, deleteItemInCart };
}

export default useCart;
