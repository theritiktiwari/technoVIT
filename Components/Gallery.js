import React from 'react'

const image = "https://www.peakoil.net/wp-content/uploads/2017/05/environmental-sustainability.jpeg";

const Gallery = () => {
    return (
        <>
            <div className="container my-5" id='gallery'>
                <h2 className="text-center mb-3">Gallery</h2>
                <div className="container d-flex flex-wrap justify-content-around">
                    <div className="card mb-4" style={{ width: "18rem" }}>
                        <img src={image} className="card-img-top" alt="..." />
                    </div>
                    <div className="card mb-4" style={{ width: "18rem" }}>
                        <img src={image} className="card-img-top" alt="..." />
                    </div>
                    <div className="card mb-4" style={{ width: "18rem" }}>
                        <img src={image} className="card-img-top" alt="..." />
                    </div>
                    <div className="card mb-4" style={{ width: "18rem" }}>
                        <img src={image} className="card-img-top" alt="..." />
                    </div>
                    <div className="card mb-4" style={{ width: "18rem" }}>
                        <img src={image} className="card-img-top" alt="..." />
                    </div>
                    <div className="card mb-4" style={{ width: "18rem" }}>
                        <img src={image} className="card-img-top" alt="..." />
                    </div>
                    <div className="card mb-4" style={{ width: "18rem" }}>
                        <img src={image} className="card-img-top" alt="..." />
                    </div>
                    <div className="card mb-4" style={{ width: "18rem" }}>
                        <img src={image} className="card-img-top" alt="..." />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Gallery