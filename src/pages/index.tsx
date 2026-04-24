import Layout from '@/components/Layout';
import Steps from '@/components/Tutorial/Steps';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Picticular - App Tutorial</title>
        <meta name="description" content="Picticular" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#AE4ED8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>{scrollRef => <Steps scrollRef={scrollRef} />}</Layout>
    </>
  );
}
