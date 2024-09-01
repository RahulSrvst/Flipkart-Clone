import React from 'react';
import { IconButton } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function NewArrival() {
  return (
    <div className='relative mb-4'>
      <div className='bg-white md:ml-3 md:mr-2 pb-6'>
        <div className='flex items-center justify-between px-2 py-2 text-sm text-md font-bold ml-3 md:ml-0'>
          <span>New Arrival Collections</span>
          <IconButton className='!bg-sky-600 flex'>
            <ArrowForwardIosIcon className='!text-white !text-xs md:!text-sm' />
          </IconButton>
        </div>

        <div className='md:flex overflow-x-auto space-x-3 px-2 xs:grid-cols-2'>
          {[
            {
              src: "https://rukminim2.flixcart.com/image/612/612/l2hwwi80/salwar-kurta-dupatta/s/y/2/xxl-pinkbandej-mini-collections-original-imagdthyumym4f3s.jpeg?q=70",
              label: 'Printed Kurti',
              price: 'From ₹2,999'
            },
            {
              src: "https://rukminim2.flixcart.com/image/612/612/xif0q/jacket/m/i/t/xl-1-no-rockstar-blue-hunza-original-imagzufz76jdukyd.jpeg?q=70",
              label: 'Blue Jacket',
              price: 'From ₹4,999'
            },
            {
              src: "https://rukminim2.flixcart.com/image/612/612/xif0q/kid-costume-wear/e/w/p/84-7-8-years-imc1474-itsmycostume-96-original-imagpxerzfhpzytj.jpeg?q=70",
              label: 'Krishna Dress Set',
              price: 'From ₹1,249'
            },
            {
              src: "https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/g/6/w/s-omof-mahadev-collections-original-imagmcmyf5sfw8fa.jpeg?q=70",
              label: 'Printed Kurta',
              price: 'From ₹999'
            },
            {
              src: "https://rukminim2.flixcart.com/image/612/612/xif0q/jean/t/f/p/30-m-a2-39-blk-flare-jeans-maniere-creations-original-imagtbzymzgayqvn.jpeg?q=70",
              label: 'Blue Jeans',
              price: 'From ₹899'
            },
            {
              src: "https://rukminim2.flixcart.com/image/612/612/xif0q/kid-costume-wear/z/j/5/6-7-years-1400-spm-02-kfcollections-original-imagzywzcrsxszyr.jpeg?q=70",
              label: 'Spider Man Suit',
              price: 'From ₹3,999'
            },
            {
              src: "https://rukminim2.flixcart.com/image/612/612/xif0q/dress/s/j/x/xl-jacket-red-wht-kansai-dresss-jkp-collections-original-imagtadzmzypxcmh.jpeg?q=70",
              label: 'Shirt & Frock',
              price: 'From ₹1,999'
            },
            {
              src: "https://rukminim2.flixcart.com/image/612/612/xif0q/anklet/e/1/i/na-na-2-castingfree-drama-queen-fashion-original-imagwgqef4ysj5wf.jpeg?q=70",
              label: '30 Alloy Anklet',
              price: 'From ₹1,999'
            }
          ].map((item, index) => (
            <div key={index}
              className={`md:border border-gray-200 rounded-md p-2 flex flex-row md:flex-col items-center lg:grid ${
                index === 0 ? 'pl-4' : '' // Add padding to the first item
              }`}>
              <img
                src={item.src}
                alt={item.label}
                className='w-20 h-20 md:w-28 md:h-16 lg:w-36 lg:h-36 object-contain'
              />
              
              <div className='flex flex-1 justify-between items-center ml-3 md:hidden'>
                <div>
                  <span className='block text-[16px] font-bold'>{item.label}</span>
                  <span className='text-slate-400 text-xs'>{item.price}</span>
                </div>
                <ArrowForwardIosIcon className='!text-xs mt-1 ml-1' />
              </div>

              <div className='hidden md:grid mt-2 text-center'>
                <span className='block !text-[14px]'>{item.label}</span>
                <span className='font-bold !text-[12px]'>{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewArrival;
