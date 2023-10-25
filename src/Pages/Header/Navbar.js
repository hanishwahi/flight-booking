import React from 'react'
import mainlogo from '../../Images/flight-logo.webp'
import { Link } from 'react-router-dom'

function Navbar() {
    const scrollToHome = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <>
            <div className="container-fluid py-1 sticky-top bg-white border-bottom  shadow">
                <div className="container-xl">
                    <div className="row">
                        <div className="col-lg-3 col-md-2 col-sm-2 col-2">
                          <Link  to='/' onClick={scrollToHome} ><img src={mainlogo} alt="" width={130} loading='lazy'/></Link>  
                        </div>
                        <div className="col-lg-6 col-md-10 align-self-center main-navbar-hide">
                            <div className="navbar">
                                <Link to='/' onClick={scrollToHome}>Home</Link>
                                <Link to='/about' onClick={scrollToHome}>About</Link>
                                <Link to='/airlines-reservation' onClick={scrollToHome}>Airlines Reservation</Link>
                                <Link to='/privacy-policy' onClick={scrollToHome}>Privacy Policy</Link>
                                <Link to='tel:+1 1800 2354 678'>Contact</Link>
                            </div>
                        </div>
                        <div className="col-lg-3 align-self-center main-navbar-hide">
                            <div className="row text-end">
                                <div className="col call-now-nav">
                                    <Link to='tel:+1 1800 2354 678'>Call Now</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-7 col-sm-10 col-md-10 col-10 align-self-center  text-end new-menu-hide px-0">
                            <button className="btn shadow-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><i className="fa-solid fa-bars h2 mb-0" style={{ color: "#000" }}></i></button>
                        </div>

                        <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                            <div className="offcanvas-header border-bottom">
                                <div className="col-6">
                                    <Link onClick={scrollToHome} to="/">
                                        <img width="80%" height={40} className="img-fluid px-0" src={mainlogo} alt="" />
                                    </Link>
                                </div>
                                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body p-0">
                                <div className="navbar">
                                    <Link to='/' onClick={scrollToHome}>Home</Link>
                                    <Link to='/about' onClick={scrollToHome}>About</Link>
                                    <Link to='/airlines-reservation' onClick={scrollToHome}>Airlines Reservation</Link>
                                    <Link to='/privacy-policy' onClick={scrollToHome}>Privacy Policy</Link>
                                    <Link to='/'>Contact</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Navbar