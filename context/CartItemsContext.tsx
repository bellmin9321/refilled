import useCart from '@/lib/hooks/useCart';
import { ItemType } from '@/types';
import React, { createContext, useContext } from 'react';

const CartItemsContext = createContext({
  cart: [] as ItemType[],
  addItemToCart: (item: ItemType) => {},
  deleteItemInCart: (item: ItemType) => {},
});

export function CartItemsContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { cart, addItemToCart, deleteItemInCart } = useCart();

  return (
    <CartItemsContext.Provider
      value={{ cart, addItemToCart, deleteItemInCart }}
    >
      {children}
    </CartItemsContext.Provider>
  );
}

export const cartItemsHandler = () => {
  return useContext(CartItemsContext);
};
