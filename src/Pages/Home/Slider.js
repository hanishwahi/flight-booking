import React from 'react' 
import { Link } from 'react-router-dom';
 
import Input from '../Contact/Input';


function Slider() { 

    const scrollToHome = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    return (
        <>
            <div className="container-fluid slider-bg">
                <div className="container-xxl py-5">
                    <div className="row pb-4 pb-lg-0">
                        <div className="col-lg-5 col-md-11">
                            <div className='slider-text'>
                                <h1>THE <span>LOWEST PRICES</span> ON BUSINESS & FIRST CLASS <span>GUARANTEED</span></h1>
                                <div className="border-bottom"></div>
                                <p>First and Business class flights</p>
                                <div className="border-bottom"></div>
                                <div className="slider-text-button mt-5">
                                    <Link onClick={scrollToHome} to='/about'>Learn More</Link>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-7">
                             <Input/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Slider