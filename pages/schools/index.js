import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import NaturalImage from "../../Components/NaturalImage";
import Img from "../../public/images/schools/bandVIT/BandVit logo.png";
const userImage = "https://i.ibb.co/yWZR9j0/Avatar.png";
const path = "/images/schools";
const Index = ({ siteName }) => {
  return (
    <>
      <Head>
        <title>Schools | {siteName}</title>
      </Head>
      <div className="container my-5 school">
        <h1 className="text-center my-5">Schools</h1>
        <div className="container d-flex flex-wrap justify-content-start h-100">
        <Link href="/schools/bandvit">
            <a>
              <div className="card px-3 pt-3 m-2" style={{width: "18rem" }}>
                <img
                  src={path + "/bandVIT/BandVit logo.png"}
                  style={{ width: '254px', height: '250px'}}
                  alt="..."
                  
                />
                <div className="card-body">
                  <h5 className="card-title text-center">BandVIT</h5>
                </div>
              </div>
            </a>
          </Link>
          <Link href="/schools/connectivitieee">
            <a>
              <div className="card px-3 pt-3 m-2" style={{width: "18rem" }}>
                <img
                  src={
                    path +
                    "/connectiVIT/CONNECTIVITIEEE_LOGO_for dark background.png"
                  }
                  style={{ width: '254px', height: '250px'}}
                  alt="..."
                  
                />
                <div className="card-body">
                  <h5 className="card-title text-center">Connectivitieee</h5>
                </div>
              </div>
            </a>
          </Link>

          <Link href="/schools/diseno">
            <a>
              <div className="card px-3 pt-3 m-2" style={{ width: "18rem" }}>
                <img
                  src={path + "/Desino/Desino Logo/Diseno_Orange Logo.png"}
                  style={{ width: '254px', height: '250px'}}
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title text-center">Diseño</h5>
                </div>
              </div>
            </a>
          </Link>

          <Link href="/schools/glitz">
            <a>
              <div className="card px-3 pt-3 m-2" style={{ width: "18rem" }}>
                <img
                  style={{ width: '254px', height: '250px'}}
                  src={userImage}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title text-center">Glitz</h5>
                </div>
              </div>
            </a>
          </Link>

          <Link href="/schools/qubit">
            <a>
              <div className="card px-3 pt-3 m-2" style={{ width: "18rem" }}>
                <img
                  src={path + "/QUBIT/qubitfinallogo.png"}
                  style={{ width: '254px', height: '250px'}}
                  alt="..."
                  
                />
                <div className="card-body">
                  <h5 className="card-title text-center">Qubit</h5>
                </div>
              </div>
            </a>
          </Link>

          <Link href="/schools/vitness">
            <a>
              <div className="card px-3 pt-3 m-2" style={{ width: "18rem" }}>
                <img
                  src={userImage}
                  className="card-img-top"
                  style={{ width: '254px', height: '250px'}}
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title text-center">Vitness</h5>
                </div>
              </div>
            </a>
          </Link>

          <Link href="/schools/taikuun">
            <a>
              <div className="card px-3 pt-3 m-2" style={{ width: "18rem" }}>
                <img
                  style={{ width: '254px', height: '250px'}}
                  src={userImage}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title text-center">Tai:kuun</h5>
                </div>
              </div>
            </a>
          </Link>

          <Link href="/schools/vsplash">
            <a>
              <div className="card px-3 pt-3 m-2" style={{ width: "18rem" }}>
                <img
                  src={path + "/VSplash/vsplash-white.png"}
                  className="card-img-top"
                  alt="..."
                  style={{ width: '254px', height: '250px'}}
                />
                <div className="card-body">
                  <h5 className="card-title text-center">Vsplash</h5>
                </div>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Index;
