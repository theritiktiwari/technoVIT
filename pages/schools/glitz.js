import React from 'react';
import Head from 'next/head';

const image = "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg";

const Glitz = ({ siteName }) => {
    return (
        <>
            <Head>
                <title>Glitz | {siteName}</title>
            </Head>
            <div className="container my-5">
                <h1 className="text-center my-5">Glitz Events</h1>
                <div className="container d-flex flex-wrap justify-content-start">

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

export default Glitz