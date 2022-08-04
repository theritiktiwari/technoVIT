import Head from 'next/head'
import React from 'react'

const image = "https://1408440223.rsc.cdn77.org/images/June19/nature-3294632_1920.jpg";

const sponsors = ({ siteName }) => {
    return (
        <>
            <Head>
                <title>Sponsors | {siteName}</title>
            </Head>
            <div className="container my-5 sponsors">
                <h1 className='text-center mb-3'>Sponsors</h1>
                <div className="container d-flex flex-wrap justify-content-start">
                    <div className="card m-2" style={{ width: "18rem" }}>
                        <img src={image} className="card-img-top" alt="..." />
                    </div>
                    <div className="card m-2" style={{ width: "18rem" }}>
                        <img src={image} className="card-img-top" alt="..." />
                    </div>
                    <div className="card m-2" style={{ width: "18rem" }}>
                        <img src={image} className="card-img-top" alt="..." />
                    </div>
                    <div className="card m-2" style={{ width: "18rem" }}>
                        <img src={image} className="card-img-top" alt="..." />
                    </div>
                    <div className="card m-2" style={{ width: "18rem" }}>
                        <img src={image} className="card-img-top" alt="..." />
                    </div>
                    <div className="card m-2" style={{ width: "18rem" }}>
                        <img src={image} className="card-img-top" alt="..." />
                    </div>
                </div>
            </div>
        </>
    )
}

export default sponsors