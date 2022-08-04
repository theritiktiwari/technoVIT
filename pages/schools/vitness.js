import React from 'react';
import Head from 'next/head';

const image = "https://www.uflexltd.com/assets/images/environmental-Sustainability.jpg";

const Vitness = ({ siteName }) => {
    return (
        <>
            <Head>
                <title>Vitness | {siteName}</title>
            </Head>
            <div className="container my-5">
                <h1 className="text-center my-5">Vitness Events</h1>
                <div className="container d-flex flex-wrap justify-content-around">

                    <div className="card p-3 m-2" style={{ width: "18rem", height: "25rem" }}>
                        <img src={image} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-center">Event 1</h5>
                        </div>
                    </div>
                    <div className="card p-3 m-2" style={{ width: "18rem", height: "25rem" }}>
                        <img src={image} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-center">Event 2</h5>
                        </div>
                    </div>
                    <div className="card p-3 m-2" style={{ width: "18rem", height: "25rem" }}>
                        <img src={image} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-center">Event 3</h5>
                        </div>
                    </div>
                    <div className="card p-3 m-2" style={{ width: "18rem", height: "25rem" }}>
                        <img src={image} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-center">Event 4</h5>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Vitness