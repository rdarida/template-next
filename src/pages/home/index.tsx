import { NextPage } from 'next';

import { NAME } from '@/constants';
import { BaseLayout } from '@/layouts';

const HomePage: NextPage = (): JSX.Element => (
  <BaseLayout>
    <main>
      <h1>{NAME}</h1>
    </main>
  </BaseLayout>
);

export default HomePage;
