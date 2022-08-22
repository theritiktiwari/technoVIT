import React from "react";

const userImage =
  "https://i.ibb.co/yWZR9j0/Avatar.png";
const userImage1 =
  "https://chennai.vit.ac.in/wp-content/uploads/2021/08/50908-255x319.jpg";
const userImage2 =
  "https://chennai.vit.ac.in/wp-content/uploads/2020/08/50299_SCOPE-S.Bharathiraja-Bharathiraja-S-255x319.jpg";

const studImage1 = "https://i.imgur.com/6sBZfHY.jpg";
const studImage2 = "https://i.imgur.com/ahZxAMf.jpg";
const studImage3 = "https://i.imgur.com/eEsu8si.jpg";
const studImage4 = "https://i.imgur.com/nOG9qba.jpg";
const studImage5 = "https://i.imgur.com/ZbOHn9L.png";
const studImage6 = "https://i.imgur.com/OatP2BK.jpg";

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
          <div className="card p-3 mb-3" style={{ width: "18rem", height: "30rem" }}>
            <img width="254" height="254" src={studImage1} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center">Soumya Yelchuri</h5>
              <p className="card-text text-center">Contact: +91 87971 38551</p>
              <p className="card-title text-center"><a href="mailto:soumya.yelchuri2019@vitstudent.ac.in">Email</a> </p>
            </div>
          </div>
          <div className="card p-3 mb-3" style={{ width: "18rem" , height: "30rem"}}>
            <img width="254" height="254" src={studImage2} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center">Yashvardhan Gupta</h5>
              <p className="card-text text-center">Contact: +91 92509 87858</p>
              <p className="card-title text-center"><a href="mailto:yashvardhang11@gmail.com">Email</a> </p>
            </div>
          </div>
          <div className="card p-3 mb-3" style={{ width: "18rem" }}>
            <img width="254" height="254" src={studImage3} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center">Maktoum Ali</h5>
              <p className="card-text text-center">Contact: +91 73585 11590</p>
              <p className="card-title text-center"><a href="mailto:maktoumali2020@vitstudent.ac.in">Email</a> </p>
            </div>
          </div>
          <div className="card p-3 mb-3" style={{ width: "18rem" }}>
            <img width="254" height="254" src={studImage4} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center">Upasana Mandhata</h5>
              <p className="card-text text-center">Contact: +91 79786 61002</p>
              <p className="card-title text-center"><a href="mailto:Upasana.mandhata2019@vitstudent.ac.in">Email</a> </p>
            </div>
          </div>
          <div className="card p-3 mb-3" style={{ width: "18rem" }}>
            <img width="254" height="254" src={studImage5} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center">K S Vikash</h5>
              <p className="card-text text-center">Contact: +91 98403 38863</p>
              <p className="card-title text-center"><a href="mailto:vikash.ks2020@vitstudent.ac.in">Email</a> </p>
            </div>
          </div>
          <div className="card p-3 mb-3" style={{ width: "18rem" }}>
            <img width="254" height="254" src={studImage6} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center">Sam Prince Franklin K</h5>
              <p className="card-text text-center">Contact: +91 70102 67239</p>
              <p className="card-title text-center"><a href="mailto:samprince.franklink2020@vitstudent.ac.in">Email</a> </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Coordinators;
