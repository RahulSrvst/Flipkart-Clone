import React from 'react'
import {  Button } from '@mui/material';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useNavigate } from 'react-router-dom';



function SubHeader() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  const [tvOpen, setTvOpen] = React.useState(false);
  const tvOpenHandler = () => setTvOpen(true);
  const tvCloseHandler = () => setTvOpen(false);

  const [menOpen, setMenOpen] = React.useState(false);
  const menOpenHandler = () => setMenOpen(true);
  const menCloseHandler = () => setMenOpen(false);

  const [womenOpen, setWomenOpen] = React.useState(false);
  const womenOpenHandler = () => setWomenOpen(true);
  const womenCloseHandler = () => setWomenOpen(false);

  const [babyOpen, setBabyOpen] = React.useState(false);
  const babyOpenHandler = () => setBabyOpen(true);
  const babyCloseHandler = () => setBabyOpen(false);

  const [homeOpen, setHomeOpen] = React.useState(false);
  const homeOpenHandler = () => setHomeOpen(true);
  const homeCloseHandler = () => setHomeOpen(false);

  const [sportsOpen, setSportsOpen] = React.useState(false);
  const sportsOpenHandler = () => setSportsOpen(true);
  const sportsCloseHandler = () => setSportsOpen(false);

  const navigate = useNavigate();






    const style = {
      position: 'absolute',
      top: '13.5vh',
      left: '10%',
      right:'10%',
      bottom:'9%',
      // transform: 'translate(-50%, -50%)',
      bgcolor: 'background.paper',
      border: '0px solid #000',
      boxShadow: 20,
      // p: 4,
    };

  return (

    <div className='flex items-center pl-28 pr-28 bg-white pt-0.5 pb-0.5 mb-[1px]'>


    <Button  
    endIcon={!open ? <KeyboardArrowDownOutlinedIcon  className='!h-3 !text-slate-400' /> : <KeyboardArrowUpIcon className='!h-3 !text-blue-500'/>}
    className='!{lowercase} whitespace-nowrap !capitalize !text-black  hover:!text-blue-500  !text-[13px] !ml-4 !mr-4 !font-bold' onMouseEnter={handleOpen} onMouseLeave={handleClose} >
    Electronics
    </Button>

    <Button  
    endIcon={!tvOpen ? <KeyboardArrowDownOutlinedIcon  className='!h-3 !text-slate-400' /> : <KeyboardArrowUpIcon className='!h-3 !text-blue-500'/>}
    className='!{lowercase} whitespace-nowrap !capitalize !text-black hover:!text-blue-500  !text-[13px] !ml-4 !mr-4 !font-bold' onClick={tvOpenHandler}>
    TV & Appliances
    </Button>


    <Button  
    endIcon={!menOpen ? <KeyboardArrowDownOutlinedIcon  className='!h-3 !text-slate-400' /> : <KeyboardArrowUpIcon className='!h-3 !text-blue-500'/>}
    className='!{lowercase} whitespace-nowrap !capitalize !text-black hover:!text-blue-500 !text-[13px] !ml-4 !mr-4 !font-bold' onClick={menOpenHandler}>
    Mens
    </Button>


    <Button  
    endIcon={!womenOpen ? <KeyboardArrowDownOutlinedIcon  className='!h-3 !text-slate-400' /> : <KeyboardArrowUpIcon className='!h-3 !text-blue-500'/>}
    className='!{lowercase} whitespace-nowrap !capitalize !text-black hover:!text-blue-500 !text-[13px] !ml-4 !mr-4 !font-bold'  onClick={womenOpenHandler}>
    Women
    </Button>


    <Button  
    endIcon={!babyOpen ? <KeyboardArrowDownOutlinedIcon  className='!h-3 !text-slate-400' /> : <KeyboardArrowUpIcon className='!h-3 !text-blue-500'/>}
    className='!{lowercase} whitespace-nowrap !capitalize !text-black hover:!text-blue-500 !text-[13px] !ml-4 !mr-4 !font-bold' onClick={babyOpenHandler}>
    Baby & Kids
    </Button>


    <Button  
    endIcon={!homeOpen ? <KeyboardArrowDownOutlinedIcon  className='!h-3 !text-slate-400' /> : <KeyboardArrowUpIcon className='!h-3 !text-blue-500'/>}
    className='!{lowercase} whitespace-nowrap !capitalize !text-black hover:!text-blue-500 !text-[13px] !ml-4 !mr-4 !font-bold'  onClick={homeOpenHandler}>
    Home & Furniture
    </Button>


    <Button  
    endIcon={!sportsOpen ? <KeyboardArrowDownOutlinedIcon  className='!h-3 !text-slate-400' /> : <KeyboardArrowUpIcon className='!h-3 !text-blue-600'/>}
    className='!{lowercase} whitespace-nowrap !capitalize !text-black hover:!text-blue-500 !text-[13px] !ml-4 !mr-4 !font-bold'  onClick={sportsOpenHandler}>
    Sports,Books & More
    </Button>


    <Button   className='!{lowercase} whitespace-nowrap !capitalize !text-black  !text-[13px] !ml-4 !mr-4 !font-bold' onClick={() => navigate("/travel")}>Flights</Button>
    <Button   className='!{lowercase} whitespace-nowrap !capitalize !text-black  !text-[13px] !ml-4 !mr-4 !font-bold' onClick={() => navigate("/mobile&Tablet")}>Offer Zone</Button>
    <Button   className='!{lowercase} whitespace-nowrap !capitalize !text-black  !text-[13px] !ml-4 !mr-4 !font-bold' onClick={() => navigate("/grocery")}>Grocery</Button>

    

    {/* Electronics */}


    <Modal
        className='!bg-opacity-50'
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          "& .MuiBackdrop-root":{
           background: "transparent"

          }
          // opacity:''
        }}
      >
        <Box sx={style} className='rounded-sm w-[80vw]'>
  <div className='grid grid-cols-5 gap-3'>
    {/* Column 1 */}
    <div className='col-span-1 m-5'>
      <span className='block text-[14px] text-black pb-1.5'><b>Mobiles</b><span><ArrowRightIcon className='!text-[20px] !text-slate-400'/></span></span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Mi</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Realme</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Samsung</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Infinix</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>OPPO</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Apple</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Vivo</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Honor</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Asus</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Poco X2</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>realme Narzo 10</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Infinix Hot 9</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>IQOO 3</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>iPhone SE</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Motorola razr</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>realme Narzo 10A</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Motorola g8 power lite</span>
    </div>

    {/* Column 2 */}
    <div className=' '>
    <div className='col-span-1 pl-5 pt-5 !pb-[16px] bg-slate-50'>
    <span className='block text-[14px] text-black pb-1.5'><b>Mobile Accessories</b><span><ArrowRightIcon className='!text-[20px] !text-slate-400'/></span></span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Mobile Cases</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Headphones & Headsets</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Power Banks</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Screenguards</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Memory Cards</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Smart Headphoens</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Mobile Cables</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Mobile Chargers</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Mobile Holders</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'><b>Smart Wearable Tech</b><span><ArrowRightIcon className='!text-[20px] !text-slate-400'/></span></span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Smart Watches</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Smart Glasses (VR)</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Smart Bands</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'><b>Health Care Appliances</b><span><ArrowRightIcon className='!text-[20px] !text-slate-400'/></span></span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Bp Monitors</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Weighing Scale</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Motorola g8 power lite</span>
    </div>
    </div>

    {/* Column 3 */}
    <div className='col-span-1 m-5 '>
    <span className='block text-[14px] text-black pb-1.5'><b>Laptops</b><span><ArrowRightIcon className='!text-[20px] !text-slate-400'/></span></span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Gaming Laptops</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'><b>Desktop PCs</b><span><ArrowRightIcon className='!text-[20px] !text-slate-400'/></span></span>
      <span className='block text-[14px] text-slate-600 pb-1.5'><b>Gaming & Accessories</b><span><ArrowRightIcon className='!text-[20px] !text-slate-400'/></span></span>
      <span className='block text-[14px] text-slate-600 pb-1.5'><b>Computer Accessories</b><span><ArrowRightIcon className='!text-[20px] !text-slate-400'/></span></span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>External Hard Disks</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Pendrives</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Laptop Skins & Decals</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Laptop Bags</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Mouse</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'><b>Computer Peripherals</b><span><ArrowRightIcon className='!text-[20px] !text-slate-400'/></span></span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Printers & Ink Cartridges</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Monitors</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'><b>Tablets</b><span><ArrowRightIcon className='!text-[20px] !text-slate-400'/></span></span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Apple iPads</span>
    </div>

    {/* Column 4 */}
    <div  className=''>
    <div className='col-span-1 pl-5 pt-5 pb-3  bg-slate-50'>
    <span className='block text-[14px] text-slate-600 pb-1.5'>Televisions</span>
    <span className='block text-[14px] text-black pb-1.5'><b>Speakers</b><span><ArrowRightIcon className='!text-[20px] !text-slate-400'/></span></span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Home Audio Speakers</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Home Theatres</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Soundbars</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Bluetooth Speakers</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>DTH Set Top Box</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'><b>Smart Home Automation</b><span><ArrowRightIcon className='!text-[20px] !text-slate-400'/></span></span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Google Nest</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'><b>Camera</b><span><ArrowRightIcon className='!text-[20px] !text-slate-400'/></span></span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>DSLR & Microless</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Compact & Bridge Cameras</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Sports & Action</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'><b>Camera Accessories</b><span><ArrowRightIcon className='!text-[20px] !text-slate-400'/></span></span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Lens</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Tripods</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'><b>Network Components</b><span><ArrowRightIcon className='!text-[20px] !text-slate-400'/></span></span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Routers</span>
    </div>
    </div>

    {/* Column 5 */}
    <div className='col-span-1 p-5'>
    <span className='block text-[14px] text-black pb-1.5'><b>Featured</b><span><ArrowRightIcon className='!text-[20px] !text-slate-400'/></span></span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Google Assistant Store</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Laptop on Buyback Gurantee</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Flipkart SmartBuy</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Li-Polymer Power Banks</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Sony PS4 Pro & Slim</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Apple Products</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Microsoft Store</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Lenevo Phab Series</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>JBL Speakers</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Smartphones on Buyback Gurantee</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Philips</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Dr. Morepen</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Complete Mobile Protection</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Mobile No Cost EMI</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Huawai Watch Gt 2e Smart Watch</span>
    </div>
  </div>
