import { NextPage } from 'next';

import { BaseLayout } from '@/layouts';

const HomePage: NextPage = (): JSX.Element => (
  <BaseLayout>
    <main>
      <h1>H1</h1>
    </main>
  </BaseLayout>
);

export default HomePage;
