import React from "react";
import Div from "./AnimatedDiv";
import FlipCard from "./Card";
import convener from "./data/convener";
import coordinators from "./data/coordinators";

const Coordinators = () => {
  return (
    <>
      <Div className="container-fluid py-4 coordinators">
        <h2 className="text-center my-3">Conveners</h2>
        <div className="container d-flex flex-wrap justify-content-around">
          {convener &&
            convener.map((item, index) => <FlipCard key={index} {...item} />)}
        </div>
      </Div>

      <hr className="w-50 mx-auto mt-5" />

      <Div className="container-fluid py-4 coordinators">
        <h2 className="text-center mt-5 mb-3">Student Coordinators</h2>
        <div className="container d-flex flex-wrap justify-content-evenly gap-5">
          {coordinators.map((item, index) => (
            <FlipCard key={index} {...item} />
          ))}
        </div>
      </Div>
    </>
  );
};

export default Coordinators;
