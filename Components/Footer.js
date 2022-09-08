import React from 'react';
import Link from 'next/link';

const Footer = ({ siteName }) => {
    const copyright = (year) => {
        const currYear = new Date().getFullYear();
        return year === currYear ? year : `${year}-${currYear % 100}`;
    }
    return (
        <>
            <div className="copyright container-fluid p-4">
                <p className="text-center m-0">Copyright &copy; {copyright(2022)} <Link href="/"><a className='link'>{siteName}</a></Link>. All rights reserved.</p>
            </div>
        </>
    )
}

export default Footer