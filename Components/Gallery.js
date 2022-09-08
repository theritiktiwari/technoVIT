import React, { useEffect } from "react";
import data from "./data/gallery";

const dummyImage = "https://i.ibb.co/HYj6Tgk/environmental-sustainability.jpg";

const Gallery = () => {
    useEffect(() => {
        let xOffset = 0;
        let isMouseIn = false;
        const slides = document.getElementById("slides");

        setInterval(translate, 0);

        function translate() {
            let offsetIncrementor = isMouseIn ? 0.05 : 0.2;
            if (xOffset >= 258 * 7) xOffset = 0;
            else xOffset = xOffset + offsetIncrementor;
            slides.style.transform = "translateX(-" + xOffset + "px)";
        }

        slides.addEventListener("mouseover", function (event) {
            isMouseIn = true;
        });

        slides.addEventListener("mouseout", function (event) {
            isMouseIn = false;
        });
    }, []);
    return (
    <Div className="container-fluid py-5" id="gallery">
      <h2 className="text-center mb-3">Gallery</h2>
      <div className="container">
        <ImageGallery items={images} autoPlay />
      </div>
    </Div>
  );
};

export default Gallery;
