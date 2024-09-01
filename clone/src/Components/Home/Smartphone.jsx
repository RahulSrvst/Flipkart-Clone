import React from 'react';
import { IconButton } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


function Deals() {
  return (
    <div className='relative mb-4'>
      <div className='bg-white ml-1 md:ml-3 xl:mr-48 pb-6'>
        <div className='flex items-center justify-between px-2 py-2 text-sm md:text-md font-bold ml-3 md:ml-2.5'>
          <span>Best Deals on Smartphones</span>
          <IconButton className='!bg-sky-60 hidden md:flex '>
            <ArrowForwardIosIcon className='!text-white !text-sm '/>
          </IconButton>
        </div>

        <div className='md:flex overflow-x-auto space-x-3 pr-2 xs:grid-cols-2'>
  {/* Item 1 */}
  <div className='relative md:border border-gray-200 rounded-md ml-2 p-2 flex flex-row justify-between md:flex-col items-center lg:grid'>
    <img
      src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/y/9/0/-original-imahyuhfg2z4fvyh.jpeg?q=70"
      alt='Realme P1 5g'
      className='w-20 h-20 md:w-28 md:h-16 lg:w-36 lg:h-36 object-contain'
    />
    <div className='flex flex-1 justify-between items-center ml-3 md:hidden'>
      <div>
        <span className='block text-xs font-bold'>Best Selling Realme 5G Mobiles</span>
        <span className='text-slate-400 text-[14px]'>From ₹14,999</span>
      </div>
      <ArrowForwardIosIcon className='!text-xs' />
    </div>
    <div className='md:grid hidden mt-2 text-center md:ml-4'>
      <span className='block text-[16px]'>Realme P1 5g</span>
      <span className='font-bold text-xs'>From ₹14,999</span>
    </div>
  </div>

  {/* Item 2 */}
  <div className='relative md:border border-gray-200 rounded-md p-2 flex flex-row justify-between md:flex-col items-center lg:grid'>
    <img
      src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/5/y/8/-original-imagtt4mhqrzjs9r.jpeg?q=70"
      alt='Vivo T2 Pro 5g'
      className='w-20 h-20 md:w-28 md:h-16 lg:w-36 lg:h-36 object-contain'
    />
    <div className='flex flex-1 justify-between items-center ml-3 md:hidden'>
      <div>
        <span className='block text-xs font-bold'>Best Selling Vivo Mobiles</span>
        <span className='text-slate-400 text-[14px]'>From ₹12,999</span>
      </div>
      <ArrowForwardIosIcon className='!text-xs' />
    </div>
    <div className='md:grid hidden mt-2 text-center md:ml-4'>
      <span className='block text-[16px]'>Vivo T2 Pro 5g</span>
      <span className='font-bold text-xs'>From ₹20,999</span>
    </div>
  </div>

  {/* Item 3 */}
  <div className='relative md:border border-gray-200 rounded-md p-2 flex flex-row justify-between md:flex-col items-center lg:grid'>
    <img
      src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/d/h/q/m6-pro-5g-mzb0eprin-poco-original-imags3e7vewsafst.jpeg?q=70"
      alt='Poco M6 Pro 5g'
      className='w-20 h-20 md:w-28 md:h-16 lg:w-36 lg:h-36 object-contain'
    />
    <div className='flex flex-1 justify-between items-center ml-3 md:hidden'>
      <div>
        <span className='block text-xs font-bold'>Best Selling Poco Mobiles</span>
        <span className='text-slate-400 text-[14px]'>From ₹17,999</span>
      </div>
      <ArrowForwardIosIcon className='!text-xs' />
    </div>
    <div className='md:grid hidden mt-2 text-center md:ml-4'>
      <span className='block text-[16px]'>Poco M6 Pro 5g</span>
      <span className='font-bold text-xs'>From ₹9,249</span>
    </div>
  </div>

  {/* Item 4 */}
  <div className='relative md:border border-gray-200 rounded-md p-2 flex flex-row justify-between md:flex-col items-center lg:grid'>
    <img
      src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/i/k/l/edge-50-fusion-pb300001in-motorola-original-imahywzpfd2jh9ep.jpeg?q=70"
      alt='Moto Edge 50 Fusion'
      className='w-20 h-20 md:w-28 md:h-16 lg:w-36 lg:h-36 object-contain'
    />
    <div className='flex flex-1 justify-between items-center ml-3 md:hidden'>
      <div>
        <span className='block text-xs font-bold'>Best Selling Motorola Mobiles</span>
        <span className='text-slate-400 text-[14px]'>From ₹35,999</span>
      </div>
      <ArrowForwardIosIcon className='!text-xs' />
    </div>
    <div className='md:grid hidden mt-2 text-center md:ml-4'>
      <span className='block text-[16px]'>Moto Edge 50 Fusion</span>
      <span className='font-bold text-xs'>From ₹9,999</span>
    </div>
  </div>

  {/* Item 5 */}
  <div className='relative md:border border-gray-200 rounded-md p-2 flex flex-row justify-between md:flex-col items-center lg:grid'>
    <img
      src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/u/v/h/-original-imagxaqtzmqgtfen.jpeg?q=70"
      alt='Redmi 12 5G'
      className='w-20 h-20 md:w-28 md:h-16 lg:w-36 lg:h-36 object-contain'
    />
    <div className='flex flex-1 justify-between items-center ml-3 md:hidden'>
      <div>
        <span className='block text-xs font-bold'>Best Selling Redmi Mobiles</span>
        <span className='text-slate-400 text-[14px]'>From ₹20,999</span>
      </div>
      <ArrowForwardIosIcon className='!text-xs' />
    </div>
    <div className='md:grid hidden mt-2 text-center md:ml-4'>
      <span className='block text-[16px]'>Redmi 12 5G</span>
      <span className='font-bold text-xs'>From ₹12,999</span>
    </div>
  </div>

  {/* Item 6 */}
  <div className='relative md:border border-gray-200 rounded-md p-2 flex flex-row justify-between md:flex-col items-center lg:grid'>
    <img
      src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/4/y/b/-original-imahyzygycuyg3mq.jpeg?q=70"
      alt='Realme P1 Pro'
      className='w-20 h-20 md:w-28 md:h-16 lg:w-36 lg:h-36 object-contain'
    />
    <div className='flex flex-1 justify-between items-center ml-3 md:hidden'>
      <div>
        <span className='block text-xs font-bold'>Best Realme Pro Mobiles</span>
        <span className='text-slate-400 text-[14px]'>From ₹20,999</span>
      </div>
      <ArrowForwardIosIcon className='!text-xs' />
    </div>
    <div className='md:grid hidden mt-2 text-center md:ml-4'>
      <span className='block text-[16px]'>Realme P1 Pro</span>
      <span className='font-bold text-xs'>From ₹20,999</span>
    </div>
  </div>
</div>



      </div>

      <div className='absolute h-full top-0 right-0 hidden  xl:!flex'>
        <img src="https://rukminim2.flixcart.com/fk-p-flap/530/810/image/bb7ff615a42ee3b4.jpeg?q=20" alt='Offer' className=' xl:w-[15.1vw] xl:h-[100%]'/>
      </div>
    </div>
  );
}

export default Deals;
