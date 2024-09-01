import React from 'react'
import Header from './Header'
import SubHeader from './SubHeader'
import Smartphone from './Smartphone'
import Brands from './Brands'
import Draw from './draw'
import NewArrival from './NewArrival'
import Suggestion from './Suggestion'
import Fields from './Fields'
import UpperFooter from './UpperFooter'
import { useLocation } from 'react-router-dom'
import ImageCarousel from './SlideShow'
import FurnitureDeal from './Electronic'
import LatestDeal from './Latest'


function Home() {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div className=' !bg-slate-100 overflow-x-hidden'>
        <Header/>
        <SubHeader/>
        <ImageCarousel/>
        {/* <Sliders/> */}
        <Smartphone/>
        <Draw/>
        <Brands/>
        <FurnitureDeal/>
        <NewArrival/>
        <Suggestion/>
        <Fields/>
        <LatestDeal/>
        <UpperFooter/>
    </div>
  )
}

export default Home