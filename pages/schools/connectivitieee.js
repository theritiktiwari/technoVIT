import React from "react";
import Head from "next/head";

const image =
  "https://www.uflexltd.com/assets/images/environmental-Sustainability.jpg";

const Connectivitieee = ({ siteName }) => {
  return (
    <>
      <Head>
        <title>Connectivitieee | {siteName}</title>
      </Head>
      <div className="container my-5">
        <h1 className="text-center my-5">Connectivitieee Events</h1>
        <div className="container d-flex flex-wrap justify-content-around">
          <a href="https://vitchennaievents.com/conf1/">
            <div
              className="card p-3 m-2"
              style={{ width: "18rem", height: "25rem" }}
            >
              <img src={image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-center">Event 1</h5>
              </div>
            </div>
          </a>
          <a href="https://vitchennaievents.com/conf1/">
            <div
              className="card p-3 m-2"
              style={{ width: "18rem", height: "25rem" }}
            >
              <img src={image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-center">Event 2</h5>
              </div>
            </div>
          </a>
          <a href="https://vitchennaievents.com/conf1/">
            <div
              className="card p-3 m-2"
              style={{ width: "18rem", height: "25rem" }}
            >
              <img src={image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-center">Event 3</h5>
              </div>
            </div>
          </a>
          <a href="https://vitchennaievents.com/conf1/">
            <div
              className="card p-3 m-2"
              style={{ width: "18rem", height: "25rem" }}
            >
              <img src={image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title text-center">Event 4</h5>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Connectivitieee;
