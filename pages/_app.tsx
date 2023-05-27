import { AppProps } from 'next/app';
import { Suspense } from 'react';
import { QueryClientProvider } from 'react-query';

import '@/styles/globals.scss';

import { queryClient } from '@/lib/api/queryClient';
import Layout from '@/components/Layout';
import { ModalContextProvider } from '@/context/ModalContext';
import { CartItemsContextProvider } from '@/context/CartItemsContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ModalContextProvider>
        <CartItemsContextProvider>
          <Suspense fallback={<div>Loading...</div>}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </Suspense>
        </CartItemsContextProvider>
      </ModalContextProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
