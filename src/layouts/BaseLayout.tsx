import { FC, ReactNode } from 'react';

import { Footer, Head, HeadProps } from '@/components';

type BaseLayoutProps = {
  children?: ReactNode;
} & HeadProps;

export const BaseLayout: FC<BaseLayoutProps> = ({
  children,
  ...headProps
}): JSX.Element => (
  <>
    <Head {...headProps} />
    {children}
    <Footer />
  </>
);
