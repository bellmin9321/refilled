import { PersistState } from 'redux-persist';

export interface ItemType {
  id: number;
  name: string;
  imageUrl: string;
  desc: string;
  originPrice: number;
  price: number;
  productOptions: OptionType[];
  tag: TagType;
  option?: string;
}

export interface OptionType {
  id: number;
  name: string;
  price: number;
  stock: number;
}

interface TagType {
  color: string;
  text: string;
}

export interface ItemProps {
  item: ItemType;
}

export interface StateType {
  cart: ItemType[];
  modal: ModalType;
  _persist: PersistState;
}

export interface ModalActionStringType {
  type: string;
  payload: string;
}

export interface ModalActionItemType {
  type: string;
  payload: ItemType;
}

export type ModalType = {
  isOpen: boolean;
  modalType: string;
  selectedItem: ItemType;
  option: string;
};
