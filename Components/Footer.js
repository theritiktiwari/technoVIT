import React from 'react';
import Link from 'next/link';

const Footer = ({ siteName }) => {
    return (
        <>
            <div className="container-fluid footer bg-light pb-3">
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
                            <li><Link href="/" className="link">Home</Link></li>
                            <li><a href="/#about" className="link">About</a></li>
                            <li><Link href="/" className="link">Schedule</Link></li>
                            <li><a href="/#venue" className="link">Venue</a></li>
                        </ul>
                    </div>
                    <div className="footer-item pt-5">
                        <h3>Useful Links</h3>
                        <ul className="d-flex flex-column list-unstyled">
                            <li><Link href="/#gallery" className="link">Gallery</Link></li>
                            <li><a href="/sponsors" className="link">Sponsors</a></li>
                            <li><Link href="/contact" className="link">Contact</Link></li>
                            <li><a href="/register" className="link">Register</a></li>
                        </ul>
                    </div>
                </div>
                <div className="container copyright">
                    <hr className="my-4" />
                    <p className="text-center">Copyright &copy; {new Date().getFullYear()} <Link className="text-decoration-none name" href="/">{siteName}</Link>. All rights reserved.</p>
                </div>
            </div>
        </>
    )
}

export default Footer