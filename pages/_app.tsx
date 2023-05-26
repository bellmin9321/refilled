import { AppProps } from 'next/app';
import { Suspense } from 'react';
import { QueryClientProvider } from 'react-query';

import '@/styles/globals.css';

import { queryClient } from '@/lib/api/queryClient';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<div>Loading...</div>}>
        <Component {...pageProps} />
      </Suspense>
    </QueryClientProvider>
  );
}

export default MyApp;
