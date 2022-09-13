import React from "react";
import Link from "next/link";
import convener from "./data/convener";
import coordinators from "./data/coordinators";

const userImage = "https://i.ibb.co/yWZR9j0/Avatar.png";

const Coordinators = () => {
    return (
        <>
            <section className='coordinators my-5'>
                <div className="d-flex head justify-content-between container align-items-center">
                    <h1 className='mb-5'>Conveners and Coordinators</h1>
                </div>
                <div className="container data d-flex justify-content-around align-items-center">
                    {convener && convener.map((item, index) => {
                        return <div key={index} className="coord-card d-flex justify-content-center align-items-center flex-column">
                            <div className="user-img">
                                <img src={item.image || userImage} className="card-img-top" alt={item.name} />
                            </div>
                            <div className="c-body">
                                <h5 className="card-title text-center">{item.name}</h5>
                                {item.designation && <p className="text-center" style={{ fontSize: "15px" }}>{item.designation}</p>}
                                {item.phone && item.email && <div className="d-flex justify-content-between align-items-center">
                                    <a className="btn w-100 me-2" href={`tel:${item.phone}`}>&nbsp;Call&nbsp;</a>
                                    <a className="btn w-100" href={`mailto:${item.email}`}>&nbsp;Email&nbsp;</a>
                                </div>}
                            </div>
                        </div>
                    })}
                </div>
                <h1 className="text-center my-5 heading">Coordinators</h1>
                <div className="d-flex flex-wrap justify-content-around align-items-center">
                    {coordinators && coordinators.map((item, index) => {
                        return <div key={index} className="coord-card mt-3 mx-5 d-flex justify-content-center align-items-center flex-column">
                            <div className="user-img">
                                <img src={item.image || userImage} className="card-img-top" alt={item.name} />
                            </div>
                            <div className="c-body">
                                <h5 className="card-title text-center">{item.name}</h5>
                                {item.designation && <p className="text-center" style={{ fontSize: "15px" }}>{item.designation}</p>}
                                {item.phone && item.email && <div className="d-flex justify-content-between align-items-center">
                                    <a className="btn w-100 me-2" href={`tel:${item.phone}`}>&nbsp;Call&nbsp;</a>
                                    <a className="btn w-100" href={`mailto:${item.email}`}>&nbsp;Email&nbsp;</a>
                                </div>}
                            </div>
                        </div>
                    })}
                </div>
            </section>
        </>
    );
};
export default Coordinators;