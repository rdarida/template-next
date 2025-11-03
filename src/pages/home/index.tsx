import { NextPage } from 'next';
import Head from 'next/head';

const HomePage: NextPage = (): JSX.Element => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Description" />

      <link rel="icon" href="/favicon.ico" />

      <title>Title</title>
    </Head>

    <main>
      <h1>H1</h1>
    </main>

    <footer>Footer</footer>
  </>
);

export default HomePage;
