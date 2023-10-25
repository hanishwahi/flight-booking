import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import flightImg from '../../Images/flight-airplane (1).webp'
import { useParams, Link } from 'react-router-dom'
import { airportDB } from '../Home/AirpotDB'
import PlaneMoving from './PlaneMoving'

function FlightPage() {
    const [categorizedCity1, setCategorizedCity1] = useState({});
    const [categorizedCity2, setCategorizedCity2] = useState({});

    const Params = useParams()
    const airportName1 = Params.airport1
    const airportName2 = Params.airport2

    useEffect(() => {
        const filtered = airportDB.filter((airport) => airport.name === airportName1);
        const filtered2 = airportDB.filter((airport) => airport.name === airportName2);
        setCategorizedCity1(filtered[0]);
        setCategorizedCity2(filtered2[0]);
    }, [airportName1, airportName2]);
    return (
        <>
            <Header />

            <div className="container-fluid py-3 py-md-5">
                <div className="container-xl">
                    <div className="row">
                        <p className='welcome-name'>Welcome {Params.name.toUpperCase()}</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-7 mb-3">
                            <div className='book-flight'>
                                <div className='book-flight-head'>
                                    <h1>Book Your Flight</h1>
                                </div>
                                <div className='book-flight-inner'>
                                    <div className="row">
                                        <div className='col-lg-12 mb-3'>
                                            <label htmlFor=""> From:</label> <br />
                                            <input type="text" value={Params.airport1.toUpperCase()} disabled className='w-100' />
                                        </div>
                                        <div className='col-lg-12'>
                                            <label htmlFor=""> To:</label> <br />
                                            <input type="text" value={Params.airport2.toUpperCase()} disabled className='w-100' />
                                        </div>
                                    </div>
                                    <div className="row py-4">
                                        <div className='col-lg-6 col-sm-6'>
                                            <label htmlFor=""> Name</label> <br />
                                            <input type="text" value={Params.name.toUpperCase()} disabled className='w-100' />
                                        </div>
                                        <div className='col-lg-6 col-sm-6'>
                                            <label htmlFor=""> Depart</label> <br />
                                            <input type="text" value={Params.date.toUpperCase()} disabled className='w-100' />
                                        </div>

                                    </div>
                                    <div className="row my-4 text-center">
                                        <div className="col book-flight-call">
                                            <Link to='tel:+1 1800 2354 678' className='w-100'>Call Now to book your flight</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-sm-10 mb-3">
                            <div className='flight-img'>

                                <div className='flight-img'>
                                    <img src={flightImg} alt="" className='img-fluid' />
                                </div>

                                <div className="flight-text row">
                                    <div className="col-lg-12">
                                        <p><i class="fa-solid fa-plane text-white"></i> BUSINESS CLASS TRIP</p>
                                    </div>
                                    <div className="col-lg-12">
                                        <h1>{categorizedCity1.city} To</h1>
                                        <h1>{categorizedCity2.city}</h1>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <PlaneMoving />

            <Footer />
        </>
    )
}

export default FlightPage