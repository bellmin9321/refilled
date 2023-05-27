import React from 'react';
import styles from './styles.module.scss';
import Header from '../Header';
import { ModalHandler } from '@/context/ModalContext';
import ModalLayout from '../ModalLayout';
import OptionSelector from '../OptionSelector';

function Content({ children }: { children: React.ReactNode }) {
  const { modal } = ModalHandler();

  return (
    <div className={styles.content}>
      <Header />
      {children}
      {modal && (
        <ModalLayout>
          <OptionSelector />
        </ModalLayout>
      )}
    </div>
  );
}

export default Content;
