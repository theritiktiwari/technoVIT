import React from "react";
import convener from "./data/convener";
import coordinators from "./data/coordinators";
const userImage = "https://i.ibb.co/yWZR9j0/Avatar.png";

const Coordinators = () => {
  return (
    <>
      <div className="container-fluid py-4 coordinators">
        <h2 className="text-center my-3">Conveners</h2>
        <div className="container d-flex flex-wrap justify-content-around">
          {convener && convener.map((item, index) => {
            return <div key={index} className="card p-3 d-flex justify-content-center align-items-center" style={{ width: "20rem" }}>
              <div className="user-img">
                <img src={item.image || userImage} className="card-img-top" alt={item.name} />
              </div>
              <div className="card-body">
                <h5 className="card-title text-center">{item.name}</h5>
                {item.designation && <p className="text-center" style={{ fontSize: "15px" }}>{item.designation}</p>}
                {item.phone && <a className="btn w-100 btn-dark" href={`tel:${item.phone}`}>&nbsp;Call Now&nbsp;</a>}
              </div>
            </div>
          })}
        </div>

        <hr className="w-50 mx-auto mt-5" />

        <h2 className="text-center mt-5 mb-3">Student Coordinators</h2>
        <div className="container d-flex flex-wrap justify-content-around">
          {coordinators && coordinators.map((item, index) => {
            return <div key={index} className="card p-3 mb-3" style={{ width: "22rem" }} data-aos="flip-left">
              <div className="user-img mx-auto">
                <img src={item.image || userImage} className="card-img-top" alt={item.name} />
              </div>
              <div className="card-body">
                <h5 className="card-title text-center">{item.name}</h5>
                {item.designation && <p className="text-center" style={{ fontSize: "15px" }}>{item.designation}</p>}
                {item.phone && item.phone && <div className="d-flex justify-content-between align-items-center">
                  <a className="btn w-100 mx-2 btn-dark" href={`tel:${item.phone}`}>&nbsp;Call&nbsp;</a>
                  <a className="btn w-100 btn-dark" href={`mailto:${item.email}`}>&nbsp;Email&nbsp;</a>
                </div>}
              </div>
            </div>
          })}
        </div>
      </div>
    </>
  );
};

export default Coordinators;
