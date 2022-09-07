import React from 'react'
import Head from "next/head";
import Image from 'next/image';
import { useRouter } from 'next/router'

import bandvit from "../../Components/data/schoolData/bandvit";
import connectivitieee from "../../Components/data/schoolData/connectivitieee";
import diseno from "../../Components/data/schoolData/diseno";
import glitz from "../../Components/data/schoolData/glitz";
import qubit from "../../Components/data/schoolData/qubit";
import srishti from "../../Components/data/schoolData/srishti";
import taikuun from "../../Components/data/schoolData/taikuun";
import vitlilacs from "../../Components/data/schoolData/lilacs";
import vitness from "../../Components/data/schoolData/vitness";
import vsplash from "../../Components/data/schoolData/vsplash";
import NaturalImage from '../../Components/NaturalImage';

const image = "https://www.uflexltd.com/assets/images/environmental-Sustainability.jpg";

const ID = ({ siteName }) => {
    const router = useRouter();
    const { id } = router.query;
    const data = id == "bandvit" ? bandvit :
        id == "connectivitieee" ? connectivitieee :
            id == "diseno" ? diseno :
                id == "glitz" ? glitz :
                    id == "qubit" ? qubit :
                        id == "srishti" ? srishti :
                            id == "taikuun" ? taikuun :
                                id == "lilacs" ? vitlilacs :
                                    id == "vitness" ? vitness :
                                        id == "vsplash" ? vsplash : [];

    const slug = ["bandvit", "connectivitieee", "diseno", "glitz", "qubit", "srishti", "taikuun", "lilacs", "vitness", "vsplash"];

    return (
        <>
            <Head>
                <title>{id} | {siteName}</title>
            </Head>
            <div className="container my-5">
                <h1 className="text-center my-5 text-uppercase">{id} Events</h1>
                <div className="container d-flex flex-wrap justify-content-around">
                    {data && data.map((item, index) => {
                        return item.name ?
                            <a href="https://vitchennaievents.com/technovit/" id={index}>
                                <div className="card p-3 m-2" style={{ width: "18rem", height: "25rem" }} >
                                    <NaturalImage src={item.image ? item.image : image} width={1000} height={1200} />
                                    {/* <Image src={item.image ? item.image : image} className="card-img-top" alt={item.name} height={2000} width={500} /> */}
                                    <div className="card-body">
                                        <h5 className="card-title text-center">{item.name}</h5>
                                    </div>
                                </div>
                            </a> : <h4 className='text-center my-4'>No listed events.</h4>;
                    })}
                </div>
            </div>


        </>
    )
}

// show error if the slug is not in the list


export default ID