</Box>

      </Modal>

    


    {/* Tv & Appliances */}

      <Modal
        open={tvOpen}
        onClose={tvCloseHandler}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          "& .MuiBackdrop-root":{
           background: "transparent"

          }
          // opacity:''
        }}
      >
        <Box sx={style} className='rounded-sm w-[80vw]'>
  <div className='grid grid-cols-5 gap-3'>
    {/* Column 1 */}
    <div className='col-span-1 m-5'>
      <span className='block text-[14px] text-black pb-1.5'><b>Televisions</b><span><ArrowRightIcon className='!text-[20px] !text-slate-400'/></span></span>
      <span className='block text-[14px] text-slate-600 pb-1.5'><b>New Launches</b></span>
      <span className='block text-[14px] text-slate-600 pb-1.5'><b>Smart & Ultra HD</b></span>
      <span className='block text-[14px] text-slate-600 pb-1.5'><b>Top Brands</b></span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Mi</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Vu</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Thomson</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Samsung</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>iFFALCON by TCL</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Nokia</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>LG</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>realme</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Motorola</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'><b>Shop by Screen Size</b></span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>24 & below</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>28-32</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>39-43</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>48-55</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>60 & above</span>
    </div>

    {/* Column 2 */}
    <div className=' '>
    <div className='col-span-1 pl-5 pt-5 !pb-[16px] bg-slate-50'>
    <span className='block text-[14px] text-black pb-1.5'><b>Wahing Machine</b><span><ArrowRightIcon className='!text-[20px] !text-slate-400'/></span></span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Fully Automatic Front Load</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Semi Automatic Front Load</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Fully Automatic Top Load</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'><b>Air Conditioners</b></span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Inverter AC</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Split ACs</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Window ACs</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'><b>Shop By Brand</b></span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>LG</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Hitachi</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Carrier</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'><b>Refrigertators</b></span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Single Door</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Double Door</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Triple Door</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Side by Side</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Convertible</span>
    </div>
    </div>

    {/* Column 3 */}
    <div className='col-span-1 m-5 '>
    <span className='block text-[14px] text-black pb-1.5'><b>Kitchen Appliances</b><span><ArrowRightIcon className='!text-[20px] !text-slate-400'/></span></span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Microwave Ovens</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Oven Toaster Grills (OTG)</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Juicer/Mixer/Grinder</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Electric Kettle</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Induction Cooktops</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Chimneys</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Hand Blenders</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Sandwich Makers</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Pop Up Toasters</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Electric Cookers</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Wet Grinders</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Food Processors</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Coofee Makers</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Dishwashers</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'><b>Healthy Living Appliances</b></span>
    </div>

    {/* Column 4 */}
    <div  className=''>
    <div className='col-span-1 pl-5 pt-5 pb-3  bg-slate-50'>
    <span className='block text-[14px] text-slate-600 pb-1.5'><b>Small Home Appliances</b></span>
    <span className='block text-[14px] text-black pb-1.5'>Irons</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Water Purifiers</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Fans</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Air Coolers</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Inverters</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Vacuum Cleaners</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Sewing Machines</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Voltage Stabilizers</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Water Geysers</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Immersion Rods</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'><b>Top Brans</b></span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Livpure</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Philips</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Bajaj</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>IFB</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Eureka Forbes</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Kaff</span>
    </div>
    </div>

    {/* Column 5 */}
    <div className='col-span-1 p-5'>
    <span className='block text-[14px] text-black pb-1.5'><b>Buying Guides</b><span><ArrowRightIcon className='!text-[20px] !text-slate-400'/></span></span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Televisions</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Washing Machines</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Refrigerators</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Air Conditioners</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Water Purifiers</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Air Purifiers</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Chimneys</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Water Geysers</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'><b>New Launches</b></span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Coocaa Smart TVs</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Nokia(55) $k Android TV</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Mi (32) 4A Pro Android TV</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>MarQ (43) FHD Smart TV</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>LG Refrigerators</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Thomson (40) $k Smart TV</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Whirlpool Refrigerators</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Kodak(22)|(32) LED TVs</span>
    </div>
  </div>
