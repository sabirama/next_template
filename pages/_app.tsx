import Head from 'next/head';
import Header from './_components/header';
import Footer from './_components/footer';
import '../style/style.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>NEXT APP</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}

export default MyApp;