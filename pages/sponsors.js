import Head from 'next/head'
import React from 'react'

const image = "https://images.unsplash.com/photo-1443986870756-31166604c63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80";

const sponsors = ({ siteName }) => {
    return (
        <>
            <Head>
                <title>Sponsors | {siteName}</title>
            </Head>
            <div className="container my-5">
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