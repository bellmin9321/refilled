import React from 'react';
import styles from './styles.module.scss';
import Header from '../Header';

function Content({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.content}>
      <Header />
      {children}
    </div>
  );
}

export default Content;
