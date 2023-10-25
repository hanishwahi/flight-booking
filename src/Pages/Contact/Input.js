import React,{useState} from 'react'
import Select from 'react-select'
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate, Link } from 'react-router-dom';
import { airportDB } from '../Home/AirpotDB'; 

function Input() {
    const [airport1, setAirport1] = useState("")
    const [airport2, setAirport2] = useState("") 

    const [name, setName] = useState("")
    const [date, setDate] = useState("")


    const filtered = airportDB.filter((airport) => airport.country === "United States" && !airport.name == "");

    const options = filtered.map((airport) => ({
        value: airport.name,
        label: [
            `${airport.city}   
                ${airport.code}`
        ]
    }));

    const Navigate = useNavigate()

    const fillForm = (e) => {
        e.preventDefault();
        Navigate(`/book-your-ticket/${airport1}/${airport2}/${name.toLowerCase()}/${date}`);
    }


    const scrollToHome = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
 
    return (
        <>

            <div className="flight-search py-4">
                <div className="row border-bottom form-text1">
                    <div className="d-flex align-items-center gap-2 pb-3">
                        <h2>Flight Search</h2>
                        <i class="fa-solid fa-plane-departure" style={{ fontSize: "22px" }}></i>
                    </div>
                </div>
                <div className="row pt-3">
                    <div className="col">
                        <form onSubmit={fillForm} >
                            <div className="row">
                                <div className="col-lg-6 col-sm-6 mb-3">
                                    <Select options={options} placeholder="From City" className="w-100"
                                        onChange={(selectedOption) => {
                                            setAirport1(selectedOption.value);
                                        }} /> <br />
                                    <label htmlFor="">From Airport:</label>
                                    <input type="text" value={airport1} className='w-100' disabled />

                                </div>
                                <div className="col-lg-6 col-sm-6 mb-3">
                                    <Select options={options} placeholder="To City" className="w-100"
                                        onChange={(selectedOption) => {
                                            setAirport2(selectedOption.value);
                                        }} /><br />
                                    <label htmlFor="">To Airport:</label>
                                    <input type="text" value={airport2} className='w-100' disabled />
                                </div>
                            </div>

                            <div className="row my-lg-3 my-3">
                                <div className="col-lg-6">
                                    <div className="row">
                                        <div className="col-lg-6 col-sm-6 mb-3">
                                            <label htmlFor="">Depart</label>
                                            <input type="date" name="" id="" placeholder='depart' className='w-100' required onChange={(e) => { setDate(e.target.value) }} />

                                        </div>
                                        <div className="col-lg-6 col-sm-6 mb-3">
                                            <label htmlFor="">Return</label>
                                            <input type="date" name="" id="" placeholder='return' className='w-100' />

                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 align-self-center">
                                    <div className="row">

                                        <div className="col-lg-6 col-sm-6 mb-3">
                                            <label htmlFor="">Class</label>
                                            <select defaultValue="x" name="" id="" className='w-100' required>
                                                <option value="x" disabled>Select Class</option>
                                                <option value="">Economy</option>
                                                <option value="">Business</option>
                                            </select>
                                        </div>
                                        <div className="col-lg-6 col-sm-6 mb-3">
                                            <label htmlFor="">No of Person</label>
                                            <select defaultValue="y" name="" id="" className='w-100' required>
                                                <option value="y" disabled>Select Person</option>
                                                <option value="1">1 </option>
                                                <option value="2">2 </option>
                                                <option value="3">3 </option>
                                                <option value="4">4 </option>
                                                <option value="5">5 </option>
                                                <option value="6">6 </option>
                                                <option value="7">7 </option>
                                                <option value="7">8 </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-lg-5 mb-3">
                                <label htmlFor="">Contacts</label>
                                <div className="col-lg-4 col-md-4 col-sm-6 mb-3">
                                    <input type="text" className='w-100' placeholder='Name*' required onChange={(e) => { setName(e.target.value) }} />
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6 mb-3">
                                    <input type="email" className='w-100' placeholder='Email*' required />
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6 mb-3">
                                    <input type="number" className='w-100' placeholder='Phone*' required />
                                </div>
                            </div>
                            <div className="row ">
                                <div className="col search-flight-button">
                                    <input onClick={scrollToHome} className='search-flight-button' type="submit" value="Search Flight Now" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Input