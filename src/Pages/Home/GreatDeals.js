import React from 'react'
import GreatDeal from '../../Images/Great-Deal-Img.webp'

function GreatDeals() {
    return (
        <>
            <div className="container-fluid great-deal-bg ">
                <div className="container-lg">
                    <div className="row align-items-center">
                        <div className="col-lg-6 great-deal-text">
                            <h4>Top Rated Luxury Travel Agency</h4>
                            <h2>Enjoy our Great Deals on First & Business class</h2>
                            <p>I Fly First Class is your personal travel concierge. We're at your service 24/7 to meet all your travel needs. Our professional staff is dedicated to saving you time and money. We'll sort out even the most complex travel itineraries in minutes, getting you the best but least costly business class airfares. Our business flight booking division is always at your service!</p>
                        </div>
                        <div className="col-lg-6">
                            <img src={GreatDeal} alt="" className='img-fluid'/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GreatDeals