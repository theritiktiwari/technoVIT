import React, { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import NaturalImage from "../../Components/NaturalImage";
import schoolData from "../../Components/data/schools";
const userImage = "https://i.ibb.co/yWZR9j0/Avatar.png";

const Index = ({ siteName }) => {
  useEffect(() => {
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