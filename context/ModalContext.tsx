// import { createContext, useContext } from 'react';

// import useModal from '@/lib/hooks/useModal';

// import { ItemType } from '@/types';

// const initialState = {
//   modal: false,
//   modalType: '',
//   selectedItem: {} as ItemType,
//   option: '',
//   openModal: () => {},
//   closeModal: () => {},
//   setModalType: (state: string) => {},
//   selectItem: (item: ItemType) => {},
//   setOption: (state: string) => {},
// };

// const ModalContext = createContext(initialState);

// export function ModalContextProvider({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const {
//     modal,
//     modalType,
//     selectedItem,
//     option,
//     openModal,
//     closeModal,
//     selectItem,
//     setModalType,
//     setOption,
//   } = useModal();

//   return (
//     <ModalContext.Provider
//       value={{
//         modal,
//         modalType,
//         selectedItem,
//         option,
//         openModal,
//         closeModal,
//         selectItem,
//         setModalType,
//         setOption,
//       }}
//     >
//       {children}
//     </ModalContext.Provider>
//   );
// }

// export const modalHandler = () => {
//   return useContext(ModalContext);
// };
