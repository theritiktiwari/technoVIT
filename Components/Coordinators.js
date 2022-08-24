import React from "react";
import convener from "./data/convener";
import coordinators from "./data/coordinators";

const userImage = "https://i.ibb.co/yWZR9j0/Avatar.png";

const Coordinators = () => {
  return (
    <>
      <div className="container my-5">
        <h2 className="text-center mb-3">Conveners</h2>
        <div className="container d-flex flex-wrap justify-content-around">
          {convener && convener.map((item, index) => {
            return <div key={index} className="card p-3 mb-3" style={{ width: "18rem" }}>
              <div className="user-img">
                <img src={item.image || userImage} className="card-img-top" alt={item.name} />
              </div>
              <div className="card-body">
                <h5 className="card-title text-center">{item.name}</h5>
                {item.phone && <p className="card-text text-center">Mobile: {item.phone}</p>}
                {item.email && <p className="card-text text-center">Email: {item.email}</p>}
                <small>{item.designation}</small>
              </div>
            </div>
          })}
        </div>

        <h2 className="text-center mt-5 mb-3">Student Coordinators</h2>
        <div className="container d-flex flex-wrap justify-content-around">
          {coordinators && coordinators.map((item, index) => {
            return <div key={index} className="card p-3 mb-3" style={{ width: "20rem" }}>
              <div className="user-img mx-auto">
                <img src={item.image || userImage} className="card-img-top" alt={item.name} />
              </div>
              <div className="card-body">
                <h5 className="card-title text-center">{item.name}</h5>
                {item.phone && <p className="card-text text-center">Mobile: {item.phone}</p>}
                {item.email && <p className="card-text text-center"><a href={`mailto:${item.email}`}>Email Address</a></p>}
              </div>
            </div>
          })}
        </div>
      </div>
    </>
  );
};

export default Coordinators;
