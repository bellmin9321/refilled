import useCart from '@/lib/hooks/useCart';
import { ItemType } from '@/types';
import React, { createContext, useContext } from 'react';

const CartItemsContext = createContext({
  cart: [] as ItemType[],
  setCart: (state: ItemType[]) => {},
  addItemToCart: (item: ItemType) => {},
  deleteItemInCart: (item: ItemType) => {},
});

export function CartItemsContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { cart, setCart, addItemToCart, deleteItemInCart } = useCart();

  return (
    <CartItemsContext.Provider
      value={{ cart, setCart, addItemToCart, deleteItemInCart }}
    >
      {children}
    </CartItemsContext.Provider>
  );
}

export const cartItemsHandler = () => {
  return useContext(CartItemsContext);
};
