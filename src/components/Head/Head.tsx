import { FC } from 'react';
import { default as NextHead } from 'next/head';

import { DESCRIPTION, NAME } from '@/constants';

export type HeadProps = {
  title?: string;
  description?: string;
};

export const Head: FC<HeadProps> = ({
  title,
  description = DESCRIPTION
}): JSX.Element => {
  title = title ? title + ` | ${NAME}` : NAME;

  return (
    <NextHead>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="" />
      <meta property="og:image:alt" content={title} />

      <link rel="icon" href="/favicon.ico" />

      <title>{title}</title>
    </NextHead>
  );
};
