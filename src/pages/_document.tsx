import { FC } from 'react';
import { Html, Head, Main, NextScript } from 'next/document';

const Document: FC = (): JSX.Element => (
  <Html lang="en">
    <Head />

    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
