import React from 'react';
import { IconButton } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function LatestDeal() {
  return (
    <div className='relative mb-6'>
      <div className='bg-white md:ml-3 md:mr-2 pb-6'>
        <div className='flex items-center justify-between px-2 py-2 text-sm md:text-md font-bold ml-4 md:ml-0'>
          <span>Best Deals on Appliances</span>
          <IconButton className='!bg-sky-600 hidden md:flex'>
            <ArrowForwardIosIcon className='!text-white !text-sm'/>
          </IconButton>
        </div>

        <div className='md:flex overflow-x-auto space-x-3 px-2 xs:grid-cols-2'>
          {[
            {
              src: "https://rukminim2.flixcart.com/image/612/612/xif0q/water-purifier/c/u/m/wave-plus-pureit-original-imahymzdrjemzwsz.jpeg?q=70",
              label: 'Pureit by HUL Wave Plus',
              price: 'From ₹7,499'
            },
            {
              src: "https://rukminim2.flixcart.com/image/612/612/ksez24w0/iron/b/8/e/majesty-dx-6-bajaj-original-imag5zqbxnpua52a.jpeg?q=70",
              label: 'Orient Electric Fabripress',
              price: 'From ₹999'
            },
            {
              src: "https://rukminim2.flixcart.com/image/612/612/xif0q/chimney/8/o/b/-original-imagzfdzjzave9qk.jpeg?q=70",
              label: 'Crompton CHD-ISC90BFE',
              price: 'From ₹9,249'
            },
            {
              src: "https://rukminim2.flixcart.com/image/612/612/xif0q/mixer-grinder-juicer/z/t/d/-original-imah22bpezan9zhh.jpeg?q=70",
              label: 'LongWay Super Dix',
              price: 'From ₹1,999'
            },
            {
              src: "https://rukminim2.flixcart.com/image/612/612/xif0q/remote-controller/f/z/d/remote-compatible-with-one-plus-smart-android-led-tv-without-original-imah3fxrcsg3hpds.jpeg?q=70",
              label: 'Realme Remote',
              price: 'From ₹499'
            },
            {
              src: "https://rukminim2.flixcart.com/image/612/612/xif0q/iron/s/o/i/handheld-garment-steamer-xiaomi-original-imahy9nmfm2qtc47.jpeg?q=70",
              label: 'Xiaomi Hair Dryer',
              price: 'From ₹2,999'
            },
            {
              src: "https://rukminim2.flixcart.com/image/612/612/xif0q/kitchen-knife/p/m/u/3-f524-printed-knife-set-of-3-7-28-yelona-original-imags2644ucgfrkf.jpeg?q=70",
              label: 'Stainless Steel Knife',
              price: 'From ₹999'
            }
          ].map((item, index) => (
            <div key={index}
              className={`md:border border-gray-200 rounded-md p-2 flex flex-row md:flex-col items-center lg:grid ${
                index === 0 ? 'pl-4' : '' // Add padding to the first item
              }`}>
              <img src={item.src} alt={item.label} className='w-20 h-20 md:w-28 md:h-16 lg:w-36 lg:h-36 object-contain'/>
              
              <div className='flex flex-1 justify-between items-center ml-4 md:hidden'>
                <div>
                  <span className='block text-[14px] font-bold'>Best Selling {item.label}</span>
                  <span className='text-slate-400 text-[12px]'>{item.price}</span>
                </div>
                <ArrowForwardIosIcon className='!text-xs mt-1 ml-1' />
              </div>

              <div className='hidden md:grid mt-2 text-center'>
                <span className='block text-[16px]'>{item.label}</span>
                <span className='font-bold text-sm'>{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LatestDeal;