</Box>

      </Modal>


      {/* Mens */}


      <Modal
        open={menOpen}
        onClose={menCloseHandler}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          "& .MuiBackdrop-root":{
           background: "transparent"

          }
          // opacity:''
        }}


      >
        <Box sx={style} className='rounded-sm w-[80vw]'>
  <div className='grid grid-cols-5 gap-3'>
    {/* Column 1 */}
    <div className='col-span-1 m-5'>
      <span className='block text-[14px] text-black pb-1.5'><b>Footwear</b><span><ArrowRightIcon className='!text-[20px] !text-slate-400'/></span></span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Sports Shoes</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Casual Shoes</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Formal Shoes</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Sandals & Floaters</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Flips-Flops</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Loafers</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Boots</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Running Shoes</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Sneakers</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'><b>Mens's Grooming</b></span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Deodrants</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Perfumes</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Beard Care & Grooming</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Shaving & Aftershave</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Sexual Wellness</span>
    </div>

    {/* Column 2 */}
    <div className=' '>
    <div className='col-span-1 pl-5 pt-5 !pb-[16px] bg-slate-50'>
    <span className='block text-[14px] text-black pb-1.5'><b>Clothings</b><span><ArrowRightIcon className='!text-[20px] !text-slate-400'/></span></span>
      <span className='block text-[14px] text-slate-600 pb-1.5'><b>Top wear</b></span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>T-Shirts</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Formal Shirts</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Casual Shirts</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'><b>Bottom wear</b></span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Jeans</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Casual Trousers</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Formal Trousers</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Track pants</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Shorts</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Cargos</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Three Fourths</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'><b>Suits,Blazers & Waistcoats</b></span>
      <span className='block text-[14px] text-slate-600 pb-1.5'><b>Ties,Socks,Caps & More</b><span><ArrowRightIcon className='!text-[20px] !text-slate-400'/></span></span>
      <span className='block text-[14px] text-slate-600 pb-1.5'><b>Fabrics</b></span>
    </div>
    </div>

    {/* Column 3 */}
    <div className='col-span-1 m-5 '>
    <span className='block text-[14px] text-black pb-1.5'><b>Winter wear</b><span><ArrowRightIcon className='!text-[20px] !text-slate-400'/></span></span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Sweatshirts</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Jackets</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Sweaters</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Tracksuits</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'><b>Ethnic wear</b></span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Kurta</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Ethnic Set</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Sherwanis</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Ethnic Pyjama</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Dhoti</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Lungi</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'><b>Innerwear & Loungewear</b></span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Briefs & Trunks</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Vests</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Boxers</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Pyjamas and Lounge Pants</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Thermals</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Night Suits</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'><b>Raincoats & Windcheaters</b></span>
    </div>

    {/* Column 4 */}
    <div  className=''>
    <div className='col-span-1 pl-5 pt-5 pb-3  bg-slate-50'>
    <span className='block text-[14px] text-black pb-1.5'><b>Watches</b><span><ArrowRightIcon className='!text-[20px] !text-slate-400'/></span></span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Fastrack</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Casio</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Titan</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Fossil</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Sonata</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'><b>Accessories</b><span><ArrowRightIcon className='!text-[20px] !text-slate-400'/></span></span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Backpacks</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Wallets</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Belts</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Sunglasses</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Luggage & Travel</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Frames</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Jewellery</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'><b>Sports & Fitness Store</b><span><ArrowRightIcon className='!text-[20px] !text-slate-400'/></span></span>
    </div>
    </div>

    {/* Column 5 */}
    <div className='col-span-1 p-5'>
    <span className='block text-[14px] text-black pb-1.5'><b>Smarts Watches</b><span><ArrowRightIcon className='!text-[20px] !text-slate-400'/></span></span>
      <span className='block text-[14px] text-slate-600 pb-1.5'><b>Smart Bands</b></span>
      <span className='block text-[14px] text-slate-600 pb-1.5'><b>Personal Care Appliances</b></span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Trimmers</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Shavers</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Grooming Kits</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Featured</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Watches Store</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Footwear Club</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Bags & Wallets</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>T-Shirt Store</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Adidas</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Beardo</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Reebok</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Skechers</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Nike</span>
    </div>
  </div>
