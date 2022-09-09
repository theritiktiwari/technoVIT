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
const logo = "https://i.imgur.com/kWQb9MI.png";

function MyApp({ Component, pageProps }) {
  const siteName = "technoVIT";
  const date = "2022-09-22 11:59:59";
  const [count, setCount] = useState();

  useEffect(() => {
    AOS.init();
    countapi.visits().then((result) => {
      setCount(result.value);
    });

    let box = document.getElementsByClassName("poster-image");

    for (let i = 0; i < box.length; i++) {
      let el = box[i];

      const height = 200;
      const width = 300;

      el.addEventListener("mousemove", handleMove);

      function handleMove(e) {
        const xVal = e.layerX;
        const yVal = e.layerY;

        const yRotation = 20 * ((xVal - width / 2) / width);
        const xRotation = -20 * ((yVal - height / 2) / height);

        const string = "perspective(1000px) scale(1.1) rotateX(" + xRotation + "deg) rotateY(" + yRotation + "deg)";

        el.style.transform = string;
      }

      el.addEventListener("mouseout", function () {
        el.style.transform = "perspective(1000px) scale(1) rotateX(0) rotateY(0)";
      });

      el.addEventListener("mousedown", function () {
        el.style.transform = "perspective(1000px) scale(0.9) rotateX(0) rotateY(0)";
      });

      el.addEventListener("mouseup", function () {
        el.style.transform = "perspective(1000px) scale(1.1) rotateX(0) rotateY(0)";
      });
    }
  }, [])

  return <>
    <Head>
      <title>Home | {siteName}</title>
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <meta name="description" content={`${siteName} Website`} />
    </Head>
    <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossOrigin="anonymous"></Script>
    {pageProps.statusCode !== 404 && pageProps.statusCode !== 500 && <Navbar siteName={siteName} logo={logo} />}
    <Component {...pageProps} siteName={siteName} date={date} count={count} />
    {pageProps.statusCode !== 404 && pageProps.statusCode !== 500 && <Footer siteName={siteName} />}
  </>
}

export default MyApp;