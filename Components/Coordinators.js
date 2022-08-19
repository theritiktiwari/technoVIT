import React from "react";

const userImage =
  "https://i.ibb.co/yWZR9j0/Avatar.png";
const userImage1 =
  "https://chennai.vit.ac.in/wp-content/uploads/2021/08/50908-255x319.jpg";
const userImage2 =
  "https://chennai.vit.ac.in/wp-content/uploads/2020/08/50299_SCOPE-S.Bharathiraja-Bharathiraja-S-255x319.jpg";

const Coordinators = () => {
  return (
    <>
      <div className="container my-5">
        <h2 className="text-center mb-3">Conveners</h2>
        <div className="container d-flex flex-wrap justify-content-around">
          <div className="card p-3 mb-3" style={{ width: "18rem" }}>
            <img src={userImage1} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center">Dr. Vydeki D</h5>
              <p className="card-text text-center">Contact: +91 96000 05340</p>
              <small>Associate Professor, VIT Chennai</small>
            </div>
          </div>
          <div className="card p-3 mb-3" style={{ width: "18rem" }}>
            <img src={userImage2} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center">Dr. Bharathi Raja S</h5>
              <p className="card-text text-center">Contact: +91 98419 29299</p>
              <small>Associate Professor, VIT Chennai</small>
            </div>
          </div>
        </div>
        <br></br><br></br>
        <h2 className="text-center mb-3">Student Coordinators</h2>
        <div className="container d-flex flex-wrap justify-content-around">
          <div className="card p-3 mb-3" style={{ width: "18rem" }}>
            <img src={userImage} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center">Soumya</h5>
              <p className="card-text text-center">Contact: +91 96000 05340</p>
            </div>
          </div>
          <div className="card p-3 mb-3" style={{ width: "18rem" }}>
            <img src={userImage} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center">Yashvardhan</h5>
              <p className="card-text text-center">Contact: +91 98419 29299</p>
            </div>
          </div>
          <div className="card p-3 mb-3" style={{ width: "18rem" }}>
            <img src={userImage} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center">Maktoum</h5>
              <p className="card-text text-center">Contact: +91 96000 05340</p>
            </div>
          </div>
          <div className="card p-3 mb-3" style={{ width: "18rem" }}>
            <img src={userImage} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center">Upasana</h5>
              <p className="card-text text-center">Contact: +91 98419 29299</p>
            </div>
          </div>
          <div className="card p-3 mb-3" style={{ width: "18rem" }}>
            <img src={userImage} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center">Vikash</h5>
              <p className="card-text text-center">Contact: +91 96000 05340</p>
            </div>
          </div>
          <div className="card p-3 mb-3" style={{ width: "18rem" }}>
            <img src={userImage} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center">Sam Prince Franklin</h5>
              <p className="card-text text-center">Contact: +91 98419 29299</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Coordinators;
