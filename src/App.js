
import './Style/Style.css'
import './Style/Responsive.css'
import Home from './Pages/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FlightPage from './Pages/FlightPage/FlightPage';
import About from './Pages/About/About';
import AirlinesReservation from './Pages/AirlinesReservation/AirlinesReservation';
import PrivacyPolicy from './Pages/PrivacyPolicy/PrivacyPolicy';
import Contact from './Pages/Contact/Contact';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/airlines-reservation' element={<AirlinesReservation/>}/>
          <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
          <Route path='/book-your-ticket/:airport1/:airport2/:name/:date' element={<FlightPage/>}/>
        </Routes>
      </BrowserRouter> 
    </>
  );
}

export default App;
