import { useState, useEffect } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import countapi from 'countapi-js';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/globals.css'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  const siteName = "technoVIT";
  const date = "2022-09-22 11:59:59";
  const [count, setCount] = useState();

  useEffect(() => {
    AOS.init();
    countapi.visits().then((result) => {
      setCount(result.value);
    });
  }, []);

  return <>
    <Head>
      <title>Home | {siteName}</title>
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <meta name="description" content={`${siteName} Website`} />
    </Head>
    <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossOrigin="anonymous"></Script>
    {pageProps.statusCode !== 404 && pageProps.statusCode !== 500 && <Navbar siteName={siteName} logo={`/TechnoVIT_Logo_Transparent.png`} />}
    <Component {...pageProps} siteName={siteName} date={date} count={count} />
    {pageProps.statusCode !== 404 && pageProps.statusCode !== 500 && <Footer siteName={siteName} logo={`/TechnoVIT_Logo_Transparent.png`} />}
  </>
}

export default MyApp;