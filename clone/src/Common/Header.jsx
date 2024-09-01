import React from 'react';
import {  Button, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
function Header(){
  return (
    <div className='!flex bg-blue-600  items-center'>
      <div className='ml-40 mr-3 pt-1'>
      <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt='Flipkart'  className='!w-16 !h-auto pt-1 '></img>
      
      <span className='flex items-center gap-0.5 !text-[11px] mb-2'>
      <i className='!text-white'>Explore  </i>
      <i className='!text-yellow-400 !font-bold'> Plus</i>
      <img src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png' alt='Plus Icon' className='w-[10px] h-[10px]'/></span>
      
    </div>

    <div className='relative flex !w-[36%]'>
    <IconButton className='!absolute top-1.5 right-1' >
      <SearchIcon className='text-blue-600 !text-[24px]'/>
    </IconButton>
      <input type="text" placeholder=' Search for product, brand and more'   className='!my-2 !w-[100%] !pl-2 !py-1.5 !text-[14px]'
/>
    </div>

    <div className='flex '>
            <div className='!bg-white ml-8' >
            <Button    className='!{lowercase} !capitalize !text-blue-600  !text-xs  bg-white !font-bold !pl-8 !pr-8 !p-1'   >Login</Button>
            </div>
            <div className=''>
            <Button   className='!{lowercase} whitespace-nowrap !capitalize   !text-xs !ml-4 !mr-4 !text-white !font-bold'>Become a Seller</Button>
            </div>
            <div className=''>
            <Button  endIcon={<KeyboardArrowDownOutlinedIcon className='!h-5' />} className='!{lowercase} whitespace-nowrap !capitalize !text-white  !text-xs !ml-4 !mr-4 !font-bold'>More</Button>
            </div>
            <div className=''>
            <Button startIcon={<ShoppingCartIcon  className='!h-5 !w-5'/>}    className='!{lowercase} !capitalize !text-white  !text-xs !ml-4 !mr-4 !font-bold' >Cart</Button>
            </div>
        </div>
        
    </div>
  );
};

export default Header;
