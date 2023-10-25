import React from 'react'
import Input from './Input'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import contactImg from '../../Images/contact-page-img.webp'

function Contact() {
    return (
        <>
            <Header />

            <div className="container-fluid py-3">
                <div className="container-xl">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-5 col-md-8 order-1 order-lg-0">
                            <img src={contactImg} alt="" className='img-fluid'/>
                        </div>
                        <div className="col-lg-7">
                            <Input />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contact