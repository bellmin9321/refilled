import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { closeModal, openModal, selectItem, setOption } from '@/store/reducers';

import { ItemType, StateType } from '@/types';

function useModal() {
  const dispatch = useDispatch();
  const { isOpen, selectedItem, modalType, option } = useSelector(
    (state: StateType) => state.modal,
  );

  const handleOpenModal = (item: ItemType) => {
    dispatch(openModal());
    dispatch(selectItem(item));
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
    dispatch(setOption(''));
  };

  const selectOption = (option: string) => {
    dispatch(setOption(option));
  };

  return {
    isOpen,
    modalType,
    selectedItem,
    option,
    handleOpenModal,
    handleCloseModal,
    selectOption,
  };
}

export default useModal;