</Box>

      </Modal>



      {/* Women */}


      <Modal
        open={womenOpen}
        onClose={womenCloseHandler}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"

        sx={{
          "& .MuiBackdrop-root":{
           background: "transparent"

          }
          // opacity:''
        }}
      >
        <Box sx={style} className='rounded-sm w-[80vw]'>
  <div className='grid grid-cols-5 gap-3'>
    {/* Column 1 */}
    <div className='col-span-1 m-5'>
      <span className='block text-[14px] text-black pb-1.5'><b>Clothing</b><span><ArrowRightIcon className='!text-[20px] !text-slate-400'/></span></span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Women Western & Maternity</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Topwear</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Dresses</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Jeans</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Shorts</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Skirts</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Jeggings & Tights</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Trousers & Capris</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'><b>Lingerie & Sleepwear</b></span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Bras</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Panties</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Lingerie Sets</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Night Dresses & Nighties</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Shapewear</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Carnisoies & slips</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'><b>Swim & Beachwear</b></span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Part Dresses</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Sports Wear</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Winter Wear</span>
    </div>

    {/* Column 2 */}
    <div className=' '>
    <div className='col-span-1 pl-5 pt-5 !pb-[16px] bg-slate-50'>
    <span className='block text-[14px] text-black pb-1.5'><b>Ethnic Wear</b><span><ArrowRightIcon className='!text-[20px] !text-slate-400'/></span></span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Sarees</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Kurtas & Kurtis</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Dress Material</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Lehenga Choli</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Blouse</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>kurta Sets & Salwar Suits</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Gowns</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Dupattas</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'><b>Ethnic Bottoms</b></span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Leggings & Churidars</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Palazzos</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Shararas</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Salwars & Patiala</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Dhoti Pants</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Ethnic Trousers</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Saree Shapewear & Petticoats</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Motorola g8 power lite</span>
    </div>
    </div>

    {/* Column 3 */}
    <div className='col-span-1 m-5 '>
    <span className='block text-[14px] text-black pb-1.5'><b>Footwear</b><span><ArrowRightIcon className='!text-[20px] !text-slate-400'/></span></span>
    <span className='block text-[14px] text-black pb-1.5'><b>Sandals</b><span><ArrowRightIcon className='!text-[20px] !text-slate-400'/></span></span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Flats</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Heels</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Wedges</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'><b>Shoes</b></span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Sports Shoes</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Casual Shoes</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Boots</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'><b>Ballerinas</b></span>
      <span className='block text-[14px] text-slate-600 pb-1.5'><b>Slippers & Flip-Flop's</b></span>
      <span className='block text-[14px] text-slate-600 pb-1.5'><b>Watches</b></span>
      <span className='block text-[14px] text-slate-600 pb-1.5'><b>Smart Watches</b></span>
      <span className='block text-[14px] text-slate-600 pb-1.5'><b>Personal Care Appliances</b></span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Hair Straightners</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Hair Dryers</span>
    </div>

    {/* Column 4 */}
    <div  className=''>
    <div className='col-span-1 pl-5 pt-5 pb-3  bg-slate-50'>
    <span className='block text-[14px] text-slate-600 pb-1.5'><b>Beauty & Grooming</b></span>
    <span className='block text-[14px] text-black pb-1.5'>Make Up</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Skin Care</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Hair Care</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Bath & Spa</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Deodrants & Perfumes</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'><b>Jewellery</b></span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Artificial Jewellery</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Silver Jewellery</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Precious Jewellery</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Coins and Bars</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'><b>Accessories</b></span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Handbags</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Shoulder Bags</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Totes</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Sling bags</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Clutches</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Wallets & Belts</span>
      {/* <span className='block text-[14px] text-slate-600 pb-1.5'>Luggage & Travel</span> */}
      {/* <span className='block text-[14px] text-slate-600 pb-1.5'>Sunglasses</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Frames</span> */}
    </div>
    </div>

    {/* Column 5 */}
    <div className='col-span-1 p-5'>
    <span className='block text-[14px] text-black pb-1.5'><b>Featured</b><span><ArrowRightIcon className='!text-[20px] !text-slate-400'/></span></span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Forever 21</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Accessorize</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>W</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Pantaioons</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Chemistry</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Lakme</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Nivea</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Catwalk</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Titan-Raga</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'><b>Fastrack</b></span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Divastri</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Rare Roots</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Anmi</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Coins & Bars</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Crocs</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'><b>Trending today!</b></span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Ruffles & Frits</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Pastel Kurta & Kurtis</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Designer Net Sarees</span>
    </div>
  </div>
