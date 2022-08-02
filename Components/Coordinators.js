import React from 'react'

const userImage = "https://i.ibb.co/yWZR9j0/Avatar.png";

const Coordinators = () => {
    return (
        <>
            <div className="container my-5">
                <h2 className="text-center mb-3">Coordinators</h2>
                <div className="container d-flex flex-wrap justify-content-between">
                    <div className="card p-3 mb-3" style={{ width: "18rem" }}>
                        <img src={userImage} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-center">Name</h5>
                            <p className="card-text text-center">Contact: +91 9876543210</p>
                        </div>
                    </div>
                    <div className="card p-3 mb-3" style={{ width: "18rem" }}>
                        <img src={userImage} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-center">Name</h5>
                            <p className="card-text text-center">Contact: +91 9876543210</p>
                        </div>
                    </div>
                    <div className="card p-3 mb-3" style={{ width: "18rem" }}>
                        <img src={userImage} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-center">Name</h5>
                            <p className="card-text text-center">Contact: +91 9876543210</p>
                        </div>
                    </div>
                    <div className="card p-3 mb-3" style={{ width: "18rem" }}>
                        <img src={userImage} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-center">Name</h5>
                            <p className="card-text text-center">Contact: +91 9876543210</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Coordinators