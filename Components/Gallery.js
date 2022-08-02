import React from 'react'

const image = "https://images.unsplash.com/photo-1443986870756-31166604c63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80";

const Gallery = () => {
    return (
        <>
            <div className="container my-5" id='gallery'>
                <h2 className="text-center mb-3">Gallery</h2>
                <div className="container d-flex flex-wrap justify-content-between">
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