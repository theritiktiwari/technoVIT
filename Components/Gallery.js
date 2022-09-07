import React from 'react'
import data from "./data/gallery"
import Image from 'next/image'

const image = "https://i.ibb.co/HYj6Tgk/environmental-sustainability.jpg";

const Gallery = () => {
    return (
        <>
            <div className="container-fluid py-5 bg-invert" id='gallery'>
                <h2 className="text-center mb-3">Gallery</h2>
                <div className="container d-flex flex-wrap justify-content-around">
                    {data && data.map((item, index) => {
                        return <div key={index} className="card mb-4" style={{ width: "18rem" }}>
                            <Image width={2000} height={1300} src={item.link || image} className="card-img-top" alt={item.name} />
                            {/* <NaturalImage src={item.link || image} className="card-img-top" alt={item.name} style={{ width: "100%", height: "100%" }} /> */}
                        </div>
                    })}
                </div>
            </div>
        </>
    )
}

export default Gallery