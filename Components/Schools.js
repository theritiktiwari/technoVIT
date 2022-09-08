import Head from "next/head"
import Link from "next/link";
import NaturalImage from "./NaturalImage";
import schoolData from '../Components/data/schools'
const userImage = "https://i.ibb.co/yWZR9j0/Avatar.png";

const Schools = ({ siteName }) => {
    return (
        <div>
            <Head>
            </Head>
            <div className="container my-5 school">
                <h1 className="text-center my-5 animate__animated animate__lightSpeedInRight">School Fests</h1>
                <div className="container d-flex flex-wrap justify-content-start h-100">

                    {schoolData && schoolData.map((school, index) => {
                        return <Link href={`/schools/${school.link}`} id={index}>
                            <a>
                                <div className="card p-3 m-2" style={{ width: "18rem", height: "22rem" }}>
                                    <div style={{ width: "250px", height: "250px", display: "flex", alignItems: "center" }}>
                                        <NaturalImage src={school.image ? `${school.image}` : userImage} alt={school.name} width={10000} height={10000} />
                                        {/* <img src={school.image ? `${school.image}` : userImage} alt={school.name} style={{ width: "100%" }} /> */}
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-titlee text-center">{school.name}</h5>
                                    </div>
                                </div>
                            </a>
                        </Link>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Schools
