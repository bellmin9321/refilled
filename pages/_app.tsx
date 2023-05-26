import { AppProps } from 'next/app';
import { Suspense } from 'react';
import { QueryClientProvider } from 'react-query';

import '@/styles/globals.scss';

import { queryClient } from '@/lib/api/queryClient';
import Layout from '@/components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<div>Loading...</div>}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Suspense>
    </QueryClientProvider>
  );
}

export default MyApp;
