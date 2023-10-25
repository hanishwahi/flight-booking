import React from 'react'
import BestDeal1 from '../../Images/best-deal1.jpg'
import johannesburg from '../../Images/best-deal2-johannesburg.jpg'
import yangon from '../../Images/best-deal3-yangon.jpg'
import frankfurt from '../../Images/best-deal1-frankfurt.jpg'
import milan from '../../Images/best-deal1-milan.jpg'
import cairo from '../../Images/best-deal1-cairo.jpg'
import dublin from '../../Images/best-deal1-dublin.jpg'
import Munich from '../../Images/best-deal1-munich.jpg'
import { Link } from 'react-router-dom'

function BestDeal() {
    const scrollToHome = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    return (
        <>
            <div className="container-fluid">
                <div className="container-xxl">
                    <div className="row best-deal">
                        <h1>Best Deal</h1>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-12 col-sm-6 col-md-4 pb-3">
                            <div className="best-deal-inner border shadow">
                                <Link onClick={scrollToHome} to='/contact' className='text-decoration-none'>
                                    <div>
                                        <img src={BestDeal1} alt="" className='img-fluid' />
                                    </div>
                                    <div className='p-3 best-deal-text'>
                                        <h3>Nice</h3>
                                        <h5>Round trip / Business class</h5>
                                        <p>$2977</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-12 col-sm-6 col-md-4 pb-3">
                            <div className="best-deal-inner border shadow">
                                <Link onClick={scrollToHome} to='/contact' className='text-decoration-none'>
                                    <div>
                                        <img src={johannesburg} alt="" className='img-fluid' />
                                    </div>
                                    <div className='p-3 best-deal-text'>
                                        <h3>Johannesburg</h3>
                                        <h5>Round trip / Business class</h5>
                                        <p>$4289</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-12 col-sm-6 col-md-4 pb-3">
                            <div className="best-deal-inner border shadow">
                                <Link onClick={scrollToHome} to='/contact' className='text-decoration-none'>
                                    <div>
                                        <img src={yangon} alt="" className='img-fluid' />
                                    </div>
                                    <div className='p-3 best-deal-text'>
                                        <h3>Yangon</h3>
                                        <h5>Round trip / Business class</h5>
                                        <p>$3672</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-12 col-sm-6 col-md-4 pb-3">
                            <div className="best-deal-inner border shadow">
                                <Link onClick={scrollToHome} to='/contact' className='text-decoration-none'>
                                    <div>
                                        <img src={milan} alt="" className='img-fluid' />
                                    </div>
                                    <div className='p-3 best-deal-text'>
                                        <h3>Milan</h3>
                                        <h5>Round trip / Business class</h5>
                                        <p>$2879</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-12 col-sm-6 col-md-4 pb-3">
                            <div className="best-deal-inner border shadow">
                                <Link onClick={scrollToHome} to='/contact' className='text-decoration-none'>
                                    <div>
                                        <img src={frankfurt} alt="" className='img-fluid' />
                                    </div>
                                    <div className='p-3 best-deal-text'>
                                        <h3>Frankfurt</h3>
                                        <h5>Round trip / Business class</h5>
                                        <p>$2654</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-12 col-sm-6 col-md-4 pb-3">
                            <div className="best-deal-inner border shadow">
                                <Link onClick={scrollToHome} to='/contact' className='text-decoration-none'>
                                    <div>
                                        <img src={cairo} alt="" className='img-fluid' />
                                    </div>
                                    <div className='p-3 best-deal-text'>
                                        <h3>Cairo</h3>
                                        <h5>Round trip / Business class</h5>
                                        <p>$3984</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-12 col-sm-6 col-md-4 pb-3">
                            <div className="best-deal-inner border shadow">
                                <Link onClick={scrollToHome} to='/contact' className='text-decoration-none'>
                                    <div>
                                        <img src={dublin} alt="" className='img-fluid' />
                                    </div>
                                    <div className='p-3 best-deal-text'>
                                        <h3>Dublin</h3>
                                        <h5>Round trip / Business class</h5>
                                        <p>$3478</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-12 col-sm-6 col-md-4 pb-3">
                            <div className="best-deal-inner border shadow">
                                <Link onClick={scrollToHome} to='/contact' className='text-decoration-none'>
                                    <div>
                                        <img src={Munich} alt="" className='img-fluid' />
                                    </div>
                                    <div className='p-3 best-deal-text'>
                                        <h3>Munich</h3>
                                        <h5>Round trip / Business class</h5>
                                        <p>$2946</p>
                                    </div>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default BestDeal