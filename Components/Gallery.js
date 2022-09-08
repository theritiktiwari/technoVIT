import React from "react";
import data from "./data/gallery";
import Image from "next/image";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Div from "./AnimatedDiv";

const image = "https://i.ibb.co/HYj6Tgk/environmental-sustainability.jpg";

const images = data.map(({ link, name }) => {
  return {
    original: link || image,
    thumbnail: link,
    // description: name,
    loading: "eager",
    thumbnailLoading: "eager",
  };
});

const Gallery = () => {
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
