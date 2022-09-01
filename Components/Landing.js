import React from 'react'

const Landing = () => {
    const image1 = "https://i.imgur.com/SN1FQBH.gif";
    const image2 = "https://i.imgur.com/psfdz4P.gif";
    const image3 = "https://i.imgur.com/s5iLj8p.gif";
    return (
        <>
            <div
                id="carouselExampleCaptions"
                className="carousel slide"
                data-bs-ride="carousel"
            >
                <link rel="preload" href="https://i.imgur.com/SN1FQBH.gif" />
                <link rel="preload" href="https://i.imgur.com/psfdz4P.gif" />
                <link rel="preload" href="https://i.imgur.com/s5iLj8p.gif" />
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
                            src={image3}
                            style={{ marginTop: "-10vh" }}
                            className="d-block w-100"
                            alt="..."
                        />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>23-25, September 2022</h5>
                            <p>A beginning of a biggest tech fest of VIT.</p>
                        </div>
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
    )
}

export default Landing