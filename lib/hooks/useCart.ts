import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { setCart, setModalType } from '@/store/reducers';

import { ItemType, StateType } from '@/types';

function useCart() {
  const dispatch = useDispatch();
  const cart = useSelector((state: StateType) => state.cart);
  const { option } = useSelector((state: StateType) => state.modal);
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  const addItemToCart = (item: ItemType) => {
    const newCart = [...cart];
    const duplicated = newCart.find(
      (v) => v.id === item.id && v.option === option,
    );

    if (!option && item.productOptions.length) {
      alert('옵션을 선택해주세요');
      return;
    }

    if (duplicated) {
      alert('선택한 상품이 장바구니에 있습니다.');
      return;
    }

    dispatch(setCart([...newCart, { ...item, option }]));
    dispatch(setModalType('CART'));
  };

  const deleteItemInCart = (item: ItemType) => {
    const newCart = [...cart];
    const index = newCart.findIndex(
      (v) => v.id === item.id && v.option === item.option,
    );

    newCart.splice(index, 1);

    dispatch(setCart(newCart));
  };

  const buyAllInCart = () => {
    dispatch(setCart([]));
    alert('구매를 완료하였습니다.');
  };

  return { cart, totalPrice, addItemToCart, deleteItemInCart, buyAllInCart };
}

export default useCart;
