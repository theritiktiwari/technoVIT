import React from 'react';
import Link from 'next/link';
import schoolData from "../Components/data/schools";

const Schools = () => {
    return (
        <>
            <div className="container school">
                <h1 className="text-center my-5 heading">School Fests</h1>
                <div className="d-flex flex-wrap justify-content-around align-items-center">
                    {schoolData && schoolData.map((item, index) => {
                        return <Link href={`/schools/${item.link}`} key={index}>
                            <a><div className="card main-school p-3 d-flex justify-content-center align-items-center my-1">
                                <div className="user-img">
                                    <img src={item.image || userImage} className="card-img-top" alt={item.name} />
                                </div>
                            </div></a>
                        </Link>
                    })}
                </div>
            </div>
        </>
    )
}

export default Schools