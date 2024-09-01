import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Button, IconButton } from "@mui/material";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import MovingOutlinedIcon from '@mui/icons-material/MovingOutlined';
import SaveAltOutlinedIcon from '@mui/icons-material/SaveAltOutlined';
import Tooltip from '@mui/material/Tooltip';
  




// const ITEM_HEIGHT = 48;
 
// }


const style = {
  
  // position: 'absolute',
  // top: '55%',
  // left: '50%',
  transform: 'translate(-50%, -50%)',
  // width: 400,
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 20,
  // p: 4,
};

 const Header = () => {
    const [openH, setOpenH] = React.useState(false);
    const handleOpen = () => setOpenH(true);
    const handleClose = () => {
      console.log('Hello')
      setOpenH(false)
    };
  const navigate = useNavigate();
  const [lock,setlock] = useState("true");
    const handleLock=()=>{
        setlock(!lock)
    }

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);
  
    const handleMouseEnter = (event) => {
      setAnchorEl(event.currentTarget);
      setOpen(true);
    };
  
    const handleMouseLeave = () => {
      setOpen(false);
    };
  
    const handleCloseVertex = () => {
      setOpen(false);
    };

    
  return (
    <div className="!w-[100vw] !overflow-hidden">
      <div className="bg-white ">

      


<div className="!flex sticky top-0 z-10 w-[70vw] h-[9vh]  bg-white md:!mb-1 items-center">
<div className="w-full  flex justify-center">
<div className="sm:flex  md:hidden">
<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNSIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI1IDI0IiBmaWxsPSJub25lIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzExNzg3Xzg3NzY3KSI+CjxwYXRoIGQ9Ik00LjUgMTJIMjAuNSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNNC41IDYuMjVIMjAuNSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNNC41IDE3Ljc1SDIwLjUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF8xMTc4N184Nzc2NyI+CjxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuNSkiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K" alt="Error" className="mt-1"></img>
</div>
<div className="pl-6 md:pl-10 lg:pl-20" style={{lineHeight:"0px"}}>
  <span className=" text-lg md:text-xl font-bold text-blue-600"><i>Flipkart</i></span>
  <div className="flex items-center gap-x-0.5 pl-1">
    <span className="text-[12px]  font-bold text-slate-400"><i>Explore</i></span>
    <span className="text-[12px] font-bold text-yellow-500"><i>Plus</i></span>
    <img  src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png" alt="Error" className="w-[10px] h-[10px] " ></img>

  </div>
</div>
</div>


<div className="relative  hidden md:!w-[450vw] md:flex md:ml-3 md:mr-3 lg:ml-6 lg:mr-8  ">
  <IconButton className="!absolute top-2 left-1">
    <SearchIcon />
  </IconButton>
  <input
    type="text"
    placeholder=" Search for Product, Brand and More"
    className="!my-2 md:w-[35vw] lg:!w-[42vw] !pl-9 !py-[0.6vh] !bg-slate-100 !rounded-md border border-gray-300 "
  />
</div>



<div className="flex !w-[20vw] lg:ml-1">
  <div className="focus:bg-blue-600" 
  // onClick={() => navigate("/login")}
  onClick={ () => setOpenH(true)}
  >
    <Tooltip title="Login" arrow className="text-blue-500">
    <Button
      startIcon={<AccountCircleOutlinedIcon className="!h-5 !w-5 " />}
      endIcon={<KeyboardArrowDownOutlinedIcon className="!h-5" />}
      className=" hover:!bg-blue-500 hover:!text-white !{lowercase} !capitalize !text-black  !text-sm xl:!ml-4 xl:!mr-4 !rounded-md"
    >
      Login
    </Button>
    </Tooltip>

  </div>
  <Tooltip title="Cart">
  <div className=""
  onClick={() => navigate("/Cart")}>
    <Button
      startIcon={<ShoppingCartOutlinedIcon className="!h-5 !w-5" />}
      className="!{lowercase} hidden xl:flex !capitalize !text-black  !text-sm  xl:!ml-4 xl:!mr-4"
    >
     <span className="hidden xl:flex" > Cart </span>
    </Button>
  </div>
  </Tooltip>
  <Tooltip text="Become A Seller">
  <div className="hidden md:flex" onClick={() => navigate("/becomeAseller")}>
    <Button
      startIcon={<StorefrontOutlinedIcon className="!h-5 !w-5" />}
      className="!{lowercase} whitespace-nowrap !capitalize !text-black hidden  !text-sm xl:!ml-4 xl:!mr-4"
    >
      <span className="hidden xl:flex" >Become A Seller</span>
    </Button>
  </div>
  </Tooltip>
  <div className="hidden md:flex">
    <Button
      // startIcon={}
      id="fade-button"
      aria-controls={open ? 'fade-menu' : undefined}
      aria-haspopup="true"
      aria-expanded={open ? 'true' : undefined}
      onMouseEnter={handleMouseEnter}
      // onMouseLeave={handleMouseLeave}         
    >
    <MoreVertIcon className="!h-5 !w-5 !text-black " 
    // onMouseOver={handleClick}
      
      // onMouseLeave={handleCloseVertex}
       />
    </Button>

  <Menu 
  id="fade-menu"
  MenuListProps={{
    'aria-labelledby': 'fade-button',
  }}
  anchorEl={anchorEl}
        open={Boolean(anchorEl) && open}
        onClose={handleCloseVertex}
        PaperProps={{
          onMouseEnter: handleMouseEnter,
          // onMouseLeave: handleMouseLeave,
          style: { backgroundColor: 'lightblue' }, // Example of adding custom styling
        }}
  TransitionComponent={Fade}
>
  <MenuItem onClick={handleCloseVertex} className="!text-[14px]"><NotificationsOutlinedIcon className="!text-[32px] pr-2"/> Notification Prefrences</MenuItem>
  <MenuItem onClick={handleCloseVertex} className="!text-[14px]"><HeadsetMicOutlinedIcon className="!text-[32px] pr-2"/>24*7 Customer Care</MenuItem>
  <MenuItem onClick={handleCloseVertex} className="!text-[14px]"><MovingOutlinedIcon className="!text-[32px] pr-2"/>Advertise</MenuItem>
  <MenuItem onClick={handleCloseVertex} className="!text-[14px]"><SaveAltOutlinedIcon className="!text-[32px] pr-2"/>Download App</MenuItem>
</Menu>
</div>

<Modal
  open={openH}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style} className='absolute md:top-[33.5%] md:left-[50%] lg:top-[55%] lg:left-[50%] rounded-lg'>
  <div className='box-4 grid grid-cols-2 md:w-[55vw] md:h-[50vh] lg:h-auto lg:w-[65vw]'>
      <div className=' relative bg-blue-600 col-span-1 rounded-l-lg '>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ4mPgLInedRybaHt60VA8c4U3aiE96TkbLC3og-JZk_vUpRKAF_jFRgctyYygxKdIp8g&usqp=CAU' alt='Error' className='absolute md:left-16 md:top-32 lg:left-36 lg:top-44 w-[10vw] h-[8vh]'></img>
      <span className='absolute md:left-14 md:top-44 lg:left-36 lg:top-56 text-white md:text-xl lg:text-3xl'><i><b>Flipkart</b></i></span>
      <span className='absolute md:left-10 md:top-52 lg:left-28 lg:top-64  text-white md:text-[14px] lg:text-xl' >Ab har <i className='text-yellow-300'>wish</i> hogi <i className='text-yellow-300'>poori</i></span>
      <img src='https://www.bearscot.com/wp-content/uploads/2021/01/sunny-day-at-the-bridges-260318.jpg' alt='Error' className='w-full h-full opacity-25 rounded-l-lg'></img>
      
      </div>
      <div className="bg-white rounded-r-md">
      <div>
      <div className='absolute top-1 md:right-0 lg:right-1' onClick={handleClose}>
          <IconButton>
              <CancelOutlinedIcon className="hover:!text-red-500"/>
          </IconButton>
      </div>
          <span className='lg:text-xl md:text-md font-bold md:pt-6 lg:pt-10 md:pl-3 lg:pl-7 block'>Login</span>
          <span className='md:text-[10px] lg:text-[14px] text-slate-400 font-bold md:pl-3 lg:pl-7 lg:pb-12 block'>Get access to your Order, Wishlist & Recommendations</span>

          <span className='md:text-[11px] md:pl-3 md:pt-3 lg:text-sm font-bold  lg:pl-7 block'>Enter E-mail/Mobile number</span>
          <div className='!relative'>
          <div className='absolute top-0 md:right-5 lg:right-20  '>
              <IconButton>
                  <EmailOutlinedIcon className='md:!text-[20px] lg:!text-[24px]'/>
              </IconButton>
          </div>
          <input type='text' placeholder='+91 9192939495' className=" border-2 border-blue-400 md:w-[22vw] md:h-[5vh] lg:h-[6vh] lg:w-[24vw] p-1 rounded-full md:ml-3 lg:ml-7 mb-2 md:placeholder:text-[14px]"></input>
          </div>
          <br>
          </br>

          <span className='md:text-[11px] md:pl-3 lg:text-sm font-bold  lg:pl-7 block'>Enter Password</span>
          <div className='!relative'>
          <div className='absolute top-0 md:right-5 lg:right-20  '>
          {lock ?
                  <IconButton onClick={handleLock}>
                  <VisibilityOffIcon className='md:!text-[20px] lg:!text-[24px]'/>
              </IconButton>
      :
                  <IconButton onClick={handleLock}>
                  <VisibilityIcon className='md:!text-[20px] lg:!text-[24px]'/>
              </IconButton>
              }
          </div>
          <input type={`${lock ? "password" : 'text'}`} placeholder='Enter Your Password' className=" border-2 border-blue-400 md:w-[22vw] lg:w-[24vw] md:h-[5vh] lg:h-[6vh] p-1 rounded-full md:ml-3 lg:ml-7 mb-2 md:placeholder:text-[14px]" onClick={() => setlock("false")} onEncrypted={lock} />
          </div>
          <button  className='bg-blue-500 md:ml-3 lg:ml-7 p-1 pl-12  pr-12 rounded-full text-white'>Login</button>
          <button className='bg-white md:ml-3 md:mt-3 md:w-[22vw] lg:ml-5 p-1 pl-12  pr-12 rounded-full md:mb-10 lg:mb-20 text-blue-500 border-2 border-blue-400 ' onClick={() => navigate("/Login")}>SignUp</button>

          <span className='block text-[10px] text-slate-400 md:ml-3 lg:ml-7'>We no longer Support login via Social accounts. To Recover your old accounts</span>
          <span className='text-[10px] text-slate-400 md:ml-3 lg:ml-7 '>please<b className='text-[12px] text-blue-500 pl-1'>Click here</b></span>
      </div>
      </div>
  </div>
  </Box>
</Modal>
</div>
</div>
</div>

<div className="flex md:hidden bg-white">
<div className="relative ml-4   ">
  <IconButton className="!absolute top-1 left-1">
    <SearchIcon className="!text-[24px]"/>
  </IconButton>
  <input
    type="text"
    placeholder=" Search for Product, Brand and More"
    className="!my-1 !w-[90vw] !pl-7 !py-[0.6vh] !bg-slate-100  !rounded-md border border-gray-300  placeholder:text-[14px]"
  />
</div>
</div>
    </div>
  );
};

export default Header