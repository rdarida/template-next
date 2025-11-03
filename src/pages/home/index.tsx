import { NextPage } from 'next';

import { Head } from '@/components';

const HomePage: NextPage = (): JSX.Element => (
  <>
    <Head />

    <main>
      <h1>H1</h1>
    </main>

    <footer>Footer</footer>
  </>
);

export default HomePage;
