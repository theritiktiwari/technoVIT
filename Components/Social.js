import React from 'react';
import { BsTwitter, BsSnapchat, BsYoutube } from 'react-icons/bs';
import { IoMdMail } from 'react-icons/io';
import { AiFillInstagram } from 'react-icons/ai';

const Social = ({ count }) => {
    return (
        <>
            <section className='social container-fluid pb-0'>
                <div className='container d-flex justify-content-between align-items-center'>
                    <div className="left d-flex align-items-start">
                        <a target={"_blank"} rel="noreferrer" href="https://instagram.com/Technovit22" className="link"><AiFillInstagram /></a>
                        <a target={"_blank"} rel="noreferrer" href="https://youtube.com/channel/UChTqHUsS72cFAujVRUqRs9g" className="link"><BsYoutube /></a>
                        <a target={"_blank"} rel="noreferrer" href="mailto:technovit22@gmail.com" className="link"><IoMdMail /></a>
                        <a target={"_blank"} rel="noreferrer" href="https://twitter.com/technovit22" className="link"><BsTwitter /></a>
                        <a target={"_blank"} rel="noreferrer" href="https://snapchat.com/add/technovit22" className="link"><BsSnapchat /></a>
                    </div>

                    <div className="right">
                        <p>Visitors: {count}</p>
                    </div>
                </div>
                <hr className='mb-0 pb-0 w-75 mx-auto' />
            </section>
        </>
    )
}

export default Social