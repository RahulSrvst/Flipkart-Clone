import React from 'react';
import {  Button, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocationOn from '@mui/icons-material/LocationOn';
function Header(){
  return (
    <div className='!flex bg-green-600  items-center overflow-hidden'>
      <div className='ml-40 mr-3 '>
      <span className='font-bold text-white text-[20px] '> <i>Grocery</i></span>
      
    </div>

    <div className='relative flex !w-[36%]'>
    <IconButton className='!absolute top-1.5 right-1' >
      <SearchIcon className='text-green-500 !text-[24px]'/>
    </IconButton>
      <input type="text" placeholder=' Search grocery products'   className='!my-2 !w-[100%] !pl-2 !py-1.5 !text-[14px] placeholder:text-slate-600'
/>
    </div>

    <div className='flex '>
            <div className='pt-2'>
            <Button startIcon={<LocationOn className='!h-5' />} endIcon={<KeyboardArrowDownOutlinedIcon className='!h-5' />}  className='!{lowercase} whitespace-nowrap !capitalize   !text-xs !ml-4 !mr-4 !text-white !font-bold'>Delivery to 261001  </Button>
            </div>
            <div className='pt-2' >
            <span    className='text-green-500 text-[16px] font-bold bg-white px-8 py-1'   >Login</span>
            </div>
            <div className='pt-2'>
            <Button  endIcon={<KeyboardArrowDownOutlinedIcon className='!h-5' />} className='!{lowercase} whitespace-nowrap !capitalize !text-white  !text-xs !ml-4 !mr-4 !font-bold'>More</Button>
            </div>
            <div className='pt-2'>
            <Button startIcon={<ShoppingCartIcon  className='!h-5 !w-5'/>}    className='!{lowercase} !capitalize !text-white  !text-xs !ml-4 !mr-4 !font-bold' >Cart</Button>
            </div>
            <div>
                <img src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fk_goto_home_logo_small_5b9cdd.svg' alt='Error' className='w-[10vw] h-[8vh] bg-green-700'></img>
            </div>
        </div>
        
    </div>
  );
};

export default Header;
