import React from "react";
import sponsors from "./data/sponsors";

const userImage = "https://i.ibb.co/yWZR9j0/Avatar.png";

const Sponsors = () => {
    return (
        <>
            <section className='coordinators my-5'>
                <h1 className="text-center my-5 heading">Sponsors</h1>
                <div className="d-flex flex-wrap justify-content-around align-items-center">
                    {sponsors && sponsors.map((item, index) => {
                        return <div key={index} className="coord-card mt-3 mx-5 d-flex justify-content-center align-items-center flex-column">
                            <div className="user-imgs">
                                <img src={item.image || userImage} className="card-img-tops" alt={item.name} />
                            </div>
                            <div className="c-body">
                                <h5 className="card-title text-center">{item.name}</h5>
                                {item.designation && <p className="text-center" style={{ fontSize: "15px" }}>{item.designation}</p>}
                            </div>
                        </div>
                    })}
                </div>
            </section>
        </>
    );
};
export default Sponsors;