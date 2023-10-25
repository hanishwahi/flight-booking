import React from 'react'
import Header from '../Header/Header'
import Slider from './Slider'
import BestDeal from './BestDeal'
import BookConfidence from './BookConfidence'
import GreatDeals from './GreatDeals'
import Footer from '../Footer/Footer'
import WorkWithAirlines from './WorkWithAirlines'

function Home() {
  return (
     <>
     <Header/>
     <Slider/>
     <BestDeal/>
     <GreatDeals/>
     <BookConfidence/>
     <WorkWithAirlines/>
     <Footer/>
     </>
  )
}

export default Home