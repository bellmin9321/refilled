import React from 'react';
import styles from './styles.module.scss';
import { modalHandler } from '@/context/ModalContext';

function ModalLayout({ children }: { children: React.ReactNode }) {
  const { closeModal } = modalHandler();

  return (
    <div className={styles.modalLayout} onClick={closeModal}>
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
