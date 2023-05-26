import * as React from 'react';

import IndexPage from './IndexPage';
import LeftSide from '../LeftSide';
import RightSide from '../RightSide';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div id="layoutRoot">
      <IndexPage />
      <LeftSide />
      <RightSide>{children}</RightSide>
    </div>
  );
}
