import { FC } from 'react';
import { default as NextHead } from 'next/head';

import { DESCRIPTION, NAME } from '@/constants';

type HeadProps = {
  title?: string;
  description?: string;
};

export const Head: FC<HeadProps> = ({
  title = NAME,
  description = DESCRIPTION
}): JSX.Element => (
  <NextHead>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content={description} />

    <link rel="icon" href="/favicon.ico" />

    <title>{title}</title>
  </NextHead>
);
