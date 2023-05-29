import { AppProps } from 'next/app';
import { Suspense } from 'react';
import { QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import '@/styles/globals.scss';

import { queryClient } from '@/lib/api/queryClient';

import Layout from '@/components/Layout';

import store, { persistor } from '@/store/index';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Suspense fallback={<div>Loading...</div>}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </Suspense>
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  );
}

export default MyApp;
