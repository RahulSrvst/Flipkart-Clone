import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useNavigate } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function SubHeader() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [tvOpen, setTvOpen] = React.useState(false);
  const tvOpenHandler = () => setTvOpen(true);
  const tvCloseHandler = () => setTvOpen(false);

  const [beautyOpen, setBeautyOpen] = React.useState(false);
  const beautyOpenHandler = () => setBeautyOpen(true);
  const beautyCloseHandler = () => setBeautyOpen(false);

  const [homeKitchenOpen, setHomeKitchenOpen] = React.useState(false);
  const homeKitchenOpenHandler = () => setHomeKitchenOpen(true);
  const homeKitchenCloseHandler = () => setHomeKitchenOpen(false);

  const [furnitureOpen, setFurnitureOpen] = React.useState(false);
  const furnitureOpenHandler = () => setFurnitureOpen(true);
  const furnitureCloseHandler = () => setFurnitureOpen(false);

  const navigate = useNavigate();

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 7,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 8,
            slidesToScroll: 1,
            
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        }
      ]
  };

  return (
    
    <div className='bg-white'>

<div className="slider-container xs:flex xl:hidden py-1  pt-2">
      <Slider {...settings}>
      <div className='flex flex-col items-center cursor-pointer' onClick={() => navigate("/topOffer")}>
          <div className='flex justify-center items-center mb-1'>
            <img 
              src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/698ba0cebe456aaf.jpg?q=100" 
              alt='Top Offer' 
              className='w-12 h-12'
            />
          </div>
          <div className='flex justify-center'>
            <span className='text-center text-xs font-medium'>Top Offer</span>
          </div>
        </div>
        <div className='flex flex-col items-center cursor-pointer' onClick={() => navigate("/mobile&Tablet")}>
          <div className='flex justify-center items-center mb-1'>
            <img 
              src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/44e10b16e649b691.jpg?q=100" 
              alt='Mobiles & Tablet' 
              className='w-12 h-12'
            />
          </div>
          <div className='flex justify-center'>
            <span className='text-center text-xs font-medium'>Mobiles & Tablet</span>
          </div>
        </div>
        <div className='flex flex-col items-center cursor-pointer' onClick={() => navigate("/TV&Appliances")}>
          <div className='flex justify-center items-center mb-1'>
            <img 
              src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/717b5077a5e25324.jpg?q=100" 
              alt='TV & Appliances' 
              className='w-12 h-12'
            />
          </div>
          <div className='flex justify-center'>
            <span className='text-center text-xs font-medium'>TV & Appliances</span>
          </div>
        </div>
        <div className='flex flex-col items-center cursor-pointer' onClick={handleOpen}>
          <div className='flex justify-center items-center mb-1'>
            <img 
              src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/4da1d0d19350cc84.jpg?q=100" 
              alt='Electronics' 
              className='w-12 h-12'
            />
          </div>
          <div className='flex justify-center items-center hover:text-blue-600'>
            <span className='text-center text-xs font-medium'>Electronics</span>
            {open ? <KeyboardArrowUpIcon className='!text-[24px]' /> : <KeyboardArrowDownIcon className='!text-[24px]' />}
          </div>
        </div>
        <div className='flex flex-col items-center cursor-pointer' onClick={tvOpenHandler}>
          <div className='flex justify-center items-center mb-1'>
            <img 
              src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/9d4e9c605fc1d2d3.jpg?q=100" 
              alt='Fashion' 
              className='w-12 h-12'
            />
          </div>
          <div className='flex justify-center hover:text-blue-600'>
            <span className='text-center text-xs font-medium'>Fashion</span>
            {tvOpen ? <KeyboardArrowUpIcon className='!text-[24px]' /> : <KeyboardArrowDownIcon className='!text-[24px]' />}
          </div>
        </div>
        <div className='flex flex-col items-center cursor-pointer' onClick={beautyOpenHandler}>
          <div className='flex justify-center items-center mb-1'>
            <img 
              src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/a5e656672d0548dd.jpg?q=100" 
              alt='Beauty' 
              className='w-12 h-12'
            />
          </div>
          <div className='flex justify-center hover:text-blue-600'>
            <span className='text-center text-xs font-medium'>Beauty</span>
            {beautyOpen ? <KeyboardArrowUpIcon className='!text-[24px]' /> : <KeyboardArrowDownIcon className='!text-[24px]' />}
          </div>
        </div>
        <div className='flex flex-col items-center cursor-pointer' onClick={homeKitchenOpenHandler}>
          <div className='flex justify-center items-center mb-1'>
            <img 
              src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/5b813b64a3179898.jpg?q=100" 
              alt='Home & Kitchen' 
              className='w-12 h-12'
            />
          </div>
          <div className='flex justify-center hover:text-blue-600'>
            <span className='text-center text-xs font-medium'>Home & Kitchen</span>
            {homeKitchenOpen ? <KeyboardArrowUpIcon className='!text-[24px]' /> : <KeyboardArrowDownIcon className='!text-[24px]' />}
          </div>
        </div>
        <div className='flex flex-col items-center cursor-pointer' onClick={furnitureOpenHandler}>
          <div className='flex justify-center items-center mb-1'>
            <img 
              src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/7a5e96c10ada8a56.jpg?q=100" 
              alt='Furniture' 
              className='w-12 h-12'
            />
          </div>
          <div className='flex justify-center hover:text-blue-600'>
            <span className='text-center text-xs font-medium'>Furniture</span>
            {furnitureOpen ? <KeyboardArrowUpIcon className='!text-[24px]' /> : <KeyboardArrowDownIcon className='!text-[24px]' />}
          </div>
        </div>

        <div className='flex flex-col items-center cursor-pointer' onClick={() => navigate("/travel")}>
          <div className='flex justify-center items-center mb-1'>
            <img 
              src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/57fe1ffe54569c41.jpg?q=100" 
              alt='Travel' 
              className='w-12 h-12'
            />
          </div>
          <div className='flex justify-center'>
            <span className='text-center text-xs font-medium'>Travel</span>
          </div>
        </div>

        <div className='flex flex-col items-center cursor-pointer' onClick={() => navigate("/grocery")}>
          <div className='flex justify-center items-center mb-1'>
            <img 
              src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/25f400c36bc3487d.jpg?q=100" 
              alt='Grocery' 
              className='w-12 h-12'
            />
          </div>
          <div className='flex justify-center'>
            <span className='text-center text-xs font-medium'>Grocery</span>
          </div>
        </div>
      </Slider>
      </div>


      <div className='flex bg-white justify-center xl:py-4 ml-3 mr-3 mb-3 '>
      <div className='xl:flex flex-nowrap gap-8 hidden '>
        {/* Category Items */}
        <div className='flex flex-col items-center cursor-pointer' onClick={() => navigate("/topOffer")}>
          <div className='flex justify-center items-center mb-1'>
            <img 
              src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/698ba0cebe456aaf.jpg?q=100" 
              alt='Top Offer' 
              className='w-12 h-12'
            />
          </div>
          <div className='flex justify-center'>
            <span className='text-center text-xs font-medium'>Top Offer</span>
          </div>
        </div>

        <div className='flex flex-col items-center cursor-pointer' onClick={() => navigate("/mobile&Tablet")}>
          <div className='flex justify-center items-center mb-1'>
            <img 
              src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/44e10b16e649b691.jpg?q=100" 
              alt='Mobiles & Tablet' 
              className='w-12 h-12'
            />
          </div>
          <div className='flex justify-center'>
            <span className='text-center text-xs font-medium'>Mobiles & Tablet</span>
          </div>
        </div>

        <div className='flex flex-col items-center cursor-pointer' onClick={() => navigate("/TV&Appliances")}>
          <div className='flex justify-center items-center mb-1'>
            <img 
              src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/717b5077a5e25324.jpg?q=100" 
              alt='TV & Appliances' 
              className='w-12 h-12'
            />
          </div>
          <div className='flex justify-center'>
            <span className='text-center text-xs font-medium'>TV & Appliances</span>
          </div>
        </div>

        <div className='flex flex-col items-center cursor-pointer' onClick={handleOpen}>
          <div className='flex justify-center items-center mb-1'>
            <img 
              src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/4da1d0d19350cc84.jpg?q=100" 
              alt='Electronics' 
              className='w-12 h-12'
            />
          </div>
          <div className='flex justify-center items-center hover:text-blue-600'>
            <span className='text-center text-xs font-medium'>Electronics</span>
            {open ? <KeyboardArrowUpIcon className='!text-[24px]' /> : <KeyboardArrowDownIcon className='!text-[24px]' />}
          </div>
        </div>

        <div className='flex flex-col items-center cursor-pointer' onClick={tvOpenHandler}>
          <div className='flex justify-center items-center mb-1'>
            <img 
              src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/9d4e9c605fc1d2d3.jpg?q=100" 
              alt='Fashion' 
              className='w-12 h-12'
            />
          </div>
          <div className='flex justify-center hover:text-blue-600'>
            <span className='text-center text-xs font-medium'>Fashion</span>
            {tvOpen ? <KeyboardArrowUpIcon className='!text-[24px]' /> : <KeyboardArrowDownIcon className='!text-[24px]' />}
          </div>
        </div>

        <div className='flex flex-col items-center cursor-pointer' onClick={beautyOpenHandler}>
          <div className='flex justify-center items-center mb-1'>
            <img 
              src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/a5e656672d0548dd.jpg?q=100" 
              alt='Beauty' 
              className='w-12 h-12'
            />
          </div>
          <div className='flex justify-center hover:text-blue-600'>
            <span className='text-center text-xs font-medium'>Beauty</span>
            {beautyOpen ? <KeyboardArrowUpIcon className='!text-[24px]' /> : <KeyboardArrowDownIcon className='!text-[24px]' />}
          </div>
        </div>

        <div className='flex flex-col items-center cursor-pointer' onClick={homeKitchenOpenHandler}>
          <div className='flex justify-center items-center mb-1'>
            <img 
              src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/5b813b64a3179898.jpg?q=100" 
              alt='Home & Kitchen' 
              className='w-12 h-12'
            />
          </div>
          <div className='flex justify-center hover:text-blue-600'>
            <span className='text-center text-xs font-medium'>Home & Kitchen</span>
            {homeKitchenOpen ? <KeyboardArrowUpIcon className='!text-[24px]' /> : <KeyboardArrowDownIcon className='!text-[24px]' />}
          </div>
        </div>

        <div className='flex flex-col items-center cursor-pointer' onClick={furnitureOpenHandler}>
          <div className='flex justify-center items-center mb-1'>
            <img 
              src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/7a5e96c10ada8a56.jpg?q=100" 
              alt='Furniture' 
              className='w-12 h-12'
            />
          </div>
          <div className='flex justify-center hover:text-blue-600'>
            <span className='text-center text-xs font-medium'>Furniture</span>
            {furnitureOpen ? <KeyboardArrowUpIcon className='!text-[24px]' /> : <KeyboardArrowDownIcon className='!text-[24px]' />}
          </div>
        </div>

        <div className='flex flex-col items-center cursor-pointer' onClick={() => navigate("/travel")}>
          <div className='flex justify-center items-center mb-1'>
            <img 
              src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/57fe1ffe54569c41.jpg?q=100" 
              alt='Travel' 
              className='w-12 h-12'
            />
          </div>
          <div className='flex justify-center'>
            <span className='text-center text-xs font-medium'>Travel</span>
          </div>
        </div>

        <div className='flex flex-col items-center cursor-pointer' onClick={() => navigate("/grocery")}>
          <div className='flex justify-center items-center mb-1'>
            <img 
              src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/25f400c36bc3487d.jpg?q=100" 
              alt='Grocery' 
              className='w-12 h-12'
            />
          </div>
          <div className='flex justify-center'>
            <span className='text-center text-xs font-medium'>Grocery</span>
          </div>
        </div>
      </div>

      

      {/* Modals */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          "& .MuiBackdrop-root": {
            background: "transparent",
          },
        }}
      >
        <Box className='absolute top-[24%] left-[27%] bg-white rounded-md w-[30vw] !border-none !shadow-xl'>
          <div className='grid grid-cols-2 gap-0'>
            <div className='col-span-1 rounded-l-md border-none shadow'>
              <span className='block text-[14px] text-black p-3 bg-slate-100'>
                <b>Audio</b><ArrowRightIcon className='!text-[20px] !text-slate-400' />
              </span>
              <span className='block text-[14px] text-slate-600 p-3 hover:bg-slate-100'>Cameras & Accessories</span>
              <span className='block text-[14px] text-slate-600 p-3 hover:bg-slate-100'>Computer Peripherals</span>
              <span className='block text-[14px] text-slate-600 p-3 hover:bg-slate-100'>Gaming</span>
              <span className='block text-[14px] text-slate-600 p-3 hover:bg-slate-100'>Health & Personal Care</span>
              <span className='block text-[14px] text-slate-600 p-3 hover:bg-slate-100'>Laptop Accessories</span>
              <span className='block text-[14px] text-slate-600 p-3 hover:bg-slate-100'>Laptop and Desktop</span>
              <span className='block text-[14px] text-slate-600 p-3 hover:bg-slate-100'>Mobile Accessory</span>
              <span className='block text-[14px] text-slate-600 p-3 hover:bg-slate-100'>Powerbank</span>
              <span className='block text-[14px] text-slate-600 p-3 hover:bg-slate-100'>Smart Home Automation</span>
              <span className='block text-[14px] text-slate-600 p-3 hover:bg-slate-100'>Smart Wearables</span>
            
            </div>
            <div className='col-span-1 p-3 rounded-r-md border-none shadow-md shadow-black'>
              <span className='block text-[14px] text-black pb-5 pt-2'>
                <b>More in Audio</b><ArrowRightIcon className='!text-[20px] !text-slate-400' />
              </span>
              <span className='block text-[14px] text-slate-600 pb-5'>Bluetooth Headphones</span>
              <span className='block text-[14px] text-slate-600 pb-5'>Wired Headphones</span>
              <span className='block text-[14px] text-slate-600 pb-5'>True Wireless Earbuds</span>
              <span className='block text-[14px] text-slate-600 pb-5'>Bluetooth Speakers</span>
              <span className='block text-[14px] text-slate-600 pb-5'>Soundbars</span>
              <span className='block text-[14px] text-slate-600 pb-5'>Home Theatres</span>
              <span className='block text-[14px] text-slate-600 pb-5'>TV Streaming Device</span>
              <span className='block text-[14px] text-slate-600 pb-5'>Remote Control</span>
              <span className='block text-[14px] text-slate-600 pb-5'>DTH Set Top Box</span>
              <span className='block text-[14px] text-slate-600 pb-5'>Headphones Pouch & Case Covers</span>
            </div>
          </div>
        </Box>
      </Modal>

      <Modal
        open={tvOpen}
        onClose={tvCloseHandler}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          "& .MuiBackdrop-root": {
            background: "transparent",
          },
        }}
      >
        <Box className='absolute top-[24%] left-[36%] bg-white rounded-md w-[30vw] !border-none !shadow-xl'>
          <div className='grid grid-cols-2 gap-0'>
            <div className='col-span-1 rounded-l-md border-none shadow'>
              <span className='block text-[14px] text-black p-3 bg-slate-100'>
                <b>Fashion</b><ArrowRightIcon className='!text-[20px] !text-slate-400' />
              </span>
              <span className='block text-[14px] text-slate-600 p-3 hover:bg-slate-100'>Men's Clothing</span>
              <span className='block text-[14px] text-slate-600 p-3 hover:bg-slate-100'>Women's Clothing</span>
              <span className='block text-[14px] text-slate-600 p-3 hover:bg-slate-100'>Footwear</span>
              <span className='block text-[14px] text-slate-600 p-3 hover:bg-slate-100'>Accessories</span>
              <span className='block text-[14px] text-slate-600 p-3 hover:bg-slate-100'>Jewelry</span>
              <span className='block text-[14px] text-slate-600 p-3 hover:bg-slate-100'>Watches</span>
              <span className='block text-[14px] text-slate-600 p-3 hover:bg-slate-100'>Bags</span>
              <span className='block text-[14px] text-slate-600 p-3 hover:bg-slate-100'>Sunglasses</span>
              <span className='block text-[14px] text-slate-600 p-3 hover:bg-slate-100'>Scarves</span>
              <span className='block text-[14px] text-slate-600 p-3 hover:bg-slate-100'>Hats & Caps</span>
              <span className='block text-[14px] text-slate-600 p-3 hover:bg-slate-100'>Belts</span>
            </div>
            <div className='col-span-1 p-3 rounded-r-md border-none shadow-md shadow-black'>
              <span className='block text-[14px] text-black pb-5 pt-2'>
                <b>More in Fashion</b><ArrowRightIcon className='!text-[20px] !text-slate-400' />
              </span>
              <span className='block text-[14px] text-slate-600 pb-5'>Men's Formal Wear</span>
              <span className='block text-[14px] text-slate-600 pb-5'>Women's Dresses</span>
              <span className='block text-[14px] text-slate-600 pb-5'>Casual Wear</span>
              <span className='block text-[14px] text-slate-600 pb-5'>Party Wear</span>
              <span className='block text-[14px] text-slate-600 pb-5'>Winter Wear</span>
              <span className='block text-[14px] text-slate-600 pb-5'>Summer Wear</span>
              <span className='block text-[14px] text-slate-600 pb-5'>Activewear</span>
              <span className='block text-[14px] text-slate-600 pb-5'>Swimwear</span>
              <span className='block text-[14px] text-slate-600 pb-5'>Lingerie & Sleepwear</span>
              <span className='block text-[14px] text-slate-600 pb-5'>Footwear</span>
              <span className='block text-[14px] text-slate-600 pb-5'>Accessories</span>
            </div>
          </div>
        </Box>
      </Modal>

      <Modal
        open={beautyOpen}
        onClose={beautyCloseHandler}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          "& .MuiBackdrop-root": {
            background: "transparent",
          },
        }}
      >
        <Box className='absolute top-[24%] left-[41%] bg-white rounded-md w-[30vw] !border-none !shadow-xl'>
        <div className='grid grid-cols-2 gap-0'>
  <div className='col-span-1 rounded-l-md border-none shadow'>
    <span className='block text-[14px] text-black p-3 bg-slate-100'>
      <b>Beauty</b><ArrowRightIcon className='!text-[20px] !text-slate-400' />
    </span>
    <span className='block text-[14px] text-slate-600 p-3 hover:bg-slate-100'>Skincare</span>
    <span className='block text-[14px] text-slate-600 p-3 hover:bg-slate-100'>Makeup</span>
    <span className='block text-[14px] text-slate-600 p-3 hover:bg-slate-100'>Hair Care</span>
    <span className='block text-[14px] text-slate-600 p-3 hover:bg-slate-100'>Fragrances</span>
    <span className='block text-[14px] text-slate-600 p-3 hover:bg-slate-100'>Personal Care</span>
    <span className='block text-[14px] text-slate-600 p-3 hover:bg-slate-100'>Tools & Accessories</span>
    <span className='block text-[14px] text-slate-600 p-3 hover:bg-slate-100'>Face Masks</span>
    <span className='block text-[14px] text-slate-600 p-3 hover:bg-slate-100'>Body Care</span>
    <span className='block text-[14px] text-slate-600 p-3 hover:bg-slate-100'>Hair Extension</span>
    <span className='block text-[14px] text-slate-600 p-3 hover:bg-slate-100'>Eye Shadow</span>
  </div>
  <div className='col-span-1 p-3 rounded-r-md border-none shadow-md shadow-black'>
    <span className='block text-[14px] text-black pb-5 pt-2'>
      <b>More in Beauty</b><ArrowRightIcon className='!text-[20px] !text-slate-400' />
    </span>
    <span className='block text-[14px] text-slate-600 pb-5'>Anti-Aging</span>
    <span className='block text-[14px] text-slate-600 pb-5'>Sun Protection</span>
    <span className='block text-[14px] text-slate-600 pb-5'>Hair Coloring</span>
    <span className='block text-[14px] text-slate-600 pb-5'>Men's Grooming</span>
    <span className='block text-[14px] text-slate-600 pb-5'>Organic & Natural</span>
    <span className='block text-[14px] text-slate-600 pb-5'>Fragrance Sets</span>
    <span className='block text-[14px] text-slate-600 pb-5'>Luxury Beauty</span>
    <span className='block text-[14px] text-slate-600 pb-5'>Skincare Sets</span>
    <span className='block text-[14px] text-slate-600 pb-5'>Sets</span>
    <span className='block text-[14px] text-slate-600 pb-5'>Travel Size</span>
  </div>
