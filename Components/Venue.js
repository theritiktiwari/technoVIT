import React from 'react'

const Venue = () => {
    return (
        <>
            <div className="container-fluid p-5" id="venue">
                <h2 className="text-center mb-3">Venue</h2>
                <iframe
                    data-aos="zoom-out"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.040704935981!2d80.15123961474222!3d12.840646221212731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5259af8e491f67%3A0x944b42131b757d2d!2sVellore%20Institute%20of%20Technology%20-%20VIT%20Chennai!5e0!3m2!1sen!2sin!4v1659459692314!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    style={{ border: "0" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </>
    )
}

export default Venue