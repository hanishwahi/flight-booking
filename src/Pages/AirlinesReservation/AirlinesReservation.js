import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function AirlinesReservation() {
    return (
        <>
            <Header />
            <div className="container-fluid py-md-5 py-3">
                <div className="container-xl">
                    <div className="row airlines-text">
                        <h2>About Airlines</h2>
                        <p>Airlines are companies that provide air transportation services for passengers and cargo. They play a crucial role in connecting people and goods across the globe, making international travel and trade possible.</p>
                    </div>
                    <div className="row">
                        <div className="col airlines-text">
                            <h2>Travel Class:</h2>
                            <p>Travel class, often referred to as cabin class, is the categorization of seating arrangements and services offered to passengers on commercial flights. Airlines typically offer several travel class options to accommodate the diverse needs and preferences of travelers. The specific names and features of these classes can vary between airlines, but the following are some common travel classes found in commercial aviation:</p>
                            <div className="row">
                                <div className="col airlines-text">
                                    <ul>
                                        <li>Economy Class:
                                            <ul>
                                                <li>Economy class, also known as coach class or standard class, is the most basic and affordable seating option on most flights.</li>
                                                <li>Passengers in economy class receive standard services, including a seat, in-flight entertainment (if available), and meals or snacks (depending on the flight duration and airline).</li>
                                                <li>The seating arrangement is typically in a 3-3 or 3-4-3 configuration for narrow-body aircraft and 3-3-3 or 3-4-3 for wide-body aircraft.</li>
                                            </ul>
                                        </li>
                                    </ul></div>
                            </div>
                            <div className="row">
                                <div className="col airlines-text">
                                    <ul>
                                        <li>Premium Economy Class:
                                            <ul>
                                                <li>Premium economy class is a step up from economy class and offers more comfort and amenities.</li>
                                                <li>Passengers in premium economy class often enjoy larger seats with extra legroom, enhanced meal options, and improved in-flight entertainment.</li>
                                                <li>This class is especially popular on long-haul flights.</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col airlines-text">
                                    <ul>
                                        <li>Business Class:
                                            <ul>
                                                <li>Business class, also known as executive class or club class, offers a higher level of comfort and service compared to economy class.</li>
                                                <li>Passengers in business class typically have access to lie-flat or angled lie-flat seats, priority boarding, premium meals, and enhanced entertainment options.</li>
                                                <li>On some airlines, business class may include access to airport lounges.</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col airlines-text">
                                    <ul>
                                        <li>First Class:
                                            <ul>
                                                <li>First class is the most luxurious and premium travel class available on commercial flights.</li>
                                                <li>Passengers in first class enjoy the most spacious and comfortable seating, gourmet meals, dedicated cabin crew, and a range of exclusive services.</li>
                                                <li>First-class cabins often feature private suites or enclosed seating areas.</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col airlines-text">
                                    <ul>
                                        <li>Suites Class:
                                            <ul>
                                                <li>Some airlines offer a special suites class, which is even more exclusive and luxurious than first class.</li>
                                                <li>Passengers in suites class may have individual cabins with doors, fine dining experiences, and personalized services.</li>
                                                <li>This class is available on select long-haul routes.</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col airlines-text">
                                    <ul>
                                        <li>Residence Class:
                                            <ul>
                                                <li>A select few airlines, such as Etihad Airways, offer a Residence Class that provides passengers with an entire private living space in the sky, including a separate bedroom, living room, and en-suite bathroom.</li> 
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <p>It’s important to note that the availability of these travel classes, as well as their features and pricing, can vary significantly between airlines. Passengers can choose the class that best suits their travel needs, preferences, and budget. Frequent flyers and elite members of airline loyalty programs often have access to upgrades and additional benefits in higher classes of service.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AirlinesReservation