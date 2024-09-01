import React from 'react';
import { IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import StorefrontIcon from '@mui/icons-material/Storefront';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import RedeemIcon from '@mui/icons-material/Redeem';
import HelpOutlineOutlined from '@mui/icons-material/HelpOutlineOutlined';
import CopyrightOutlinedIcon from '@mui/icons-material/CopyrightOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer() {
  return (
    <footer className="bg-zinc-900 text-white hidden md:flex">
      <div className="container px-14 py-4 mr-16">
        <div className="grid grid-cols-6 gap-5">
          {/* About Section */}
          <div>
            <h2 className="text-xs font-semibold mb-2 text-zinc-500">ABOUT</h2>
            <div className="text-[12px] space-y-1">
              <span className='block'>Contact Us</span>
              <span className='block'>About Us</span>
              <span className='block'>Careers</span>
              <span className='block'>Flipkart Stories</span>
              <span className='block'>Press</span>
              <span className='block'>Corporate Information</span>
            </div>
          </div>

          {/* Group Companies Section */}
          <div>
            <h2 className="text-xs font-semibold mb-2 text-zinc-500">GROUP COMPANIES</h2>
            <div className="text-[12px] space-y-1">
              <span className='block'>Myntra</span>
              <span className='block'>Cleartrip</span>
              <span className='block'>Shopsy</span>
            </div>
          </div>

          {/* Help Section */}
          <div>
            <h2 className="text-xs font-semibold mb-2 text-zinc-500">HELP</h2>
            <div className="text-[12px] space-y-1">
              <span className='block'>Payment</span>
              <span className='block'>Shipping</span>
              <span className='block'>Cancellation & Return</span>
              <span className='block'>FAQ</span>
              <span className='block'>Report Infringement</span>
            </div>
          </div>

          {/* Consumer Policy Section */}
          <div className="border-r border-zinc-700 pr-4">
            <h2 className="text-xs font-semibold mb-2 text-zinc-500">Consumer Policy</h2>
            <div className="text-[12px] space-y-1">
              <span className='block'>Cancellation & Return</span>
              <span className='block'>Terms & Use</span>
              <span className='block'>Sitemap</span>
              <span className='block'>Grievance Redressal</span>
              <span className='block'>EPR Compliance</span>
            </div>
          </div>

          {/* Mail Us Section */}
          <div>
            <h2 className="text-xs font-semibold mb-2 text-zinc-500">Mail Us</h2>
            <div className="text-[12px] space-y-1">
              <span className='block'>Flipkart Internet Private Limited,</span>
              <span className='block'>Buildings Alyssa, Begonia &</span>
              <span className='block'>Clove Embassy Tech Village,</span>
              <span className='block'>Outer Ring Road,</span>
              <span className='block'>Devarabeesanahalli Village, Bengaluru, 560103,</span>
              <span className='block pb-2'>Karnataka, India</span>
            </div>

            <h2 className="text-xs font-semibold mb-2 text-zinc-500">Social:</h2>
            <div>
              <IconButton color="inherit">
                <FacebookIcon />
              </IconButton>
              <IconButton color="inherit">
                <TwitterIcon />
              </IconButton>

              <IconButton color="inherit">
                <YouTubeIcon />
              </IconButton>
            </div>
          </div>

          {/* Registered Office Address Section */}
          <div>
            <h2 className="text-xs font-semibold mb-2 text-zinc-500">Registered Office Address</h2>
            <div className="text-[12px] space-y-1">
              <span className='block'>Flipkart Internet Private Limited,</span>
              <span className='block'>Buildings Alyssa, Begonia &</span>
              <span className='block'>Clove Embassy Tech Village,</span>
              <span className='block'>Outer Ring Road,Devarabeesanahalli Village,</span>
              <span className='block'>Bengaluru, 560103,</span>
              <span className='block'>Karnataka, India</span>
              <span className='block'>CIN: U51109KA2012PTC066107</span>
              <span className='block'>Telephone:</span>
              <span className='text-sky-700'>044-45614700</span>
              <span> / </span>
              <span className='text-sky-700'>044-67415800</span>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-zinc-700 pt-4  text-sm">
          <div className='!pl-3 !pr-3'>
          <div className='relative ' >
          <IconButton className='!text-white !text-[12px] !pl-6 !pr-10 '>
            <StorefrontIcon className='!text-yellow-500 !text-[12px] mr-2 '/> 
          Become a Seller
          </IconButton>

          <IconButton className='!text-white !text-[12px] !pl-10 !pr-10 '>
            <StarHalfIcon className='!text-yellow-500 !text-[12px] mr-2'/> 
          Advertise
          </IconButton>

          <IconButton className='!text-white !text-[12px] !pl-10 !pr-10 '>
            <RedeemIcon className='!text-yellow-500 !text-[12px] mr-2'/> 
          Gift Cards
          </IconButton>

          <IconButton className='!text-white !text-[12px] !pl-10 !pr-10 '>
            <HelpOutlineOutlined className='!text-yellow-500 !text-[12px] mr-2'/> 
          Help Center
          </IconButton>

          <IconButton className='!text-white !text-[12px] !pl-4 !pr-4 '>
            <CopyrightOutlinedIcon className='!text-white !text-[12px] mr-2'/> 
          2007-2024 Flipkart.com
          </IconButton>

          <div className='absolute bottom-2 right-0'>
          <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/payment-method-c454fb.svg " alt='Error'></img>
          </div>
          </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
