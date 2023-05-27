import React from 'react';
import styles from './styles.module.scss';
import { modalHandler } from '@/context/ModalContext';

function ModalLayout({ children }: { children: React.ReactNode }) {
  const { closeModal, setOption } = modalHandler();

  const handleClick = () => {
    closeModal();
    setOption('');
  };

  return (
    <div className={styles.modalLayout} onClick={handleClick}>
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
