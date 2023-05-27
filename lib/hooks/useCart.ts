import { modalHandler } from '@/context/ModalContext';
import { ItemType } from '@/types';
import { useState } from 'react';

function useCart() {
  const [cart, setCart] = useState<ItemType[]>([]);
  const { option, setOption, setModalType } = modalHandler();

  const addItemToCart = (item: ItemType) => {
    const newCart = [...cart];
    const duplicated = newCart.find((v) => v.id === item.id);

    if (option === 'default' && item.productOptions.length) {
      alert('옵션을 선택해주세요');
      return;
    }

    setOption('default');

    if (duplicated) {
      alert('선택한 상품이 장바구니에 있습니다.');
      return;
    }

    setCart([...newCart, item]);
    setModalType('CART');
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
