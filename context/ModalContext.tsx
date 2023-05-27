import useModal from '@/lib/hooks/useModal';
import { ItemType } from '@/types';
import { useContext, createContext } from 'react';

const initialState = {
  modal: false,
  selectedItem: {} as ItemType,
  modalType: '',
  handleModal: () => {},
  selectItem: (item: ItemType) => {},
  setModalType: (state: string) => {},
};

const ModalContext = createContext(initialState);

export function ModalContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const {
    modal,
    selectedItem,
    modalType,
    handleModal,
    selectItem,
    setModalType,
  } = useModal();

  return (
    <ModalContext.Provider
      value={{
        modal,
        selectedItem,
        modalType,
        handleModal,
        selectItem,
        setModalType,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export const ModalHandler = () => {
  return useContext(ModalContext);
};
