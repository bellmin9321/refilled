import * as React from 'react';

import IndexPage from './IndexPage';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <IndexPage />
      {children}
    </>
  );
}
