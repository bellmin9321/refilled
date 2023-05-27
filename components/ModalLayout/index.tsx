import React from 'react';
import styles from './styles.module.scss';
import { ModalHandler } from '@/context/ModalContext';

function ModalLayout({ children }: { children: React.ReactNode }) {
  const { handleModal } = ModalHandler();

  return (
    <div className={styles.modalLayout} onClick={handleModal}>
      <div
        className={styles.modalContentBox}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}

export default ModalLayout;
