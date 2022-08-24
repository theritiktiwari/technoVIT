import React from "react";
import Head from "next/head";

const image =
  "https://www.uflexltd.com/assets/images/environmental-Sustainability.jpg";

const Connectivitieee = ({ siteName }) => {
  return (
    <>
      <Head>
        <title>BandVIT | {siteName}</title>
      </Head>
      <div className="container my-5">
        <h1 className="text-center my-5">BandVIT Events</h1>
        <div className="container d-flex flex-wrap justify-content-around">
          <a href="https://vitchennaievents.com/technovit/">
            <div
              className="card p-3 m-2"
              style={{ width: "18rem", height: "25rem" }}
            >
              <img src={"/images/schools/bandVIT/Industry conclave final.png"} className="card-img-top" alt="..." height={"90%"} />
              <div className="card-body">
                <h5 className="card-title text-center">Event 1</h5>
              </div>
            </div>
          </a>
          <a href="https://vitchennaievents.com/technovit/">
            <div
              className="card p-3 m-2"
              style={{ width: "18rem", height: "25rem" }}
            >
              <img src={"/images/schools/bandVIT/ROBO COLLOQUY.png"} className="card-img-top" alt="..." height={"90%"} />
              <div className="card-body">
                <h5 className="card-title text-center">Event 2</h5>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Connectivitieee;
