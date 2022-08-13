import React from 'react';
import Link from 'next/link';

const Footer = ({ siteName }) => {
    const copyright = (year) => {
        const currYear = new Date().getFullYear();
        return year === currYear ? year : `${year}-${currYear % 100}`;
    }
    return (
        <>
            <div className="container-fluid footer pb-3">
                <div className="items container d-flex justify-content-between">
                    <div className="footer-item pt-5">
                        <h3>{siteName}</h3>
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
                            <li><Link href="/"><a className="link">Schedule</a></Link></li>
                            <li><Link href="/#venue"><a className="link">Venue</a></Link></li>
                        </ul>
                    </div>
                    <div className="footer-item pt-5">
                        <h3>Useful Links</h3>
                        <ul className="d-flex flex-column list-unstyled">
                            <li><Link href="/#gallery"><a className="link">Gallery</a></Link></li>
                            <li><Link href="/sponsors"><a className="link">Sponsors</a></Link></li>
                            <li><Link href="/"><a className="link">Register</a></Link></li>
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