</div>

        </Box>
      </Modal>

      <Modal
        open={homeKitchenOpen}
        onClose={homeKitchenCloseHandler}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          "& .MuiBackdrop-root": {
            background: "transparent",
          },
        }}
      >
        <Box className='absolute top-[24%] left-[52%] bg-white rounded-md w-[30vw] !border-none !shadow-xl'>
        <div className='grid grid-cols-2 gap-0'>
  <div className='col-span-1 rounded-l-md border-none shadow'>
    <span className='block text-[14px] text-black p-3 bg-slate-100'>
      <b>Home & Kitchen</b><ArrowRightIcon className='!text-[20px] !text-slate-400' />
    </span>
    <span className='block text-[14px] text-slate-600 p-3 hover:bg-slate-100'>Kitchen Appliances</span>
    <span className='block text-[14px] text-slate-600 p-3 hover:bg-slate-100'>Cookware</span>
    <span className='block text-[14px] text-slate-600 p-3 hover:bg-slate-100'>Dinnerware</span>
    <span className='block text-[14px] text-slate-600 p-3 hover:bg-slate-100'>Storage & Organization</span>
    <span className='block text-[14px] text-slate-600 p-3 hover:bg-slate-100'>Small Kitchen Appliances</span>
    <span className='block text-[14px] text-slate-600 p-3 hover:bg-slate-100'>Cleaning Supplies</span>
    <span className='block text-[14px] text-slate-600 p-3 hover:bg-slate-100'>Furniture</span>
    <span className='block text-[14px] text-slate-600 p-3 hover:bg-slate-100'>Bedding</span>
    <span className='block text-[14px] text-slate-600 p-3 hover:bg-slate-100'>Home Decor</span>
    <span className='block text-[14px] text-slate-600 p-3 hover:bg-slate-100'>Lighting</span>
  </div>
  <div className='col-span-1 p-3 rounded-r-md border-none shadow-md shadow-black'>
    <span className='block text-[14px] text-black pb-5 pt-2'>
      <b>More in Home & Kitchen</b><ArrowRightIcon className='!text-[20px] !text-slate-400' />
    </span>
    <span className='block text-[14px] text-slate-600 pb-5'>Kitchen Tools & Gadgets</span>
    <span className='block text-[14px] text-slate-600 pb-5'>Tableware</span>
    <span className='block text-[14px] text-slate-600 pb-5'>Cookware Sets</span>
    <span className='block text-[14px] text-slate-600 pb-5'>Home Storage Solutions</span>
    <span className='block text-[14px] text-slate-600 pb-5'>Furniture Accessories</span>
    <span className='block text-[14px] text-slate-600 pb-5'>Bedding Sets</span>
    <span className='block text-[14px] text-slate-600 pb-5'>Decorative Items</span>
    <span className='block text-[14px] text-slate-600 pb-5'>Flooring & Carpets</span>
    <span className='block text-[14px] text-slate-600 pb-5'>Lighting Fixtures</span>
    <span className='block text-[14px] text-slate-600 pb-5'>Garden Tools & Furniture</span>
  </div>
