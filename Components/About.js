import React from 'react';

const About = ({ siteName }) => {
    return (
        <>
            <div className="container-fluid p-2">
                <div className="container my-5" id='about' data-aos="zoom-in">
                    <h1 className='text-center mb-3'>About {siteName}</h1>
                    <p style={{ textAlign: "justify" }}>This is the 6th Edition of technoVIT, an international level technical festival of VIT Chennai. It gives us immense pride and pleasure in presenting technoVIT&apos;22. This technical extravaganza will be filled with numerous activities such as workshops and technical events organised by the various schools of the University with the primary objective being, “nurture professional skills and impart fine qualities to the students”. It also has gaming events to thrill and create an environment with fun and frolic. Additionally, technical exhibitions from various organisations are being hosted. We, at VIT Chennai promise the audience an atmosphere of immense joy leaving them the thirst for more.</p>
                </div>
            </div>
        </>
    )
}

export default About