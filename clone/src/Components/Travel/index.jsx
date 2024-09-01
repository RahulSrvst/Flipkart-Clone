import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

function Travel() {
  return (
    <div className=' bg-slate-200'>

<div className='relative '>
      <div className='relative'>
        <img src='https://www.adventureswithchildren.com/wp-content/uploads/2017/11/IMG-20171111-WA0034.jpg' alt='Error' className='w-[97.5vw] h-[60vh] m-2 object-top'>
        </img>
        <span className='absolute top-6 left-[650px] text-3xl text-white'>Get. Set. Travel.</span>
      </div>


      <div className=''>
        <div className=' absolute bottom-3 left-20 right-20 box border-2 rounded-md bg-white p-4'>
          <div>
            <input type='radio' ></input><span className='text-[14px] ml-2 mr-4'>One Way</span>
            <input type='radio' ></input><span className='text-[14px] ml-2'>Road Trip</span>
          </div>
          <div className='flex gap-3 mt-5'>
            <input type='text' placeholder='From' className='border border-slate-400 placeholder:text-[14px] pl-2' ></input>
            <input type='text' placeholder='To' className='border border-slate-400 placeholder:text-[14px] pl-2' ></input>
            
            <div className='relative'>
            <input type='text' placeholder='24 Aug, Sat' className='border border-slate-400 w-[10vw]  placeholder:text-[14px] p-2 h-auto placeholder:text-black'></input>
            <span className='absolute top-1 left-1.5 text-[10px] text-slate-400'>Depart On</span>
            </div>
            <input type='text' placeholder='Return On' className='border border-slate-400 w-[10vw] placeholder:text-[14px] pl-2'></input>
            <div className='relative'>
            <input type='text' placeholder='1st Traveller | Economy' className='border border-slate-400 placeholder:text-[14px] p-2 h-auto placeholder:text-black'></input>
            <span className='absolute top-1 left-1.5 text-[10px] text-slate-400'>Travellers|Class</span>
            </div>
            <div className='relative'>
            <button className=' bg-blue-600 text-[12px] text-white font-bold py-3 px-8'>SEARCH</button>
            <SearchIcon className='absolute top-3 left-3 !text-[20px] text-white'/>
            </div>
            
          </div>
          <div>
            <span className='text-[12px] mr-20 text-slate-600'>Any worldwide city or airport</span>
            <span className='text-[12px] text-slate-600'>Any worldwide city or airport</span>
          </div>
        </div>
      </div>
    </div>

    <div>
      <img src='https://rukminim2.flixcart.com/fk-p-flap/2000/2000/image/726168855d099041.jpg?q=50' alt='Eror' className='w-[97.5vw] m-2'></img>
    </div>

    <div className='m-2'>
      <img src='https://rukminim2.flixcart.com/fk-p-flap/2000/2000/image/314d78512857f86d.png?q=50' alt='Error'></img>
    </div>


    <div className='flex gap-4 m-2 bg-white'>
      <img src='https://rukminim2.flixcart.com/fk-p-flap/486/486/image/f5e49d1f18e0b545.jpg?q=50' alt='Error'></img>
      <img src='https://rukminim2.flixcart.com/fk-p-flap/486/486/image/f5e49d1f18e0b545.jpg?q=50' alt='Error'></img>
      <img src='https://rukminim2.flixcart.com/fk-p-flap/486/486/image/f5e49d1f18e0b545.jpg?q=50' alt='Error'></img>
    </div>

    <div className='ml-2 mr-2'>
      <img src='https://rukminim2.flixcart.com/fk-p-flap/2000/2000/image/e663b3a676e18a40.png?q=50' alt='Error'></img>
      <img src='https://rukminim2.flixcart.com/fk-p-flap/2000/2000/image/9c3ebd56f796128e.jpg?q=50' alt='Error' className='w-full'></img>
      <img src='https://rukminim2.flixcart.com/fk-p-flap/2000/2000/image/10256a9f3d5d1c9a.png?q=50' alt='Error'></img>
    </div>

    <div className='p-3 pb-8'>
      <span className='text-[12px] text-slate-500 block'>Thanks to online portals, you don’t have to depend on travel agents or anyone else to make flight bookings. You can use your laptop or mobile phone to go through all the available flights, hotels, resorts, and more to make all your flight ticket bookings. Most of these portals offer many festive flight offers that will help you book international and domestic flights at great prices. This way, you can stay within your budget. Once you take care of your travel arrangements, you can also look through all the accommodation options available. Make sure that you go through all the reviews of the various properties listed online so that you can have a pleasant stay. Without doing enough research, you may end up paying a lot of money for a place that doesn’t suit your needs. So, while looking at the best flight offers online, you can also go through numerous blogs and articles about the best places to stay at your destination. This will help you find romantic, adventurous, or chilled-out properties. Once all your arrangements are done, you can plan your itinerary, pack your bags, and countdown the days until your much-awaited getaway. The information you are reading has been last updated on 23-Aug-24.</span>
    </div>

    </div>


  )
}

export default Travel