</Box>

      </Modal>




      {/* Baby & kids */}

      <Modal
        open={babyOpen}
        onClose={babyCloseHandler}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"

        sx={{
          "& .MuiBackdrop-root":{
           background: "transparent"

          }
          // opacity:''
        }}
      >
        <Box sx={style} className='rounded-sm w-[80vw]'>
  <div className='grid grid-cols-5 gap-3'>
    {/* Column 1 */}
    <div className='col-span-1 m-5'>
      <span className='block text-[14px] text-black pb-1.5'><b>Kid's Clothing</b><span><ArrowRightIcon className='!text-[20px] !text-slate-400'/></span></span>
      <span className='block text-[14px] text-slate-600 pb-1.5'><b>Boy's Clothing</b></span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>T-Shirt</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Ethics Wear</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Shorts</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Shirts</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Inner Wear</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Jegging's & Tights</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Trousers & Capris</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'><b>Baby Boy's Clothing</b></span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Dress & Shirts</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Ethic Wear</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>T-Shirts</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Inner Wear</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'><b>Baby Girl's</b></span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Combos Set</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Dress & Gowns</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Innerwear</span>
    </div>

    {/* Column 2 */}
    <div className=' '>
    <div className='col-span-1 pl-5 pt-5 !pb-[16px] bg-slate-50'>
    <span className='block text-[14px] text-black pb-1.5'><b>Kids' Footwear</b><span><ArrowRightIcon className='!text-[20px] !text-slate-400'/></span></span>
      <span className='block text-[14px] text-slate-600 pb-1.5'><b>Boys' Footwear</b></span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Sandals</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Sport Shoes</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'><b>Girls' Footwear</b></span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Flats & Bellies</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Sport Shoes</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'><b>Infant Footwear</b></span>
      <span className='block text-[14px] text-slate-600 pb-1.5'><b>Character Shoes</b></span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Kids' Watches</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'><b>Kids' Sunglasses</b><span><ArrowRightIcon className='!text-[20px] !text-slate-400'/></span></span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Boys' Winter Wear</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Boys' Sweatshirts</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Boys' Jacket</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'><b>Girls' Winter Wear</b><span><ArrowRightIcon className='!text-[20px] !text-slate-400'/></span></span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Girls' Sweatshirts</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Girls' Jackets</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Infant Winter Wear</span>
    </div>
    </div>

    {/* Column 3 */}
    <div className='col-span-1 m-5 '>
    <span className='block text-[14px] text-black pb-1.5'><b>Toys</b><span><ArrowRightIcon className='!text-[20px] !text-slate-400'/></span></span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Remote Control Toys</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Soft Toys </span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Cars & Die-cast Vehicles</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Outdoor Toys</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Action Figure</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Board Games</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Musical Toys</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Dolls & Doll Houses</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Puzzels</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>S.T.E.M Toys</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Helicopter & Drones</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Toy Guns</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Party Supplies</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>School Bags</span>
    </div>

    {/* Column 4 */}
    <div  className=''>
    <div className='col-span-1 pl-5 pt-5 pb-3  bg-slate-50'>
    <span className='block text-[14px] text-black pb-1.5'><b>Baby Care</b><span><ArrowRightIcon className='!text-[20px] !text-slate-400'/></span></span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Diapers</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Wipes</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Diapering & Potty Training</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Baby Bath, Hair & Skin Care</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Baby Grooming</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Baby Bathing Accessories</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Baby Gift Sets & Combo</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Baby Oral Care</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Nursing & Breast Feeding</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Baby Food</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Baby Feeding Bottle & Accessories</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Baby Bedding</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Baby Gear</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Baby Medical & Health Care</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Baby Proofing & Safety</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Baby Cleaners & Detergents</span>
    </div>
    </div>

    {/* Column 5 */}
    <div className='col-span-1 p-5'>
    <span className='block text-[14px] text-black pb-1.5'><b>Featured brands</b><span><ArrowRightIcon className='!text-[20px] !text-slate-400'/></span></span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Miss & Chief</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Barbie</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Disney</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>United Colors of Benetton</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>The Children's Place</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>US Polo</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Flying Machine</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Crocs</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Puma</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Funskool</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Lego</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Luvlap</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Mamy Poko</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Mee Mee</span>
    </div>
  </div>
