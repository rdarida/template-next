import { NextPage } from 'next';

import { Footer, Head } from '@/components';

const HomePage: NextPage = (): JSX.Element => (
  <>
    <Head />

    <main>
      <h1>H1</h1>
    </main>

    <Footer />
  </>
);

export default HomePage;
