import React from 'react'
import data from "./data/gallery"

const image = "https://www.peakoil.net/wp-content/uploads/2017/05/environmental-sustainability.jpeg";

const Gallery = () => {
    return (
        <>
            <div className="container my-5" id='gallery'>
                <h2 className="text-center mb-3">Gallery</h2>
                <div className="container d-flex flex-wrap justify-content-around">
                    {data && data.map((item, index) => {
                        return <div key={index} className="card mb-4" style={{ width: "18rem" }}>
                            <img src={item.link || image} className="card-img-top" alt={item.name} style={{ width: "100%", height: "100%" }} />
                        </div>
                    })}
                </div>
            </div>
        </>
    )
}

export default Gallery