</Box>

      </Modal>



      {/* Home & Furniture */}


      <Modal
        open={homeOpen}
        onClose={homeCloseHandler}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"

        sx={{
          "& .MuiBackdrop-root":{
           background: "transparent"

          }
          // opacity:''
        }}
      >
        <Box sx={style} className='rounded-sm w-[80vw]'>
  <div className='grid grid-cols-5 gap-3'>
    {/* Column 1 */}
    <div className='col-span-1 m-5'>
      <span className='block text-[14px] text-black pb-1.5'><b>Kitchen, Cookware & Serveware</b><span><ArrowRightIcon className='!text-[20px] !text-slate-400'/></span></span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Pans</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Tawas</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Pressure Cookers</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Kitchen Tools</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Gas Stoves</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'><b>Tableware & Dinnerware</b></span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Coffee Mugs</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Dinner Set</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Barware</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'><b>Kitchen Storage</b></span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Water Bottles</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Lunch Boxes</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Flasks</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Casseroles</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Kitchen Containers</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'><b>Cleaning Supplies</b></span>
    </div>

    {/* Column 2 */}
    <div className=' '>
    <div className='col-span-1 pl-5 pt-5 !pb-[16px] bg-slate-50'>
    <span className='block text-[14px] text-black pb-1.5'><b>Furniture Top Offers</b><span><ArrowRightIcon className='!text-[20px] !text-slate-400'/></span></span>
      <span className='block text-[14px] text-slate-600 pb-1.5'><b>Bed Room Furniture</b></span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>bed</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Mattresses</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Wardrobes</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'><b>Living Room Furniture</b></span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Sofa</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Sofa Bed</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>TV Units</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Dining Tables & Chairs</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Coffee Tables</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Shoes Racks</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Office & Study Furniture</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Kids Room Furniture</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'><b>DIY Furniture</b><span><ArrowRightIcon className='!text-[20px] !text-slate-400'/></span></span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Bean Bags</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Collapsible Wardrobes</span>
    </div>
    </div>

    {/* Column 3 */}
    <div className='col-span-1 m-5 '>
    <span className='block text-[14px] text-black pb-1.5'><b>Furnishing</b><span><ArrowRightIcon className='!text-[20px] !text-slate-400'/></span></span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Bedsheets</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Curtains</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Cushions & Pilows</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Blankets</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Bath Towels</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Kitchen & Table Line</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Floor Coverings</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'><b>Smart Home Automation</b></span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Smart Security System</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Smart Door Locks</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'><b>Home Improvements</b></span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Tools & Measuring Equipments</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Home Utilits & Organizers</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Bathroom & Kitchen Fitting</span>
    </div>

    {/* Column 4 */}
    <div  className=''>
    <div className='col-span-1 pl-5 pt-5 pb-3  bg-slate-50'>
    <span className='block text-[14px] text-black pb-1.5'><b>Home Decor</b><span><ArrowRightIcon className='!text-[20px] !text-slate-400'/></span></span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Paintings</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Clocks</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Wall Shelves</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Stickers</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Showpieces & Figurines</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'><b>Home Lighting</b></span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Bulbs</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Wall Lamp</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Table Lamp</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Celling Lamp</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Emergency Lights</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'><b>Festive Decor's & Gifts</b><span><ArrowRightIcon className='!text-[20px] !text-slate-400'/></span></span>
      <span className='block text-[14px] text-slate-600 pb-1.5'><b>Pet Supplies</b></span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Dogs</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Cats</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Fish & Aquates</span>
    </div>
    </div>

    {/* Column 5 */}
    <div className='col-span-1 p-5'>
    <span className='block text-[14px] text-black pb-1.5'><b>Durability Certified Furniture</b><span><ArrowRightIcon className='!text-[20px] !text-slate-400'/></span></span>
      <span className='block text-[14px] text-slate-600 pb-1.5'><b>Featured</b></span>
      <span className='block text-[14px] text-slate-600 pb-1.5'><b>Christmas Store</b></span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Mugs Store</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'><b>Gardening Store</b></span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Stainless Steel Store</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Milton</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Bombay Dyeing</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>@home</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>HomeTown</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Ajanta</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Spaces by Welspun</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Prestige</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'><b>Perfect Home Store</b></span>
    </div>
  </div>
