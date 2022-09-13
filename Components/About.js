import React from "react";

const About = ({ siteName }) => {
  return (
    <>
      <div className="container ps-5" id="about">
        <div className="container shadow-lg p-3 my-5 bg-body rounded about-section row d-flex justify-content-between align-items-center">
          <div className="col-12 col-lg-6 rounded-2 image d-flex align-items-center justify-content-center">
            <h2 className="mb-4 fw-bold heading">About technoVIT'22</h2>
          </div>
          <div className="col-12 col-lg-6 mt-4">
            <p className="lh-lg" style={{ textAlign: "justify" }}>
              This is the 6<sup>th</sup> Edition of technoVIT, an international
              level technical festival of VIT Chennai.It gives us immense pride
              and pleasure in presenting technoVIT&apos; 22. This technical
              extravaganza will be filled with numerous activities such as
              workshops and technical events organised by the various schools of
              the University with the primary objective being, &quot; nurture
              professional skills and impart fine qualities to the
              students&quot;. It also has gaming events to thrill and create an
              environment with fun and frolic. Additionally, technical
              exhibitions from various organisations are being hosted. We, at
              VIT Chennai promise the audience an atmosphere of immense joy
              leaving them the thirst for more.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
