import React from "react";

const Landing = () => {
  const image1 = "https://i.imgur.com/SN1FQBH.gif";
  const image2 = "https://i.ibb.co/0Qxx5xZ/BandVit.png";
  const image3 = "https://i.ibb.co/QKJxwzp/connectivitieee.png";
  const image4 = "https://i.ibb.co/njKzqqJ/Diseno_White%20Logo.png";
  const image5 = "https://i.ibb.co/dQyKs7G/glitz.png";
  const image6 = "https://i.ibb.co/3SKHwXY/qubit.png";
  const image7 = "https://i.ibb.co/TM6hcBd/srishti.png";
  const image8 = "https://i.ibb.co/w6k6yDr/taikuun.png";
  const image9 = "https://i.imgur.com/kA9Yrsz.png";
  const image10 = "https://i.ibb.co/Q6TbnFZ/vitness.png";
  const image11 = "https://i.ibb.co/F8sGYtB/vsplash.png";

  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="5"
            aria-label="Slide 6"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="6"
            aria-label="Slide 7"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="7"
            aria-label="Slide 8"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="8"
            aria-label="Slide 9"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="9"
            aria-label="Slide 10"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="10"
            aria-label="Slide 11"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              layout="fill"
              src={image1}
              style={{ marginTop: "-10vh" }}
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>23-25, September 2022</h5>
              <p>A beginning of a biggest tech fest of VIT.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              layout="fill"
              src={image2}
              style={{ marginTop: "-10vh" }}
              className="d-block center w-50"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              layout="fill"
              src={image3}
              style={{ marginTop: "-1vh", height: "80vh" }}
              className="d-block w-45"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              layout="fill"
              src={image4}
              style={{ marginTop: "-10vh", height: "80vh" }}
              className="d-block w-45"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              layout="fill"
              src={image5}
              style={{ marginTop: "-10vh", height: "80vh" }}
              className="d-block w-45"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              layout="fill"
              src={image6}
              style={{ marginTop: "-10vh", height: "80vh" }}
              className="d-block w-45"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              layout="fill"
              src={image7}
              style={{ marginTop: "-10vh", height: "80vh" }}
              className="d-block w-45"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              layout="fill"
              src={image8}
              style={{ marginTop: "-10vh", marginLeft: "30%" }}
              className="d-block w-50"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              layout="fill"
              src={image9}
              style={{ marginTop: "-10vh", marginLeft: "30%" }}
              className="d-block w-50"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              layout="fill"
              src={image10}
              style={{ marginTop: "-10vh", marginLeft: "30%" }}
              className="d-block w-50"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              layout="fill"
              src={image11}
              style={{ marginTop: "-10vh", marginLeft: "30%" }}
              className="d-block w-45"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Landing;
