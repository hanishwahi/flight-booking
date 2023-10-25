import React from 'react'
import emirates from '../../Images/emirates.svg'
import british from '../../Images/british.svg'
import delta from '../../Images/delta.svg'
import pacific from '../../Images/cathay-pacific.svg'
import lufthansa from '../../Images/lufthansa.svg'

function WorkWithAirlines() {
    return (
        <>
            <div className="container-fluid work-airlines  py-5">
                <div className="container-xxl">
                    <div className="row work-airlines">
                        <h2>We work with All major Airlines</h2>
                    </div>
                    <div className="row justify-content-between align-items-center text-center">
                        <div className="col-lg-2 col-sm-6 mb-5 mb-md-3">
                            <img src={emirates} alt="" />
                        </div>
                        <div className="col-lg-2 col-sm-6 mb-5 mb-md-3">
                            <img src={british} alt="" />
                        </div>
                        <div className="col-lg-2 col-sm-6 mb-5 mb-md-3">
                            <img src={delta} alt="" />
                        </div>
                        <div className="col-lg-2 col-sm-6 mb-5 mb-md-3">
                            <img src={pacific} alt="" />
                        </div>
                        <div className="col-lg-2 col-sm-6 mb-5 mb-md-3">
                            <img src={lufthansa} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WorkWithAirlines