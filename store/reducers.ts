import { createSlice } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import {
  ItemType,
  ModalActionItemType,
  ModalActionStringType,
  ModalType,
} from '../types';

const initialState = {
  modalType: 'OPTION',
  isOpen: false,
  selectedItem: {} as ItemType,
  option: '',
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state: ModalType) => {
      state.isOpen = true;
      state.option = '';
    },
    closeModal: (state: ModalType) => {
      state.modalType = 'OPTION';
      state.isOpen = false;
    },
    setOption: (state: ModalType, action: ModalActionStringType) => {
      state.option = action.payload;
    },
    setModalType: (state: ModalType, action: ModalActionStringType) => {
      state.modalType = action.payload;
    },
    selectItem: (state: ModalType, action: ModalActionItemType) => {
      state.selectedItem = action.payload;
    },
  },
});

const cartSlice = createSlice({
  name: 'cart',
  initialState: [] as ItemType[],
  reducers: {
    setCart: (state, action: { type: string; payload: ItemType[] }) =>
      action.payload,
  },
});

export const reducers = combineReducers({
  modal: modalSlice.reducer,
  cart: cartSlice.reducer,
});

export const { openModal, closeModal, setOption, setModalType, selectItem } =
  modalSlice.actions;
export const { setCart } = cartSlice.actions;
