import React from 'react'
import { Link } from 'react-router-dom'
import uSlogo from '../../Images/us logo.png'

function TopHead() {
    return (
        <>
            <div className="container-fluid border-bottom">
                <div className="container-xxl">
                    <div className="row py-1">
                        <div className="col-lg-10 col-12 col-sm-8 text-end d-flex justify-content-end align-items-center gap-3 top-head">
                            <h2>Call For Exclusive Deals</h2>
                            <Link to='tel:+1 1800 2354 678'>+1 1800 2354 678</Link>
                        </div>
                        <div className="col-lg-2 col-12 col-sm-4 d-flex justify-content-md-start justify-content-end align-items-center gap-3 top-head-text">
                            <h2>US Based Company</h2> 
                            <img src={uSlogo} alt="" width={30} loading='lazy'/>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default TopHead