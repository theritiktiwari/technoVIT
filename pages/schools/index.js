import React from "react";
import Head from "next/head";
import Link from "next/link";
import NaturalImage from "../../Components/NaturalImage";
import schoolData from "../../Components/data/schools";
const userImage = "https://i.ibb.co/yWZR9j0/Avatar.png";

const Index = ({ siteName }) => {

  return (
    <>
      <Head>
        <title>School Fests | {siteName}</title>
      </Head>
      <div className="container my-5 py-5 school">
        <h1 className="text-center my-5">School Fests</h1>
        <div className="container main-data d-flex flex-wrap">

          {schoolData && schoolData.map((school, index) => {
            return <Link href={`/schools/${school.link}`} key={index}>
              <a>
                <div className="card p-3 m-2" style={{ width: "18rem", height: "22rem" }}>
                  <div className="poster-image" style={{ width: "250px", height: "250px", display: "flex", alignItems: "center" }}>
                    <NaturalImage className={"image"} src={school.image ? `${school.image}` : userImage} alt={school.name} width={10000} height={10000} />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title text-center text-dark">{school.name}</h5>
                  </div>
                </div>
              </a>
            </Link>
          })}
        </div>
      </div>
    </>
  );
};

export default Index;