import React from "react";
import Head from "next/head";
const path = "/images/schools";
import NaturalImage from "../../Components/NaturalImage";

const Qubit = ({ siteName }) => {
  return (
    <>
      <Head>
        <title>Qubit | {siteName}</title>
      </Head>
      <div className="container my-5">
        <h1 className="text-center my-5">Qubit Events</h1>
        <div className="container d-flex flex-wrap justify-content-around">
          <a href="https://vitchennaievents.com/conf1/">
            <div
              className="card p-3 m-2"
              style={{ width: "18rem", height: "25rem" }}
            >
              <NaturalImage
                src={
                  path +
                  "/QUBIT/Event Posters/Live Hacking Hands on Workshop MIC TECHNOVIT.png"
                }
                className="card-img-top"
                alt="..."
                width={250}
              />
              <div className="card-body">
                <h5 className="card-title text-center">
                  Live Hacking Hands on Workshop
                </h5>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Qubit;
