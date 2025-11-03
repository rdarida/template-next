import { FC, ReactNode } from 'react';

import { Footer, Head } from '@/components';

type BaseLayoutProps = {
  children?: ReactNode;
};

export const BaseLayout: FC<BaseLayoutProps> = ({ children }): JSX.Element => (
  <>
    <Head />
    {children}
    <Footer />
  </>
);
