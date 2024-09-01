import React from 'react'
import { useNavigate } from 'react-router-dom'

function Main() {
    const navigate = useNavigate();
  return (
    
    <div>
        <div className='bg-slate-100 grid justify-center'>
        <div className='m-8'>
        <div className='box border s shadow-black rounded-md w-[78vw] h-[62vh] bg-white'>
        <div className='grid grid-cols-2 border-b-8'>
        <div className='border-b-2 border-blue-600 w-[50%] ml-36 p-2'>
        <div className='pl-20 text-sm text-blue-600'>Flipkart</div>
        
        </div>
            <div className='pl-36 text-sm m-2'>Grocery</div>
        </div>
        <div className='flex justify-center mt-10'>
            <img src='https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90' alt='Error' className='w-[20%]'></img>
        </div>

        <div className='grid justify-center ml-10'>
            <div>
                <span className='text-sm ml-8 '>Missing Item Carts?</span>
            </div>
            <div>
                <span className='text-[12px] text-slate-800 mr-10'>Login to see the items you added previously</span>
            </div>

            <div className=' mt-4'>
                <span className='text-white text-[14px] bg-orange-500 px-14 ml-6 py-2 hover:cursor-pointer' onClick={()=>navigate("/Login")}>Login</span>
            </div>
        </div>
        </div>
        </div>

        
    </div>
    <div className=' pl-28 pb-48 p-4 border-t-2 border-slate-200 w-full bg-slate-100'>
            <span className='text-[13px] text-slate-700'>Policies:Returns Policy | Terms of use | Security | Privacy | Infringement   <span className='pl-5'> © 2007-2024 Flipkart.com   </span>       </span>
            <span className='text-[13px] text-slate-700 pl-96'>Need help? Visit the <span className='text-blue-500'>Help Center</span> or <span className='text-blue-500'>Contact Us</span></span>
    </div>
    </div>
  )
}

export default Main