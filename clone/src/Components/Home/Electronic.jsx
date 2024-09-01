import React from 'react';
import { IconButton } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function FurnitureDeal() {
  return (
    <div className='relative mb-6'>
      <div className='bg-white md:ml-3 mr:mr-2 pb-6'>
        <div className='flex items-center justify-between px-2 py-2 text-sm md:text-md font-bold ml-3 md:ml-0'>
          <span>Best Deals on Furniture</span>
          <IconButton className='!bg-sky-600 hidden md:flex'>
            <ArrowForwardIosIcon className='!text-white !text-xs md:!text-sm'/>
          </IconButton>
        </div>

        <div className='md:flex overflow-x-auto space-x-3 md:px-2 xs:grid-cols-2'>
          {[
            {
              src: "https://rukminim2.flixcart.com/image/612/612/xif0q/wardrobe-closet/8/f/m/no-46-140-particle-board-90-mustang-4-door-wardrobe-with-2-original-imahyg6yqmssnm3r.jpeg?q=70",
              label: 'Wardrobe',
              price: 'From ₹6,999'
            },
            {
              src: "https://rukminim2.flixcart.com/image/612/612/xif0q/tv-entertainment-unit/j/o/i/25-120-particle-board-18-ak-laura-wnt-wt-anikaa-112-43-walnut-original-imahfmbfguzhjrwm.jpeg?q=70",
              label: 'Engineered TV Stand',
              price: 'From ₹20,999'
            },
            {
              src: "https://rukminim2.flixcart.com/image/612/612/xif0q/collapsible-wardrobe/4/v/1/30-carbon-steel-60-1-4-6-layer-black-w-r-002-brodio-black-110-original-imahfhdeemyf2y3f.jpeg?q=70",
              label: 'Portable Wardrobe',
              price: 'From ₹9,249'
            },
            {
              src: "https://rukminim2.flixcart.com/image/612/612/xif0q/bed/n/y/u/-original-imagpprfwc4gvmcg.jpeg?q=70",
              label: 'Double Sized Bed',
              price: 'From ₹9,999'
            },
            {
              src: "https://rukminim2.flixcart.com/image/612/612/ko382a80/shoe-rack/d/v/v/shoe-stand-chappal-stand-konlineshop-black-original-imag2m9fptgp6hym.jpeg?q=70",
              label: 'Shoes Rack',
              price: 'From ₹1,999'
            },
            {
              src: "https://rukminim2.flixcart.com/image/612/612/xif0q/kid-table/m/g/d/5-mdf-us-biding-black-coated-khodal-arth-black-10-original-imahf66gc4gatvvu.jpeg?q=70",
              label: 'Foldable Table',
              price: 'From ₹699'
            }
          ].map((item, index) => (
            <div key={index}
              className={`md:border border-gray-200 rounded-md p-2 flex flex-row md:flex-col items-center lg:grid ${
                index === 0 ? 'pl-5' : '' // Add padding to the first item
              }`}>
              <img src={item.src} alt={item.label} className='w-20 h-20 md:w-28 md:h-16 lg:w-36 lg:h-36 object-contain'/>
              
              <div className='flex flex-1 justify-between items-center ml-3 md:hidden'>
                <div>
                  <span className='block text-[14px] font-bold'>Best Selling {item.label}</span>
                  <span className='text-slate-400 text-[12px]'>{item.price}</span>
                </div>
                <ArrowForwardIosIcon className='!text-xs mt-1 ml-1' />
              </div>

              <div className='hidden md:grid mt-2 text-center'>
                <span className='block text-[16px]'>{item.label}</span>
                <span className='font-bold text-xs'>{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FurnitureDeal;
