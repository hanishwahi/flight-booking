import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Mission from '../../Images/about-img-mission.jpg'
import CoreValues from './CoreValues'

function About() {
    return (
        <>
            <Header />

            <div className="container-fluid py-5">
                <div className="container-xxl">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="about-text">
                                <h1>Our Mission</h1>
                                <p>At Fare Booking Online, our mission is to empower travelers with a seamless and affordable booking experience. We strive to provide a comprehensive range of travel options, competitive fares, and personalized service. We are dedicated to ensuring your journeys are not just trips but memorable adventures. Your trust in us fuels our commitment to deliver quality and convenience in every booking.</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="">
                                <img src={Mission} alt="" loading='lazy' className='img-fluid'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <CoreValues/>
            <Footer />
        </>
    )
}

export default About