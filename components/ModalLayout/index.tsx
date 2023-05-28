import React from 'react';
import styles from './styles.module.scss';
import useModal from '@/lib/hooks/useModal';

function ModalLayout({ children }: { children: React.ReactNode }) {
  const { handleCloseModal } = useModal();

  return (
    <div className={styles.modalLayout} onClick={handleCloseModal}>
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