</div>

        </Box>
      </Modal>

      <Modal
        open={furnitureOpen}
        onClose={furnitureCloseHandler}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          "& .MuiBackdrop-root": {
            background: "transparent",
          },
        }}
      >
        <Box className='absolute top-[24%] left-[63%] bg-white rounded-md w-[30vw] !border-none !shadow-xl'>
        <div className='grid grid-cols-2 gap-0'>
  <div className='col-span-1 rounded-l-md border-none shadow'>
    <span className='block text-[14px] text-black p-3 bg-slate-100'>
      <b>Furniture</b><ArrowRightIcon className='!text-[20px] !text-slate-400' />
    </span>
    <span className='block text-[14px] text-slate-600 p-3 hover:bg-slate-100'>Living Room Furniture</span>
    <span className='block text-[14px] text-slate-600 p-3 hover:bg-slate-100'>Bedroom Furniture</span>
    <span className='block text-[14px] text-slate-600 p-3 hover:bg-slate-100'>Dining Room Furniture</span>
    <span className='block text-[14px] text-slate-600 p-3 hover:bg-slate-100'>Office Furniture</span>
    <span className='block text-[14px] text-slate-600 p-3 hover:bg-slate-100'>Outdoor Furniture</span>
    <span className='block text-[14px] text-slate-600 p-3 hover:bg-slate-100'>Storage Solutions</span>
    <span className='block text-[14px] text-slate-600 p-3 hover:bg-slate-100'>Kids Furniture</span>
    <span className='block text-[14px] text-slate-600 p-3 hover:bg-slate-100'>Home Decor</span>
    <span className='block text-[14px] text-slate-600 p-3 hover:bg-slate-100'>Mattresses</span>
    <span className='block text-[14px] text-slate-600 p-3 hover:bg-slate-100'>Accent Furniture</span>
  </div>
  <div className='col-span-1 p-3 rounded-r-md border-none shadow-md shadow-black'>
    <span className='block text-[14px] text-black pb-5 pt-2'>
      <b>More in Furniture</b><ArrowRightIcon className='!text-[20px] !text-slate-400' />
    </span>
    <span className='block text-[14px] text-slate-600 pb-5'>Sofas & Couches</span>
    <span className='block text-[14px] text-slate-600 pb-5'>Beds & Headboards</span>
    <span className='block text-[14px] text-slate-600 pb-5'>Dining Tables & Chairs</span>
    <span className='block text-[14px] text-slate-600 pb-5'>Office Chairs</span>
    <span className='block text-[14px] text-slate-600 pb-5'>Cabinets & Sideboards</span>
    <span className='block text-[14px] text-slate-600 pb-5'>Bookshelves</span>
    <span className='block text-[14px] text-slate-600 pb-5'>Dressers & Chests</span>
    <span className='block text-[14px] text-slate-600 pb-5'>Outdoor Seating</span>
    <span className='block text-[14px] text-slate-600 pb-5'>Accent Tables</span>
    <span className='block text-[14px] text-slate-600 pb-5'>Entryway Furniture</span>
  </div>
</div>

        </Box>
      </Modal>
    </div>
    </div>
  );
}

export default SubHeader;
