import { FC } from 'react';
import { default as NextHead } from 'next/head';

export const Head: FC = (): JSX.Element => (
  <NextHead>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="Description" />

    <link rel="icon" href="/favicon.ico" />

    <title>Title</title>
  </NextHead>
);
