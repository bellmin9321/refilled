import React from 'react';

import styles from './styles.module.scss';

function RightSide({ children }: { children: React.ReactNode }) {
  return <div className={styles.rightside}>{children}</div>;
}

export default RightSide;
