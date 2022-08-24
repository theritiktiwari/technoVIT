import React from "react";
import Head from "next/head";
import NaturalImage from "../../Components/NaturalImage";
const path = "/images/schools";
const image =
  "https://www.uflexltd.com/assets/images/environmental-Sustainability.jpg";

const Diseno = ({ siteName }) => {
  return (
    <>
      <Head>
        <title>Diseño | {siteName}</title>
      </Head>
      <div className="container my-5">
        <h1 className="text-center my-5">Diseño Events</h1>
        <div className="container d-flex flex-wrap justify-content-around">
          <a href="https://vitchennaievents.com/technovit/">
            <div
              className="card p-3 m-2"
              style={{ width: "18rem", height: "25rem" }}
            >
              <NaturalImage
                width={250}
                src={path + "/Desino/E-no-wa(s)te/e-no-waste a4 poster.png"}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title text-center">E-no-wa(s)te</h5>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Diseno;