</Box>

      </Modal>



      {/* Sports,Books & More */}


      <Modal
        open={sportsOpen}
        onClose={sportsCloseHandler}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"

        sx={{
          "& .MuiBackdrop-root":{
           background: "transparent"

          }
          // opacity:''
        }}
      >
        <Box sx={style} className='rounded-sm w-[80vw]'>
  <div className='grid grid-cols-5 gap-3'>
    {/* Column 1 */}
    <div className='col-span-1 m-5'>
      <span className='block text-[14px] text-black pb-1.5'><b>Sports</b><span><ArrowRightIcon className='!text-[20px] !text-slate-400'/></span></span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Cricket</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Badminton</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Cycling</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Football</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Skating</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Camping & Hiking</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Swimming</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'><b>Exercise Fitness</b></span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Cardio Equipments</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Home Gyms</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Supports</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Dumbbells</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Ab Exercises</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Shakers & Sippers</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Yoga Mat</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Gym Gloves</span>
    </div>

    {/* Column 2 */}
    <div className=' '>
    <div className='col-span-1 pl-5 pt-5 !pb-[16px] bg-slate-50'>
    <span className='block text-[14px] text-black pb-1.5'><b>Food Essentials</b><span><ArrowRightIcon className='!text-[20px] !text-slate-400'/></span></span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Nuts & Dry Fruits</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Tea,Coffee and Beverages</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Chocolates</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Snacks Combos</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Gifting Combos</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Sweetd Store</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Jams, Spreads and Honey</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Breakfast items</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'><b>Health & Nutrition</b></span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>All Supplements</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Protien Supplements</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Vitamin Supplements</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Heath Drinks</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Ayurvedic Supplements</span>
    </div>
    </div>

    {/* Column 3 */}
    <div className='col-span-1 m-5 '>
    <span className='block text-[14px] text-black pb-1.5'><b>Books</b><span><ArrowRightIcon className='!text-[20px] !text-slate-400'/></span></span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Entrance Exams</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Academics</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Literature & Fiction</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Non Fiction</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Young Readers</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Self-Help</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>E-Learning</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Preorder</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Indian Languages</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'><b>Stationary</b><span><ArrowRightIcon className='!text-[20px] !text-slate-400'/></span></span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Pens</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Diaries</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Card holders</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Calculators</span>
    </div>

    {/* Column 4 */}
    <div  className=''>
    <div className='col-span-1 pl-5 pt-5 pb-3  bg-slate-50'>
    <span className='block text-[14px] text-black pb-1.5'><b>Auto Accessories</b><span><ArrowRightIcon className='!text-[20px] !text-slate-400'/></span></span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Helmets & Riding Gears</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Car Audio/Video</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Car Mobile Accessories</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Car & Bike Care</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Vehicle Lubricants</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'><b>Industrial Measurements Devices</b><span><ArrowRightIcon className='!text-[20px] !text-slate-400'/></span></span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Industrial Measuremernt Devices</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Industrial Testing Devices</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Lab & Scientific Products</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Packaging & Shopping Products</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Safety Products</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'><b>Medical Supplies</b><span><ArrowRightIcon className='!text-[20px] !text-slate-400'/></span></span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Pregnancy and Fertility Kits</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Hot Water Bag</span>
    </div>
    </div>

    {/* Column 5 */}
    <div className='col-span-1 p-5'>
    <span className='block text-[14px] text-black pb-1.5'><b>Music</b><span><ArrowRightIcon className='!text-[20px] !text-slate-400'/></span></span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Musical Instruments</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Music</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Movies & Tv Shows</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Gaming</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Gaming Consoles</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Gaming Accessories</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>PS4 Games</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'>Smart Glasses</span>
      <span className='block text-[14px] text-slate-600 pb-1.5'><b>Grocery (Only in Select Cities)</b></span>
    </div>
  </div>
</Box>

      </Modal>
    
    </div>
  )
}

export default SubHeader