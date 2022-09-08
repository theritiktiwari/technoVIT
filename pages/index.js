import React, { useState, useEffect } from "react";
import Landing from "../Components/Landing";
import Clock from "../Components/Clock";
import About from "../Components/About";
import Schedule from "../Components/Schedule";
import Coordinators from "../Components/Coordinators";
import Venue from "../Components/Venue";
import Gallery from "../Components/Gallery";
import { motion } from "framer-motion";

export default function Home({ siteName, date, count }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, []);
  return (
    <div className="d-grid gap-3">
      {show && (
        <div className="count bg-invert rounded-3 p-2 bold">
          VISITORS: {count}
        </div>
      )}
      <Landing />
      <About siteName={siteName} />
      <Clock date={date} />
      <Coordinators />
      <Schedule />
      <Venue />
      <Gallery />
    </div>
  );
}
