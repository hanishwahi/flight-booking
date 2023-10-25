import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    const scrollToHome = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    return (
        <>
            <div className="container-fluid py-3 footer-bg">
                <div className="container-xl">
                    <div className="row justify-content-between border-bottom">
                        <div className="col-lg-4">
                            <div className="footer-text pe-4">
                                <h2>About Us</h2>
                                <p>Behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts they live</p>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="footer-text">
                                <h2>Quick Links</h2>
                                <ul>
                                    <li><Link onClick={scrollToHome} to='/about'> About</Link></li>
                                    <li><Link onClick={scrollToHome} to='/airlines-reservation' > Airlines Reservation</Link></li>
                                    <li><Link onClick={scrollToHome} to='/privacy-policy'> Privacy Policy</Link></li>
                                    
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="footer-text pe-5">
                                <h2>Newsletter</h2>
                                <p>Don’t miss our future updates! Get Subscribed Today!</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="footer-text">
                                <h2>Get In Touch?</h2>
                                <p><i class="fa-regular fa-envelope"></i> info@fairclassbooking.com</p>
                                <p> Address:  #ABC</p>
                            </div>
                        </div>


                    </div>
                    <div className="row footer-text text-center pt-3">
                        <p>Copyright © 2023 fairclassbooking. All Right Reserved.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer