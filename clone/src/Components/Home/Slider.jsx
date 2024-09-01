import React from 'react'
import { IconButton } from '@mui/material';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

function Sliders() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <div className='!relative mb-2 mr-3 ml-3'>
       <IconButton className=' !absolute top-[30%] left-0 !bg-white !rounded-none !rounded-r-sm !h-20 !w-8 '>
            <ArrowBackIosNewIcon className='!text-sm'/>
        </IconButton>
        <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/38b8bbb61d7cfb5d.jpeg?q=20" alt='Slider' className='!object-cover w-full'/>
                <IconButton className='!absolute top-[30%] right-0 !bg-white !rounded-none !rounded-l-sm !h-20 !w-8 '>
            <ArrowForwardIosIcon className='!text-sm'/>
        </IconButton>
    </div>
  )
}

export default Sliders