import React from 'react'
import {  Button } from '@mui/material';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

function SubHeader() {
  return (
    <div className='flex items-center pl-28 pr-28 bg-white pt-0.5 pb-0.5 mb-[1px]'>
    <Button  endIcon={<KeyboardArrowDownOutlinedIcon className='!h-3 !text-slate-400' />} className='!{lowercase} whitespace-nowrap !capitalize !text-black  !text-[13px] !ml-4 !mr-4 !font-bold'>Electronics</Button>
    <Button  endIcon={<KeyboardArrowDownOutlinedIcon className='!h-3 !text-slate-400' />} className='!{lowercase} whitespace-nowrap !capitalize !text-black  !text-[13px] !ml-4 !mr-4 !font-bold'>TV & Appliances</Button>
    <Button  endIcon={<KeyboardArrowDownOutlinedIcon className='!h-3 !text-slate-400' />} className='!{lowercase} whitespace-nowrap !capitalize !text-black  !text-[13px] !ml-4 !mr-4 !font-bold'>Mens</Button>
    <Button  endIcon={<KeyboardArrowDownOutlinedIcon className='!h-3 !text-slate-400' />} className='!{lowercase} whitespace-nowrap !capitalize !text-black  !text-[13px] !ml-4 !mr-4 !font-bold'>Women</Button>
    <Button  endIcon={<KeyboardArrowDownOutlinedIcon className='!h-3 !text-slate-400' />} className='!{lowercase} whitespace-nowrap !capitalize !text-black  !text-[13px] !ml-4 !mr-4 !font-bold'>Baby & Kids</Button>
    <Button  endIcon={<KeyboardArrowDownOutlinedIcon className='!h-3 !text-slate-400' />} className='!{lowercase} whitespace-nowrap !capitalize !text-black  !text-[13px] !ml-4 !mr-4 !font-bold'>Home & Furniture</Button>
    <Button  endIcon={<KeyboardArrowDownOutlinedIcon className='!h-3 !text-slate-400' />} className='!{lowercase} whitespace-nowrap !capitalize !text-black  !text-[13px] !ml-4 !mr-4 !font-bold'>Sports,Books & More</Button>
    <Button   className='!{lowercase} whitespace-nowrap !capitalize !text-black  !text-[13px] !ml-4 !mr-4 !font-bold'>Flights</Button>
    <Button   className='!{lowercase} whitespace-nowrap !capitalize !text-black  !text-[13px] !ml-4 !mr-4 !font-bold'>Offer Zone</Button>
    <Button   className='!{lowercase} whitespace-nowrap !capitalize !text-black  !text-[13px] !ml-4 !mr-4 !font-bold'>Grocery</Button>
    </div>
  )
}

export default SubHeader