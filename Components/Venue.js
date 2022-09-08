import React from 'react';

const Venue = () => {
    return (
        <>
            <div className="container ps-5" id="venue" data-aos="zoom-out">
                <div className="container shadow-lg p-3 my-5 bg-body rounded venue-section row d-flex justify-content-between align-items-center">
                    <div className="col-12 col-lg-6 rounded-2 d-flex align-items-center justify-content-center">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.040704935981!2d80.15123961474222!3d12.840646221212731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5259af8e491f67%3A0x944b42131b757d2d!2sVellore%20Institute%20of%20Technology%20-%20VIT%20Chennai!5e0!3m2!1sen!2sin!4v1659459692314!5m2!1sen!2sin"
                            width="100%"
                            height="450"
                            style={{ border: "0" }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    <div className="col-12 col-lg-6 mt-4">
                        <div className="d-flex justify-content-around align-items-center flex-column text px-4 w-100" style={{ height: "100%" }}>
                            VIT Chennai <br />
                            Vandalur Kelambakkam Road <br />
                            Chennai-600127 <br />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Venue;