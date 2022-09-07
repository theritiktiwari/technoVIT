import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BsTwitter, BsSnapchat, BsYoutube } from 'react-icons/bs';
import { IoMdMail } from 'react-icons/io';
import { AiFillInstagram } from 'react-icons/ai';

const Footer = ({ siteName, logo }) => {
    const copyright = (year) => {
        const currYear = new Date().getFullYear();
        return year === currYear ? year : `${year}-${currYear % 100}`;
    }
    return (
        <>
            <div className="container-fluid footer pb-3">
                <div className="items container d-flex justify-content-between">
                    <div className="footer-item pt-5">
                        <Link href="/">
                            <a className="navbar-brand">
                                {logo ? <Image src={logo} height={50} width={150} alt={"technoVIT"} /> : <h3>{siteName}</h3>}
                            </a>
                        </Link>
                        {/* <h3>{siteName}</h3> */}
                        <ul className="d-flex flex-column list-unstyled">
                            <li className="my-2">VIT Chennai</li>
                            <li className="my-1">Vandalur Kelambakkam Road</li>
                            <li>Chennai-600127</li>
                        </ul>
                    </div>
                    <div className="footer-item pt-5">
                        <h3>Useful Links</h3>
                        <ul className="d-flex flex-column list-unstyled">
                            <li><Link href="/"><a className="link">Home</a></Link></li>
                            <li><Link href="/#about"><a className="link">About</a></Link></li>
                            <li><Link href="/#venue"><a className="link">Venue</a></Link></li>
                            <li><Link href="https://vitchennaievents.com/technovit/"><a className="link">Register</a></Link></li>
                        </ul>
                    </div>
                    <div className="footer-item pt-5">
                        <h3>Connect with Us !</h3>
                        <ul className="d-flex flex-column list-unstyled">
                            <li><a target={"_blank"} href="https://instagram.com/Technovit22" className="link"><AiFillInstagram /> Instagram</a></li>
                            <li><a target={"_blank"} href="https://snapchat.com/add/technovit22" className="link"><BsSnapchat /> Snapchat</a></li>
                            <li><a target={"_blank"} href="https://youtube.com/channel/UChTqHUsS72cFAujVRUqRs9g" className="link"><BsYoutube /> Youtube</a></li>
                            <li><a target={"_blank"} href="mailto:technovit22@gmail.com" className="link"><IoMdMail /> Mail</a></li>
                            <li><a target={"_blank"} href="https://twitter.com/technovit22" className="link"><BsTwitter /> Twitter</a></li>
                        </ul>
                    </div>
                </div>
                <div className="container copyright">
                    <hr className="my-4" />
                    <p className="text-center">Copyright &copy; {copyright(2022)} <Link href="/"><a className='link'>{siteName}</a></Link>. All rights reserved.</p>
                </div>
            </div>
        </>
    )
}

export default Footer
