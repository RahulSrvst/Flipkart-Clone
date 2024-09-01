import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Button, IconButton, Box, Modal } from "@mui/material";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowDown';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import MovingIcon from '@mui/icons-material/Moving';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SearchIcon from '@mui/icons-material/Search';

function Header() {
  const style = {
    position: 'absolute',
    top: '55%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 20,
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    console.log('Hello');
    setOpen(false);
  };

  const navigate = useNavigate();
  const [lock, setLock] = useState(true);

  const handleLock = () => {
    setLock(!lock);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const openVertex = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseVertex = () => {
    console.log("ddd");
    setAnchorEl(null);
  };

  return (
    <div className='!flex bg-blue-600 items-center'>
      <div className='ml-40 pt-1 '>
        <img
          src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"
          alt='Flipkart'
          className='!w-16 !h-auto pt-1'
        />
        <span className='flex items-center gap-0.5 !text-[11px] mb-2'>
          <i className='!text-white'>Explore</i>
          <i className='!text-yellow-400 !font-bold'> Plus</i>
          <img
            src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png'
            alt='Plus Icon'
            className='w-[10px] h-[10px]'
          />
        </span>
      </div>
      <div className='relative flex !w-[36%] ml-5'>
    <IconButton className='!absolute top-1.5 right-1' >
      <SearchIcon className='text-blue-600 !text-[24px]'/>
    </IconButton>
      <input type="text" placeholder=' Search for product, brand and more'   className='!my-2 !w-[100%] !pl-2 !py-1.5 !text-[14px]'
/>
    </div>

      

      <div className='flex ml-[20vw]'>
        <div className='!bg-white ml-8'>
          <Button
            className='!{lowercase} !capitalize !text-blue-600 !text-xs bg-white !font-bold !pl-8 !pr-8 !p-1'
            onClick={handleOpen}
          >
            Login
          </Button>
        </div>

        
      </div>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className='rounded-lg'>
          <div className='box-4 grid grid-cols-2 w-[65vw]'>
            <div className='relative bg-blue-600 col-span-1 rounded-l-lg'>
              <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ4mPgLInedRybaHt60VA8c4U3aiE96TkbLC3og-JZk_vUpRKAF_jFRgctyYygxKdIp8g&usqp=CAU'
                alt='Error'
                className='absolute left-36 top-44 w-[10vw] h-[8vh]'
              />
              <span className='absolute left-36 top-56 text-white text-3xl'>
                <i><b>Flipkart</b></i>
              </span>
              <span className='absolute left-28 top-64 text-white text-xl'>
                Ab har <i className='text-yellow-300'>wish</i> hogi <i className='text-yellow-300'>poori</i>
              </span>
              <img
                src='https://www.bearscot.com/wp-content/uploads/2021/01/sunny-day-at-the-bridges-260318.jpg'
                alt='Error'
                className='w-full h-full opacity-25 rounded-l-lg'
              />
            </div>
            <div>
              <div>
                <div className='absolute top-1 right-1' onClick={handleClose}>
                  <IconButton>
                    <CancelOutlinedIcon className="hover:!text-red-500" />
                  </IconButton>
                </div>
                <span className='text-xl font-bold pt-10 pl-7 block'>Login</span>
                <span className='text-[14px] text-slate-400 font-bold pl-7 pb-12 block'>
                  Get access to your Order, Wishlist & Recommendations
                </span>
                <span className='text-sm font-bold pl-7 block'>Enter E-mail/Mobile number</span>
                <div className='!relative'>
                  <div className='absolute top-0 right-20'>
                    <IconButton>
                      <EmailOutlinedIcon className='!text-[24px]' />
                    </IconButton>
                  </div>
                  <input
                    type='text'
                    placeholder='+91 9192939495'
                    className="border-2 border-blue-400 w-[24vw] p-1 rounded-full ml-7 mb-2"
                  />
                </div>
                <br />
                <span className='text-sm font-bold pl-7 block'>Enter Password</span>
                <div className='!relative'>
                  <div className='absolute top-0 right-20'>
                    <IconButton onClick={handleLock}>
                      {lock ? <VisibilityOffIcon className='!text-[24px]' /> : <VisibilityIcon className='!text-[24px]' />}
                    </IconButton>
                  </div>
                  <input
                    type={lock ? "password" : 'text'}
                    placeholder='Enter Your Password'
                    className="border-2 border-blue-400 w-[24vw] p-1 rounded-full ml-7 mb-2"
                  />
                </div>
                <button className='bg-blue-500 ml-7 p-1 pl-12 pr-12 rounded-full text-white'>Login</button>
                <button
                  className='bg-white ml-5 p-1 pl-12 pr-12 rounded-full mb-20 text-blue-500 border-2 border-blue-400'
                  onClick={() => navigate("/Login")}
                >
                  SignUp
                </button>
                <span className='block text-[10px] text-slate-400 ml-7'>
                  We no longer Support login via Social accounts. To Recover your old accounts
                </span>
                <span className='text-[10px] text-slate-400 ml-7'>
                  please<b className='text-[12px] text-blue-500 pl-1'>Click here</b>
                </span>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default Header;
