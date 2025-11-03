import '@popperjs/core';
import { FC, useEffect } from 'react';
import type { AppProps } from 'next/app';

import '@/styles/index.scss';

const App: FC<AppProps> = ({ Component, pageProps }): JSX.Element => {
  useEffect((): void => {
    require('bootstrap');
  }, []);

  return <Component {...pageProps} />;
};

export default App;
