import React,{useState} from 'react'

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import StarIcon from '@mui/icons-material/Star';
import Collapse from "@mui/material/Collapse"; 
import CardHeader from "@mui/material/CardHeader"; 
import Container from "@mui/material/Container"; 
import CardContent from "@mui/material/CardContent"; 
import { Card } from '@mui/material';
import KeyboardArrowDownIcon from  
    "@mui/icons-material/KeyboardArrowDown"; 
import KeyboardArrowUpIcon from  
    "@mui/icons-material/KeyboardArrowUp"; 
    import IconButton from "@mui/material/IconButton"; 



function Mobile() {
  const [open, setOpen] = useState(false); 
    function valuetext(value) {
        return `${value}`;
      }
      const minDistance = 10;

      const [value1, setValue1] = React.useState([20, 37]);

  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };

  const [value2, setValue2] = React.useState([20, 37]);

  const handleChange2 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 100 - minDistance);
        setValue2([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setValue2([clamped - minDistance, clamped]);
      }
    } else {
      setValue2(newValue);
    }
  };



  return (
    <div className='!bg-slate-50 p-3'>
      <div className='bg-slate-50 pb-3'>
      <span className='text-md block font-bold'>Mobile Phone</span>
      <span className='text-[12px] text-slate-400 block'>Mobile phones are no more merely a part of our lives. Whether it's to stay connected with friends and family or to keep abreast of important developments around the world, mobiles are no longer for sending a text or making a call. From budget to state-of-the-art smartphones; indigenous names to global big-wigs - a whole universe of mobiles await you on Flipkart. Whether you’re looking for waterdrop notch screens, a high screen to body ratio, AI-powered sensational cameras, high storage capacity, blazing quick processing engines or reflective glass designs, rest assured you won’t have to venture anywhere else for your smartphone needs. The information you are reading has been last updated on 16-Aug-24. </span>
      <span className='text-blue-400 text-[12px] block'>Phone 15 | iPhone 15 Plus | iPhone 15 Pro | iPhone 15 Pro Max | Vivo x 100 | OPPO Reno 11 | Xiaomi 14 CIVI | Infinix Note 40 5G | Pixel 7a | Moto Edge 40 | POCO C55 | Samsung Galaxy S24 5G | Motorola g04s</span>

      <div className='mb-3'>
        <img src='https://images.freekaamaal.com/store_desc_images/1537253332.jpg' alt='Error' className='w-full'></img>
      </div>
    </div>

    <div className='grid grid-cols-[250px_auto] gap-0 bg-slate-50'>
            <div className='pr-5'>
            <div className='bg-white'>
            <div className='text-[20px] font-bold !border-b-2 p-3'>
                <span>Filters</span>
            </div>
            <div className='!border-b-2 p-3'>
            <span className='text-[16px] block font-bold ml-0 m-1'>CATEGORIES</span>
            <span className='text-[16px] block text-slate-400 '>Mobiles & Accessories</span>
            <span className='text-[16px] block '>Mobile</span>
            </div>

            <div>
                <span className='text-[16px] mb-6 m-3 font-bold'>PRICE</span>
                <Box sx={{ width: 200 }} className='ml-2'>
      <Slider
        getAriaLabel={() => 'Minimum distance'}
        value={value1}
        onChange={handleChange1}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        disableSwap
      />
    </Box>
        <span className='ml-3 mr-6 !text-3xl text-slate-400'>.</span><span className='mr-8 !text-3xl text-slate-400'>.</span><span className='mr-8 !text-3xl text-slate-400'>.</span><span className='mr-8 !text-3xl text-slate-400'>.</span><span className=' !text-3xl text-slate-400'>.</span>

            </div>

            <div className='!border-b-2 pb-2'>
            <select className='box border text-[16px] ml-3'>
    <option value="0">Min</option>
    <option value="1">10000</option>
    <option value="2">15000</option>
    <option value="3">20000</option>
    <option value="4">30000</option>
  </select>
  <span className='ml-2.5 mr-2.5 text-[16px]'>to</span>
  <select className='box border text-[16px]'>
    <option value="0">$30000+</option>
    <option value="1">10000</option>
    <option value="2">15000</option>
    <option value="3">20000</option>
    <option value="4">30000</option>
  </select>
            </div>

            <div>
              <Accordion className='bg-white'>
                <AccordionSummary className='text-[14px] font-bold'>BRANDS  <ExpandMoreIcon className='!text-sm absolute top-3 right-2'/></AccordionSummary>
                <AccordionDetails>
                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >SAMSUNG</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span className='text-sm'  >Vivo</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >Oppo</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >Realme</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >POCO</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >MOTOROLA</span>
                </div>

                <span className='text-blue-500 text-[13px] font-bold'>170 More</span>
                </AccordionDetails>
              </Accordion>

              <div className='flex m-2'>
                  <input type='checkbox'/><img src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png' alt='Error' className='h-[28px] w-[84px] pl-3 '></img>
                </div>

                <div>
                  <Accordion>
                    <AccordionSummary className='text-[14px] font-bold'>
                    CUSTOMER RATING <ExpandMoreIcon className='!text-sm absolute top-3 right-2'/>
                    </AccordionSummary>

                    <AccordionDetails>
                    <div className='block'>
                      <input type='checkbox' className='mr-2'/><span  className='text-sm' >4* & above</span>
                    </div>
                    <div className='block'>
                      <input type='checkbox' className='mr-2'/><span  className='text-sm' >3* & above</span>
                    </div>
                    </AccordionDetails>
                  </Accordion>
                </div>

                <div>
                <Accordion>
  <AccordionSummary className='flex justify-between items-center text-[14px] font-bold'>
    <span>GST INVOICE</span>
    <ExpandMoreIcon className='!text-sm absolute top-3 right-2' />
  </AccordionSummary>
  <AccordionDetails>
    <div className='flex items-center'>
      <input type='checkbox' className='mr-2' />
      <span className='text-sm'>GST Invoice Available</span>
    </div>
  </AccordionDetails>
</Accordion>


                </div>


                <div className='block'>
                      <input type='checkbox' className='mr-2'/><span  className='text-sm' >Delivery 1 day Available</span>
                    </div>


                <div>
                <Accordion>
                <AccordionSummary className='text-[14px] font-bold'>Mobiles <ExpandMoreIcon className='!text-sm absolute top-3 right-2'/></AccordionSummary>
                <AccordionDetails>
                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >SAMSUNG</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span className='text-sm'  >Vivo</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >Oppo</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >Realme</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >POCO</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >MOTOROLA</span>
                </div>

                <span className='text-blue-500 text-[14px] font-bold'>170 More</span>
                </AccordionDetails>
              </Accordion>

                </div>

                <div>
                <Accordion>
                <AccordionSummary className='text-[14px] font-bold'>RAM<ExpandMoreIcon className='!text-sm absolute top-3 right-2'/></AccordionSummary>
                <AccordionDetails>
                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >SAMSUNG</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span className='text-sm'  >Vivo</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >Oppo</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >Realme</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >POCO</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >MOTOROLA</span>
                </div>

                <span className='text-blue-500 text-[13px] font-bold'>170 More</span>
                </AccordionDetails>
              </Accordion>

                </div>

                <div>
                <Accordion>
                <AccordionSummary className='text-[14px] font-bold'>INTERNAL STORAGE  <ExpandMoreIcon className='!text-sm absolute top-3 right-2'/></AccordionSummary>
                <AccordionDetails>
                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >SAMSUNG</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span className='text-sm'  >Vivo</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >Oppo</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >Realme</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >POCO</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >MOTOROLA</span>
                </div>

                <span className='text-blue-500 text-[13px] font-bold'>170 More</span>
                </AccordionDetails>
              </Accordion>

                </div>

                <div>
                <Accordion>
                <AccordionSummary className='text-[14px] font-bold'>BATTERY CAPACITY  <ExpandMoreIcon className='!text-sm absolute top-3 right-2'/></AccordionSummary>
                <AccordionDetails>
                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >SAMSUNG</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span className='text-sm'  >Vivo</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >Oppo</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >Realme</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >POCO</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >MOTOROLA</span>
                </div>

                <span className='text-blue-500 text-[13px] font-bold'>170 More</span>
                </AccordionDetails>
              </Accordion>

                </div>

                <div>
                <Accordion>
                <AccordionSummary className='text-[14px] font-bold !rounded-none'>SCREEN SIZE  <ExpandMoreIcon className='!text-sm absolute top-3 right-2'/></AccordionSummary>
                <AccordionDetails>
                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >SAMSUNG</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span className='text-sm'  >Vivo</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >Oppo</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >Realme</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >POCO</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >MOTOROLA</span>
                </div>

                <span className='text-blue-500 text-[13px] font-bold'>170 More</span>
                </AccordionDetails>
              </Accordion>

                </div>


                <div>
                <Accordion className='!rounded-none'>
                <AccordionSummary className='text-[14px] font-bold'>PRIMARY CAMERA  <ExpandMoreIcon className='!text-sm absolute top-3 right-2'/></AccordionSummary>
                <AccordionDetails>
                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >SAMSUNG</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span className='text-sm'  >Vivo</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >Oppo</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >Realme</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >POCO</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >MOTOROLA</span>
                </div>

                <span className='text-blue-500 text-[13px] font-bold'>170 More</span>
                </AccordionDetails>
              </Accordion>

                </div>


                <div>
                <Accordion className='!rounded-none'>
                <AccordionSummary className='text-[14px] font-bold'>SECONDARY CAMERA  <ExpandMoreIcon className='!text-sm absolute top-3 right-2'/></AccordionSummary>
                <AccordionDetails>
                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >SAMSUNG</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span className='text-sm'  >Vivo</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >Oppo</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >Realme</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >POCO</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >MOTOROLA</span>
                </div>

                <span className='text-blue-500 text-[13px] font-bold'>170 More</span>
                </AccordionDetails>
              </Accordion>

                </div>

                <div>
                <Accordion className='!rounded-none'>
                <AccordionSummary className='text-[14px] font-bold'>PROCESSOR BRAND  <ExpandMoreIcon className='!text-sm absolute top-3 right-2'/></AccordionSummary>
                <AccordionDetails>
                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >SAMSUNG</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span className='text-sm'  >Vivo</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >Oppo</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >Realme</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >POCO</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >MOTOROLA</span>
                </div>

                <span className='text-blue-500 text-[13px] font-bold'>170 More</span>
                </AccordionDetails>
              </Accordion>

                </div>


                <div>
                <Accordion>
                <AccordionSummary className='text-[14px] font-bold'>STABILITY  <ExpandMoreIcon className='!text-sm absolute top-3 right-2'/></AccordionSummary>
                <AccordionDetails>
                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >SAMSUNG</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span className='text-sm'  >Vivo</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >Oppo</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >Realme</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >POCO</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >MOTOROLA</span>
                </div>

                <span className='text-blue-500 text-[13px] font-bold'>170 More</span>
                </AccordionDetails>
              </Accordion>

                </div>

                <div>
                <Accordion>
                <AccordionSummary className='text-[14px] font-bold'>RESOLUTION TYPE  <ExpandMoreIcon className='!text-sm absolute top-3 right-2'/></AccordionSummary>
                <AccordionDetails>
                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >SAMSUNG</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span className='text-sm'  >Vivo</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >Oppo</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >Realme</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >POCO</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >MOTOROLA</span>
                </div>

                <span className='text-blue-500 text-[13px] font-bold'>170 More</span>
                </AccordionDetails>
              </Accordion>

                </div>

                <div>
                <Accordion>
                <AccordionSummary className='text-[14px] font-bold'>RESOLUTION TYPE <ExpandMoreIcon className='!text-sm absolute top-3 right-2'/></AccordionSummary>
                <AccordionDetails>
                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >SAMSUNG</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span className='text-sm'  >Vivo</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >Oppo</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >Realme</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >POCO</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >MOTOROLA</span>
                </div>

                <span className='text-blue-500 text-[13px] font-bold'>170 More</span>
                </AccordionDetails>
              </Accordion>

                </div>

                <div>
                <Accordion>
                <AccordionSummary className='text-[14px] font-bold'>OPERATING SYSTEM <ExpandMoreIcon className='!text-sm absolute top-3 right-2'/></AccordionSummary>
                <AccordionDetails>
                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >SAMSUNG</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span className='text-sm'  >Vivo</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >Oppo</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >Realme</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >POCO</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >MOTOROLA</span>
                </div>

                <span className='text-blue-500 text-[13px] font-bold'>170 More</span>
                </AccordionDetails>
              </Accordion>

                </div>


                <div>
                <Accordion>
                <AccordionSummary className='text-[14px] font-bold'>NETWORK TYPE  <ExpandMoreIcon className='!text-sm absolute top-3 right-2'/></AccordionSummary>
                <AccordionDetails>
                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >SAMSUNG</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span className='text-sm'  >Vivo</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >Oppo</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >Realme</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >POCO</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >MOTOROLA</span>
                </div>

                <span className='text-blue-500 text-[13px] font-bold'>170 More</span>
                </AccordionDetails>
              </Accordion>

                </div>


                <div>
                <Accordion>
                <AccordionSummary className='text-[14px] font-bold'>SIM TYPE  <ExpandMoreIcon className='!text-sm absolute top-3 right-2'/></AccordionSummary>
                <AccordionDetails>
                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >SAMSUNG</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span className='text-sm'  >Vivo</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >Oppo</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >Realme</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >POCO</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >MOTOROLA</span>
                </div>

                <span className='text-blue-500 text-[13px] font-bold'>170 More</span>
                </AccordionDetails>
              </Accordion>

                </div>


                <div>
                <Accordion>
                <AccordionSummary className='text-[14px] font-bold'>OFFER <ExpandMoreIcon className='!text-sm absolute top-3 right-2'/></AccordionSummary>
                <AccordionDetails>
                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >SAMSUNG</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span className='text-sm'  >Vivo</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >Oppo</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >Realme</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >POCO</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >MOTOROLA</span>
                </div>

                <span className='text-blue-500 text-[13px] font-bold'>170 More</span>
                </AccordionDetails>
              </Accordion>

                </div>

                <div>
                <Accordion>
                <AccordionSummary className='text-[14px] font-bold'>FEATURE  <ExpandMoreIcon className='!text-sm absolute top-3 right-2'/></AccordionSummary>
                <AccordionDetails>
                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >SAMSUNG</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span className='text-sm'  >Vivo</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >Oppo</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >Realme</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >POCO</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >MOTOROLA</span>
                </div>

                <span className='text-blue-500 text-[13px] font-bold'>170 More</span>
                </AccordionDetails>
              </Accordion>

                </div>

                <div>
                <Accordion>
                <AccordionSummary className='text-[14px] font-bold'>TYPE  <ExpandMoreIcon className='!text-sm absolute top-3 right-2'/></AccordionSummary>
                <AccordionDetails>
                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >SAMSUNG</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span className='text-sm'  >Vivo</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >Oppo</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >Realme</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >POCO</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >MOTOROLA</span>
                </div>

                <span className='text-blue-500 text-[13px] font-bold'>170 More</span>
                </AccordionDetails>
              </Accordion>

                </div>


                <div>
                <Accordion>
                <AccordionSummary className='text-[14px] font-bold'> NUMBER OF CORE <ExpandMoreIcon className='!text-sm absolute top-3 right-2'/></AccordionSummary>
                <AccordionDetails>
                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >SAMSUNG</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span className='text-sm'  >Vivo</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >Oppo</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >Realme</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >POCO</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >MOTOROLA</span>
                </div>

                <span className='text-blue-500 text-[13px] font-bold'>170 More</span>
                </AccordionDetails>
              </Accordion>

                </div>


                <div>
                <Accordion>
                <AccordionSummary className='text-[14px] font-bold'>AVAILABILITY <ExpandMoreIcon className='!text-sm absolute top-3 right-2'/></AccordionSummary>
                <AccordionDetails>
                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >SAMSUNG</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span className='text-sm'  >Vivo</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >Oppo</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >Realme</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >POCO</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >MOTOROLA</span>
                </div>

                <span className='text-blue-500 text-[13px] font-bold'>170 More</span>
                </AccordionDetails>
              </Accordion>

                </div>


                <div>
                <Accordion>
                <AccordionSummary className='text-[14px] font-bold'>DISCOUNT <ExpandMoreIcon className='!text-sm absolute top-3 right-2'/></AccordionSummary>
                <AccordionDetails>
                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >SAMSUNG</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span className='text-sm'  >Vivo</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >Oppo</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >Realme</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >POCO</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >MOTOROLA</span>
                </div>

                <span className='text-blue-500 text-[13px] font-bold'>170 More</span>
                </AccordionDetails>
              </Accordion>

                </div>


                <div>
                <Accordion>
                <AccordionSummary className='text-[14px] font-bold'>OPERATING SYSTEM VERSION NAME<ExpandMoreIcon className='!text-sm absolute top-3 right-2'/></AccordionSummary>
                <AccordionDetails>
                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >SAMSUNG</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span className='text-sm'  >Vivo</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >Oppo</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >Realme</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >POCO</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >MOTOROLA</span>
                </div>

                <span className='text-blue-500 text-[13px] font-bold'>170 More</span>
                </AccordionDetails>
              </Accordion>

                </div>


                <div className='relative'>
                <Accordion>
                <AccordionSummary className='text-[14px] font-bold '>CLOCK SPEED<ExpandMoreIcon className='!text-sm absolute top-3 right-2'/></AccordionSummary>
                <AccordionDetails>
                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >SAMSUNG</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span className='text-sm'  >Vivo</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >Oppo</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >Realme</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >POCO</span>
                </div>

                <div className='block'>
                <input type='checkbox' className='mr-2'/><span  className='text-sm' >MOTOROLA</span>
                </div>

                <span className='text-blue-500 text-[13px] font-bold'>170 More</span>
                </AccordionDetails>
              </Accordion>

                </div>

                <div>
                <Card sx={{ 
                minWidth: 100, 
                border: "1px solid rgba(211,211,211,0.6)"
                
            }} className='!text-[14px] !font-bold'> 

                <div 
                    
                    className='p-2'
                    
                >Interview Prepration
                  <IconButton 
                            onClick={() => setOpen(!open)} 
                            aria-label="expand"
                            
                            className='!text-xs'
                        > 
                            {open ? <KeyboardArrowUpIcon className='!text-sm ml-6'/> 
                                : <KeyboardArrowDownIcon className='!text-sm ml-6'/>} 
                        </IconButton> 
                </div> 
                <div style={{  
                    backgroundColor: "rgba(211,211,211,0.4)" 
                }}> 
                    <Collapse in={open} timeout="auto"
                        unmountOnExit> 
                        <CardContent> 
                            <Container sx={{  
                                height: 400,  
                                lineHeight: 2  
                            }}> 
                                An interview-centric course  
                                designed to prepare you for 
                                the role of SDE for both 
                                product and service-based  
                                companies. A placement  
                                preparation pack built with
                                years of expertise. Learn  
                                Resume Building, C++, Java,  
                                DSA, CS Theory concepts, 
                                Aptitude, Reasoning, LLD,  
                                and much more! 
                            </Container> 
                        </CardContent> 
                    </Collapse> 
                </div> 
            </Card> 
        
                </div>

                
            </div>
            </div>
            </div>
        <div className='bg-white'>
            <img src='https://rukminim2.flixcart.com/fk-p-flap/2000/2000/image/bc3360cb940b24c6.jpg?q=50' alt='Error' className='w-full h-[40vh]'></img>
            <img src='https://rukminim2.flixcart.com/fk-p-flap/2000/2000/image/3ef5c13c7dfb84b2.jpg?q=50' alt='Error' className='w-full h-[40vh]' ></img>
            <img src='https://rukminim2.flixcart.com/fk-p-flap/2000/2000/image/58cba66e47fa4e12.jpg?q=50' alt='Error' className='w-full h-[40vh]' ></img>
            <img src='https://rukminim2.flixcart.com/fk-p-flap/2000/2000/image/11c986d3238f5703.jpg?q=50' alt='Error' className='w-full h-[40vh]' ></img>
            <img src='https://rukminim2.flixcart.com/fk-p-flap/2000/2000/image/a30f06ea08a22fc4.jpg?q=50' alt='Error' className='w-full h-[40vh]' ></img>
            <img src='https://rukminim2.flixcart.com/fk-p-flap/2000/2000/image/42840945609edd42.jpg?q=50' alt='Error' className='w-full h-[40vh]' ></img>
            <img src='https://rukminim2.flixcart.com/fk-p-flap/2000/2000/image/373713d7093142ca.jpg?q=50' alt='Error' className='w-full h-[40vh]' ></img>
            <img src='https://rukminim2.flixcart.com/fk-p-flap/2000/2000/image/c0bd5d2981a8176a.jpg?q=50' alt='Error' className='w-full h-[40vh] mb-2 object-cover' ></img>

            <div className='relative border-b-2 '>
            <div className=' border-b-2 pb-2 '>
            <span className='  text-xl font-bold p-3'>Motorola smartphones</span>
            <Button variant="contained" className='absolute top-0 left-[810px] text-sm'>VIEW ALL</Button>
            </div>
          <div className='flex gap-1 '>
            <div className='p-4'>
            <img src='https://rukminim2.flixcart.com/image/2000/2000/xif0q/mobile/o/c/6/edge-50-pb2w0000in-motorola-original-imah3anbj72hbtfz.jpeg?q=70' alt='Error' className='w-[20vw] h-[20vh]'></img>
            <div className='mt-2 text-center text-xs'>
            <span className='block'>Motorola G85 5G</span>
            <div className=''>
              <span className=' text-white bg-green-600 px-1'>4.4 <StarIcon className='!text-[14px] text-white bg-green-600'
              /> </span><span className='pl-1'> (17,439)</span>
              </div>
              <span className='font-bold '>₹14,999</span><span className='line-through text-[14px] pl-1 pr-1'>₹20,999</span><span className='text-green-600 font-bold text-[12px]'>14% off</span>
              </div>
            </div>



            <div className='p-4'>
            <img src='https://m.media-amazon.com/images/I/71XZP2Hm+5L._AC_UY327_FMwebp_QL65_.jpg' alt='Error' className='w-[20vw] h-[20vh]'></img>
            <div className='mt-2 text-center text-xs'>
            <span className='block'>Motorola G85 5G</span>
            <div className=''>
              <span className=' text-white bg-green-600 px-1'>4.4 <StarIcon className='!text-[14px] text-white bg-green-600'
              /> </span><span className='pl-1'> (17,439)</span>
              </div>
              <span className='font-bold'>₹12,999</span><span className='line-through  pl-1 pr-1'>₹20,999</span><span className='text-green-600 font-bold text-[12px]'>14% off</span>
              </div>
            </div>


            <div className='p-4'>
            <img src='https://rukminim2.flixcart.com/image/2000/2000/xif0q/mobile/z/q/f/-original-imah2fjd75hkcynr.jpeg?q=70' alt='Error' className='w-[20vw] h-[20vh]'></img>
            <div className='mt-2 text-center text-xs'>
            <span className='block'>Motorola G85 5G</span>
            <div className=''>
              <span className=' text-white bg-green-600 px-1'>4.4 <StarIcon className='!text-[14px] text-white bg-green-600'
              /> </span><span className='pl-1'> (17,439)</span>
              </div>
              <span className='font-bold'>₹17,999</span><span className='line-through  pl-1 pr-1'>₹20,999</span><span className='text-green-600 font-bold text-[12px]'>14% off</span>
              </div>
            </div>


            <div className='p-4'>
            <img src='https://rukminim2.flixcart.com/image/2000/2000/xif0q/mobile/z/k/4/g04s-pb360002in-motorola-original-imahfc48wgbttfkk.jpeg?q=70' alt='Error' className='w-[20vw] h-[20vh]'></img>
            <div className='mt-2 text-center text-xs'>
            <span className='block'>Motorola G85 5G</span>
            <div className=''>
              <span className=' text-white bg-green-600 px-1'>4.4 <StarIcon className='!text-[14px] text-white bg-green-600'
              /> </span><span className='pl-1'> (17,439)</span>
              </div>
              <span className='font-bold'>₹10,999</span><span className='line-through  pl-1 pr-1'>₹20,999</span><span className='text-green-600 font-bold text-[12px]'>14% off</span>
              </div>
            </div>


            <div className='p-4'>
            <img src='https://rukminim2.flixcart.com/image/2000/2000/xif0q/mobile/o/m/y/edge-50-pb2w0002in-motorola-original-imah3ancahezgjzh.jpeg?q=70' alt='Error' className='w-[20vw] h-[20vh]'></img>
            <div className='mt-2 text-center text-xs'>
            <span className='block'>Motorola G85 5G</span>
            <div className=''>
              <span className=' text-white bg-green-600 px-1'>4.4 <StarIcon className='!text-[14px] text-white bg-green-600'
              /> </span><span className='pl-1'> (17,439)</span>
              </div>
              <span className='font-bold'>₹17,999</span><span className='line-through  pl-1 pr-1'>₹20,999</span><span className='text-green-600 font-bold text-[12px]'>14% off</span>
              </div>
            </div>


            <div className='p-4'>
            <img src='https://rukminim2.flixcart.com/image/2000/2000/xif0q/mobile/g/w/r/edge-50-fusion-pb300000in-motorola-original-imahywzztyktktpp.jpeg?q=70' alt='Error' className='w-[20vw] h-[20vh]'></img>
            <div className='mt-2 text-center text-xs'>
            <span className='block'>Motorola G85 5G</span>
            <div className=''>
              <span className=' text-white bg-green-600 px-1'>4.4 <StarIcon className='!text-[14px] text-white bg-green-600'
              /> </span><span className='pl-1'> (17,439)</span>
              </div>
              <span className='font-bold inline-block'>₹8,999</span><span className='line-through  pl-1 pr-1'>₹20,999</span><span className='text-green-600 font-bold text-[12px]'>14% off</span>
              </div>
            </div>


          </div>


          


        </div>


        <div className='relative border-b-2 mb-3'>
            <div className=' border-b-2 pb-2 pt-3 '>
            <span className='  text-xl font-bold p-3'>Poco smartphones</span>
            <Button variant="contained" className='absolute bottom-0.5 left-[860px] text-sm'>VIEW ALL</Button>
            </div>
          <div className='flex gap-1.5'>
            <div className='p-4'>
            <img src='https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/e/o/w/-original-imagzcfjjbheykct.jpeg?q=70' alt='Error' className='w-[8vw] h-[20vh]'></img>
            <div className='mt-2 text-center text-xs'>
            <span className='block'>Poco M1 Pro 5G</span>
            <div className=''>
              <span className=' text-white bg-green-600 px-1'>4.4 <StarIcon className='!text-[14px] text-white bg-green-600'
              /> </span><span className='pl-1'> (17,439)</span>
              </div>
              <span className='font-bold  '>₹17,999</span><span className='line-through text-[14px] pl-1 pr-1'>₹20,999</span><span className='text-green-600 font-bold text-[12px]'>14% off</span>
              </div>
            </div>



            <div className='p-4'>
            <img src='https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/t/z/r/-original-imah2qyrqdyuqma4.jpeg?q=70' alt='Error' className='w-[8vw] h-[20vh]'></img>
            <div className='mt-2 text-center text-xs'>
            <span className='block'>Poco F6 Pro 5G</span>
            <div className=''>
              <span className=' text-white bg-green-600 px-1'>4.4 <StarIcon className='!text-[14px] text-white bg-green-600'
              /> </span><span className='pl-1'> (17,439)</span>
              </div>
              <span className='font-bold'>₹19,999</span><span className='line-through  pl-1 pr-1'>₹20,999</span><span className='text-green-600 font-bold text-[12px]'>14% off</span>
              </div>
            </div>


            <div className='p-4'>
            <img src='https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/h/b/r/-original-imagytcpcnjbduwh.jpeg?q=70' alt='Error' className='w-[8vw] h-[20vh]'></img>
            <div className='mt-2 text-center text-xs'>
            <span className='block'>Poco X5 5G</span>
              <div className=''>
              <span className=' text-white bg-green-600 px-1'>4.4 <StarIcon className='!text-[14px] text-white bg-green-600'
              /> </span><span className='pl-1'> (17,439)</span>
              </div>
              <span className='font-bold'>₹27,999</span><span className='line-through  pl-1 pr-1'>₹20,999</span><span className='text-green-600 font-bold text-[12px]'>14% off</span>
              </div>
            </div>


            <div className='p-4'>
            <img src='https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/q/l/0/x6-neo-5g-mzb0ggwin-poco-original-imagyxngbqmdcupq.jpeg?q=70' alt='Error' className='w-[8vw] h-[20vh]'></img>
            <div className='mt-2 text-center text-xs'>
            <span className='block'>Poco V9 5G</span>
            <div className=''>
              <span className=' text-white bg-green-600 px-1'>4.4 <StarIcon className='!text-[14px] text-white bg-green-600'
              /> </span><span className='pl-1'> (17,439)</span>
              </div>
              <span className='font-bold'>₹9,999</span><span className='line-through  pl-1 pr-1'>₹20,999</span><span className='text-green-600 font-bold text-[12px]'>14% off</span>
              </div>
            </div>


            <div className='p-4'>
            <img src='https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/d/3/g/-original-imagy2v5ggthbvfe.jpeg?q=70' alt='Error' className='w-[8vw] h-[20vh]'></img>
            <div className='mt-2 text-center text-xs'>
            <span className='block'>Poco C25</span>
            <div className=''>
              <span className=' text-white bg-green-600 px-1'>4.4 <StarIcon className='!text-[14px] text-white bg-green-600'
              /> </span><span className='pl-1'> (17,439)</span>
              </div>
              <span className='font-bold'>₹5,999</span><span className='line-through  pl-1 pr-1'>₹20,999</span><span className='text-green-600 font-bold text-[12px]'>14% off</span>
              </div>
            </div>


            <div className='p-4'>
            <img src='https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/n/z/4/-original-imagz5g9gyhmgusp.jpeg?q=70' alt='Error' className='w-[8vw] h-[20vh]'></img>
            <div className='mt-2 text-center text-xs'>
            <span className='block'>Poco M4</span>
            <div className=''>
              <span className=' text-white bg-green-600 px-1'>4.4 <StarIcon className='!text-[14px] text-white bg-green-600'
              /> </span><span className='pl-1'> (17,439)</span>
              </div>
              <span className='font-bold inline-block'>₹14,999</span><span className='line-through  pl-1 pr-1'>₹20,999 </span><span className='text-green-600 font-bold text-[12px]'>14% off</span>
              </div>
            </div>




          </div>


          


        </div>



        <div className='relative border-b-2 mb-3 '>
            <div className=' border-b-2 pb-2 '>
            <span className='  text-xl font-bold p-3'>Vivo smartphones</span>
            <Button variant="contained" className='absolute top-0 left-[865px] text-sm'>VIEW ALL</Button>
            </div>
          <div className='flex gap-3'>
            <div className='p-4'>
            <img src='https://m.media-amazon.com/images/I/71XZP2Hm+5L._AC_UY327_FMwebp_QL65_.jpg' alt='Error' className='w-[28vw] h-[20vh]'></img>
            <div className='mt-2 text-center text-xs'>
            <span className='block'>Motorola G85 5G</span>
              <span className='block text-slate-600 '>4.5 * (17,439)</span>
              <span className='font-bold '>₹17,999</span><span className='line-through text-[14px] pl-1 pr-1'>₹20,999</span><span className='text-green-600 font-bold text-[12px]'>14% off</span>
              </div>
            </div>



            <div className='p-4'>
            <img src='https://m.media-amazon.com/images/I/71XZP2Hm+5L._AC_UY327_FMwebp_QL65_.jpg' alt='Error' className='w-[28vw] h-[20vh]'></img>
            <div className='mt-2 text-center text-xs'>
            <span className='block'>Motorola G85 5G</span>
              <span className='block text-slate-600'>4.5 * (17,439)</span>
              <span className='font-bold'>₹17,999</span><span className='line-through'>₹20,999</span><span className='text-green-600 font-bold'>14% off</span>
              </div>
            </div>


            <div className='p-4'>
            <img src='https://m.media-amazon.com/images/I/71XZP2Hm+5L._AC_UY327_FMwebp_QL65_.jpg' alt='Error' className='w-[28vw] h-[20vh]'></img>
            <div className='mt-2 text-center text-xs'>
            <span className='block'>Motorola G85 5G</span>
              <span className='block text-slate-600'>4.5 * (17,439)</span>
              <span className='font-bold'>₹17,999</span><span className='line-through'>₹20,999</span><span className='text-green-600 font-bold'>14% off</span>
              </div>
            </div>


            <div className='p-4'>
            <img src='https://m.media-amazon.com/images/I/71XZP2Hm+5L._AC_UY327_FMwebp_QL65_.jpg' alt='Error' className='w-[28vw] h-[20vh]'></img>
            <div className='mt-2 text-center text-xs'>
            <span className='block'>Motorola G85 5G</span>
              <span className='block text-slate-600'>4.5 * (17,439)</span>
              <span className='font-bold'>₹17,999</span><span className='line-through'>₹20,999</span><span className='text-green-600 font-bold'>14% off</span>
              </div>
            </div>


            <div className='p-4'>
            <img src='https://m.media-amazon.com/images/I/71XZP2Hm+5L._AC_UY327_FMwebp_QL65_.jpg' alt='Error' className='w-[28vw] h-[20vh]'></img>
            <div className='mt-2 text-center text-xs'>
            <span className='block'>Motorola G85 5G</span>
              <span className='block text-slate-600'>4.5 * (17,439)</span>
              <span className='font-bold'>₹17,999</span><span className='line-through'>₹20,999</span><span className='text-green-600 font-bold'>14% off</span>
              </div>
            </div>


            <div className='p-4'>
            <img src='https://m.media-amazon.com/images/I/71XZP2Hm+5L._AC_UY327_FMwebp_QL65_.jpg' alt='Error' className='w-[28vw] h-[20vh]'></img>
            <div className='mt-2 text-center text-xs'>
            <span className='block'>Motorola G85 5G</span>
              <span className='block text-slate-600'>4.5 * (17,439)</span>
              <span className='font-bold inline-block'>₹17,999</span><span className='line-through'>₹20,999</span><span className='text-green-600 font-bold'>14% off</span>
              </div>
            </div>


          </div>


          


        </div>


        <div className='relative border-b-2 mb-3'>
            <div className=' border-b-2 pb-2 pt-3 '>
            <span className='  text-xl font-bold p-3'>Apple smartphones</span>
            <Button variant="contained" className='absolute bottom-0.5 left-[845px] text-sm'>VIEW ALL</Button>
            </div>
          <div className='flex gap-3'>
            <div className='p-4'>
            <img src='https://m.media-amazon.com/images/I/71XZP2Hm+5L._AC_UY327_FMwebp_QL65_.jpg' alt='Error' className='w-[28vw] h-[20vh]'></img>
            <div className='mt-2 text-center text-xs'>
            <span className='block'>Motorola G85 5G</span>
              <span className='block text-slate-600 '>4.5 * (17,439)</span>
              <span className='font-bold '>₹17,999</span><span className='line-through text-[14px] pl-1 pr-1'>₹20,999</span><span className='text-green-600 font-bold text-[12px]'>14% off</span>
              </div>
            </div>



            <div className='p-4'>
            <img src='https://m.media-amazon.com/images/I/71XZP2Hm+5L._AC_UY327_FMwebp_QL65_.jpg' alt='Error' className='w-[28vw] h-[20vh]'></img>
            <div className='mt-2 text-center text-xs'>
            <span className='block'>Motorola G85 5G</span>
              <span className='block text-slate-600'>4.5 * (17,439)</span>
              <span className='font-bold'>₹17,999</span><span className='line-through'>₹20,999</span><span className='text-green-600 font-bold'>14% off</span>
              </div>
            </div>


            <div className='p-4'>
            <img src='https://m.media-amazon.com/images/I/71XZP2Hm+5L._AC_UY327_FMwebp_QL65_.jpg' alt='Error' className='w-[28vw] h-[20vh]'></img>
            <div className='mt-2 text-center text-xs'>
            <span className='block'>Motorola G85 5G</span>
              <span className='block text-slate-600'>4.5 * (17,439)</span>
              <span className='font-bold'>₹17,999</span><span className='line-through'>₹20,999</span><span className='text-green-600 font-bold'>14% off</span>
              </div>
            </div>


            <div className='p-4'>
            <img src='https://m.media-amazon.com/images/I/71XZP2Hm+5L._AC_UY327_FMwebp_QL65_.jpg' alt='Error' className='w-[28vw] h-[20vh]'></img>
            <div className='mt-2 text-center text-xs'>
            <span className='block'>Motorola G85 5G</span>
              <span className='block text-slate-600'>4.5 * (17,439)</span>
              <span className='font-bold'>₹17,999</span><span className='line-through'>₹20,999</span><span className='text-green-600 font-bold'>14% off</span>
              </div>
            </div>


            <div className='p-4'>
            <img src='https://m.media-amazon.com/images/I/71XZP2Hm+5L._AC_UY327_FMwebp_QL65_.jpg' alt='Error' className='w-[28vw] h-[20vh]'></img>
            <div className='mt-2 text-center text-xs'>
            <span className='block'>Motorola G85 5G</span>
              <span className='block text-slate-600'>4.5 * (17,439)</span>
              <span className='font-bold'>₹17,999</span><span className='line-through'>₹20,999</span><span className='text-green-600 font-bold'>14% off</span>
              </div>
            </div>


            <div className='p-4'>
            <img src='https://m.media-amazon.com/images/I/71XZP2Hm+5L._AC_UY327_FMwebp_QL65_.jpg' alt='Error' className='w-[28vw] h-[20vh]'></img>
            <div className='mt-2 text-center text-xs'>
            <span className='block'>Motorola G85 5G</span>
              <span className='block text-slate-600'>4.5 * (17,439)</span>
              <span className='font-bold inline-block'>₹17,999</span><span className='line-through'>₹20,999</span><span className='text-green-600 font-bold'>14% off</span>
              </div>
            </div>




          </div>


          


        </div>


        <div className='relative border-b-2 mb-3 '>
            <div className=' border-b-2 pb-2 '>
            <span className='  text-xl font-bold p-3'>Samsung smartphones</span>
            <Button variant="contained" className='absolute top-0 left-[810px] text-sm'>VIEW ALL</Button>
            </div>
          <div className='flex gap-3'>
            <div className='p-4'>
            <img src='https://m.media-amazon.com/images/I/71XZP2Hm+5L._AC_UY327_FMwebp_QL65_.jpg' alt='Error' className='w-[28vw] h-[20vh]'></img>
            <div className='mt-2 text-center text-xs'>
            <span className='block'>Motorola G85 5G</span>
              <span className='block text-slate-600 '>4.5 * (17,439)</span>
              <span className='font-bold '>₹17,999</span><span className='line-through text-[14px] pl-1 pr-1'>₹20,999</span><span className='text-green-600 font-bold text-[12px]'>14% off</span>
              </div>
            </div>



            <div className='p-4'>
            <img src='https://m.media-amazon.com/images/I/71XZP2Hm+5L._AC_UY327_FMwebp_QL65_.jpg' alt='Error' className='w-[28vw] h-[20vh]'></img>
            <div className='mt-2 text-center text-xs'>
            <span className='block'>Motorola G85 5G</span>
              <span className='block text-slate-600'>4.5 * (17,439)</span>
              <span className='font-bold'>₹17,999</span><span className='line-through'>₹20,999</span><span className='text-green-600 font-bold'>14% off</span>
              </div>
            </div>


            <div className='p-4'>
            <img src='https://m.media-amazon.com/images/I/71XZP2Hm+5L._AC_UY327_FMwebp_QL65_.jpg' alt='Error' className='w-[28vw] h-[20vh]'></img>
            <div className='mt-2 text-center text-xs'>
            <span className='block'>Motorola G85 5G</span>
              <span className='block text-slate-600'>4.5 * (17,439)</span>
              <span className='font-bold'>₹17,999</span><span className='line-through'>₹20,999</span><span className='text-green-600 font-bold'>14% off</span>
              </div>
            </div>


            <div className='p-4'>
            <img src='https://m.media-amazon.com/images/I/71XZP2Hm+5L._AC_UY327_FMwebp_QL65_.jpg' alt='Error' className='w-[28vw] h-[20vh]'></img>
            <div className='mt-2 text-center text-xs'>
            <span className='block'>Motorola G85 5G</span>
              <span className='block text-slate-600'>4.5 * (17,439)</span>
              <span className='font-bold'>₹17,999</span><span className='line-through'>₹20,999</span><span className='text-green-600 font-bold'>14% off</span>
              </div>
            </div>


            <div className='p-4'>
            <img src='https://m.media-amazon.com/images/I/71XZP2Hm+5L._AC_UY327_FMwebp_QL65_.jpg' alt='Error' className='w-[28vw] h-[20vh]'></img>
            <div className='mt-2 text-center text-xs'>
            <span className='block'>Motorola G85 5G</span>
              <span className='block text-slate-600'>4.5 * (17,439)</span>
              <span className='font-bold'>₹17,999</span><span className='line-through'>₹20,999</span><span className='text-green-600 font-bold'>14% off</span>
              </div>
            </div>


            <div className='p-4'>
            <img src='https://m.media-amazon.com/images/I/71XZP2Hm+5L._AC_UY327_FMwebp_QL65_.jpg' alt='Error' className='w-[28vw] h-[20vh]'></img>
            <div className='mt-2 text-center text-xs'>
            <span className='block'>Motorola G85 5G</span>
              <span className='block text-slate-600'>4.5 * (17,439)</span>
              <span className='font-bold inline-block'>₹17,999</span><span className='line-through'>₹20,999</span><span className='text-green-600 font-bold'>14% off</span>
              </div>
            </div>


          </div>


          


        </div>


        <div className='relative border-b-2 mb-3'>
            <div className=' border-b-2 pb-2 pt-3 '>
            <span className='  text-xl font-bold p-3'>Redmi smartphones</span>
            <Button variant="contained" className='absolute bottom-0.5 left-[843px] text-sm'>VIEW ALL</Button>
            </div>
          <div className='flex gap-3'>
            <div className='p-4'>
            <img src='https://m.media-amazon.com/images/I/71XZP2Hm+5L._AC_UY327_FMwebp_QL65_.jpg' alt='Error' className='w-[28vw] h-[20vh]'></img>
            <div className='mt-2 text-center text-xs'>
            <span className='block'>Motorola G85 5G</span>
              <span className='block text-slate-600 '>4.5 * (17,439)</span>
              <span className='font-bold '>₹17,999</span><span className='line-through text-[14px] pl-1 pr-1'>₹20,999</span><span className='text-green-600 font-bold text-[12px]'>14% off</span>
              </div>
            </div>



            <div className='p-4'>
            <img src='https://m.media-amazon.com/images/I/71XZP2Hm+5L._AC_UY327_FMwebp_QL65_.jpg' alt='Error' className='w-[28vw] h-[20vh]'></img>
            <div className='mt-2 text-center text-xs'>
            <span className='block'>Motorola G85 5G</span>
              <span className='block text-slate-600'>4.5 * (17,439)</span>
              <span className='font-bold'>₹17,999</span><span className='line-through'>₹20,999</span><span className='text-green-600 font-bold'>14% off</span>
              </div>
            </div>


            <div className='p-4'>
            <img src='https://m.media-amazon.com/images/I/71XZP2Hm+5L._AC_UY327_FMwebp_QL65_.jpg' alt='Error' className='w-[28vw] h-[20vh]'></img>
            <div className='mt-2 text-center text-xs'>
            <span className='block'>Motorola G85 5G</span>
              <span className='block text-slate-600'>4.5 * (17,439)</span>
              <span className='font-bold'>₹17,999</span><span className='line-through'>₹20,999</span><span className='text-green-600 font-bold'>14% off</span>
              </div>
            </div>


            <div className='p-4'>
            <img src='https://m.media-amazon.com/images/I/71XZP2Hm+5L._AC_UY327_FMwebp_QL65_.jpg' alt='Error' className='w-[28vw] h-[20vh]'></img>
            <div className='mt-2 text-center text-xs'>
            <span className='block'>Motorola G85 5G</span>
              <span className='block text-slate-600'>4.5 * (17,439)</span>
              <span className='font-bold'>₹17,999</span><span className='line-through'>₹20,999</span><span className='text-green-600 font-bold'>14% off</span>
              </div>
            </div>


            <div className='p-4'>
            <img src='https://m.media-amazon.com/images/I/71XZP2Hm+5L._AC_UY327_FMwebp_QL65_.jpg' alt='Error' className='w-[28vw] h-[20vh]'></img>
            <div className='mt-2 text-center text-xs'>
            <span className='block'>Motorola G85 5G</span>
              <span className='block text-slate-600'>4.5 * (17,439)</span>
              <span className='font-bold'>₹17,999</span><span className='line-through'>₹20,999</span><span className='text-green-600 font-bold'>14% off</span>
              </div>
            </div>


            <div className='p-4'>
            <img src='https://m.media-amazon.com/images/I/71XZP2Hm+5L._AC_UY327_FMwebp_QL65_.jpg' alt='Error' className='w-[28vw] h-[20vh]'></img>
            <div className='mt-2 text-center text-xs'>
            <span className='block'>Motorola G85 5G</span>
              <span className='block text-slate-600'>4.5 * (17,439)</span>
              <span className='font-bold inline-block'>₹17,999</span><span className='line-through'>₹20,999</span><span className='text-green-600 font-bold'>14% off</span>
              </div>
            </div>




          </div>


        </div>

        <div className='relative border-b-2 mb-3'>
            <div className=' border-b-2 pb-2 pt-3 '>
            <span className='  text-xl font-bold p-3'>Google smartphones</span>
            <Button variant="contained" className='absolute bottom-0.5 left-[836px] text-sm'>VIEW ALL</Button>
            </div>
          <div className='flex gap-3'>
            <div className='p-4'>
            <img src='https://m.media-amazon.com/images/I/71XZP2Hm+5L._AC_UY327_FMwebp_QL65_.jpg' alt='Error' className='w-[28vw] h-[20vh]'></img>
            <div className='mt-2 text-center text-xs'>
            <span className='block'>Motorola G85 5G</span>
              <span className='block text-slate-600 '>4.5 * (17,439)</span>
              <span className='font-bold '>₹17,999</span><span className='line-through text-[14px] pl-1 pr-1'>₹20,999</span><span className='text-green-600 font-bold text-[12px]'>14% off</span>
              </div>
            </div>



            <div className='p-4'>
            <img src='https://m.media-amazon.com/images/I/71XZP2Hm+5L._AC_UY327_FMwebp_QL65_.jpg' alt='Error' className='w-[28vw] h-[20vh]'></img>
            <div className='mt-2 text-center text-xs'>
            <span className='block'>Motorola G85 5G</span>
              <span className='block text-slate-600'>4.5 * (17,439)</span>
              <span className='font-bold'>₹17,999</span><span className='line-through'>₹20,999</span><span className='text-green-600 font-bold'>14% off</span>
              </div>
            </div>


            <div className='p-4'>
            <img src='https://m.media-amazon.com/images/I/71XZP2Hm+5L._AC_UY327_FMwebp_QL65_.jpg' alt='Error' className='w-[28vw] h-[20vh]'></img>
            <div className='mt-2 text-center text-xs'>
            <span className='block'>Motorola G85 5G</span>
              <span className='block text-slate-600'>4.5 * (17,439)</span>
              <span className='font-bold'>₹17,999</span><span className='line-through'>₹20,999</span><span className='text-green-600 font-bold'>14% off</span>
              </div>
            </div>


            <div className='p-4'>
            <img src='https://m.media-amazon.com/images/I/71XZP2Hm+5L._AC_UY327_FMwebp_QL65_.jpg' alt='Error' className='w-[28vw] h-[20vh]'></img>
            <div className='mt-2 text-center text-xs'>
            <span className='block'>Motorola G85 5G</span>
              <span className='block text-slate-600'>4.5 * (17,439)</span>
              <span className='font-bold'>₹17,999</span><span className='line-through'>₹20,999</span><span className='text-green-600 font-bold'>14% off</span>
              </div>
            </div>


            <div className='p-4'>
            <img src='https://m.media-amazon.com/images/I/71XZP2Hm+5L._AC_UY327_FMwebp_QL65_.jpg' alt='Error' className='w-[28vw] h-[20vh]'></img>
            <div className='mt-2 text-center text-xs'>
            <span className='block'>Motorola G85 5G</span>
              <span className='block text-slate-600'>4.5 * (17,439)</span>
              <span className='font-bold'>₹17,999</span><span className='line-through'>₹20,999</span><span className='text-green-600 font-bold'>14% off</span>
              </div>
            </div>


            <div className='p-4'>
            <img src='https://m.media-amazon.com/images/I/71XZP2Hm+5L._AC_UY327_FMwebp_QL65_.jpg' alt='Error' className='w-[28vw] h-[20vh]'></img>
            <div className='mt-2 text-center text-xs'>
            <span className='block'>Motorola G85 5G</span>
              <span className='block text-slate-600'>4.5 * (17,439)</span>
              <span className='font-bold inline-block'>₹17,999</span><span className='line-through'>₹20,999</span><span className='text-green-600 font-bold'>14% off</span>
              </div>
            </div>




          </div>


        </div>



        </div>


    </div>
    </div>
  )
}

export default Mobile