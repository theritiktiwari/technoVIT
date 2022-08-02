import React from 'react'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { InfinitySpin } from 'react-loader-spinner'

const Loader = () => {
    return (
        <>
            <div className='loader'>
                <InfinitySpin
                    heigth={100}
                    width={100}
                    color="black"
                />
            </div>
        </>
    )
}

export default Loader