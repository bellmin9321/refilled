import { ItemType } from '@/types';
import { useState } from 'react';

export const initialItem = {
  id: 0,
  name: '',
  imageUrl: '',
  desc: '',
  originPrice: 0,
  price: 0,
  productOptions: [
    {
      id: 0,
      name: '',
      price: 0,
      stock: 0,
    },
  ],
  tag: {
    color: '',
    text: '',
  },
};

function useModal() {
  const [modal, setModal] = useState<boolean>(false);
  const [modalType, setModalType] = useState<string>('OPTION');
  const [selectedItem, setSelectedItem] = useState<ItemType>(initialItem);
  const [option, setOption] = useState<string>('default');

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModalType('OPTION');
    setOption('default');
    setModal(false);
  };

  const selectItem = (item: ItemType) => {
    setSelectedItem(item);
  };

  return {
    modal,
    modalType,
    selectedItem,
    option,
    openModal,
    closeModal,
    selectItem,
    setModalType,
    setOption,
  };
}

export default useModal;
