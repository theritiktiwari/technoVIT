import { motion } from "framer-motion";
import React from "react";
import Div, { animations } from "./AnimatedDiv";
import FlipCard from "./Card";
import convener from "./data/convener";
import coordinators from "./data/coordinators";
const userImage = "https://i.ibb.co/yWZR9j0/Avatar.png";

const BackChildren = ({ name, designation, phone }) => (
  <div className="card-body">
    <h5 className="card-title text-center">{name}</h5>
    {designation && (
      <p className="text-center" style={{ fontSize: "15px" }}>
        {designation}
      </p>
    )}
    {phone && (
      <a className="btn w-100 btn-dark" href={`tel:${phone}`}>
        &nbsp;Call Now&nbsp;
      </a>
    )}
  </div>
);

const Coordinators = () => {
  return (
    <>
      <Div
        animationStyle={animations.leftToRight}
        className="container-fluid py-4 coordinators"
      >
        <h2 className="text-center my-3">Conveners</h2>
        <div className="container d-flex flex-wrap justify-content-around">
          {convener &&
            convener.map((item, index) => <FlipCard key={index} {...item} />)}
        </div>
      </Div>

      <hr className="w-50 mx-auto mt-5" />

      <Div
        animationStyle={animations.rightToLeft}
        className="container-fluid py-4 coordinators"
      >
        <h2 className="text-center mt-5 mb-3">Student Coordinators</h2>
        <div className="container d-flex flex-wrap justify-content-evenly gap-5">
          {coordinators &&
            coordinators.map((item, index) => (
              <FlipCard key={index} {...item} />
            ))}
        </div>
      </Div>
    </>
  );
};

export default Coordinators;
