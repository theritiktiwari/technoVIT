import { useState, useEffect } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import { useRouter } from 'next/router';
// import Loader from '../Components/Loader';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const siteName = "TechnoVIT";

  const router = useRouter();
  const [loader, setLoader] = useState();
  const [key, setKey] = useState();

  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      setLoader(true)
    })
    router.events.on('routeChangeComplete', () => {
      setLoader(false)
    })
    setKey(Math.random())
  }, [router]);

  return <>
    <Head>
      <title>Home | {siteName}</title>
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <meta name="description" content={`${siteName} Website`} />
    </Head>
    <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></Script>
    {/* {loader ? <Loader /> : <> */}
    {pageProps.statusCode !== 404 && pageProps.statusCode !== 500 && key && <Navbar key={key} siteName={siteName} />}
    <Component {...pageProps} siteName={siteName} />
    {pageProps.statusCode !== 404 && pageProps.statusCode !== 500 && <Footer siteName={siteName} />}
    {/* </>} */}
  </>
}

export default MyApp;
