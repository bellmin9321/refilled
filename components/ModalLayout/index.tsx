import React from 'react';

import styles from './styles.module.scss';

import useModal from '@/lib/hooks/useModal';

function ModalLayout({ children }: { children: React.ReactNode }) {
  const { handleCloseModal } = useModal();

  return (
    <div className={styles['modal-layout']} onClick={handleCloseModal}>
      <div
        className={styles['modal-content-box']}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}

export default ModalLayout;
