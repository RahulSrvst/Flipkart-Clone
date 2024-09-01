import React from 'react'
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { IconButton } from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';

function SignPage() {
    const [lock,setlock] = useState("true");
    const handleLock=()=>{
        setlock(!lock)
    }
  return (
    <div className='flex justify-center bg-slate-200'>
        <div className='relative box h-[75vh] w-[60vw] shadow-md bg-white m-3 mb-5 !rounded-lg'>
        <div className='box-4 grid grid-cols-2 '>
            <div className=' relative bg-blue-600 col-span-1 rounded-l-lg '>
            <img src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fk-logo_f64bb3.png' alt='Error' className='absolute left-20 top-40 opacity-100'></img>
            <span className='absolute left-24 top-56 text-white' >Ab har <i className='text-yellow-300'>wish</i> hogi <i className='text-yellow-300'>poori</i></span>
            <img src='https://www.bearscot.com/wp-content/uploads/2021/01/sunny-day-at-the-bridges-260318.jpg' alt='Error' className='w-full h-full opacity-25 rounded-l-lg'></img>
            
            </div>
            <div>
            <div>
            <div className='absolute top-1 right-1'>
                <IconButton>
                    <CancelOutlinedIcon/>
                </IconButton>
            </div>
                <span className='text-xl font-bold pt-10 pl-7 block'>Login</span>
                <span className='text-[14px] text-slate-400 font-bold pl-7 pb-12 block'>Get access to your Order, Wishlist & Recommendations</span>

                <span className='text-sm font-bold pl-7 blcok'>Enter E-mail/Mobile number</span>
                <div className='!relative'>
                <div className='absolute top-0 right-12  '>
                    <IconButton>
                        <EmailOutlinedIcon className='!text-[24px]'/>
                    </IconButton>
                </div>
                <input type='text' placeholder='+91 9192939495' className=" border-2 border-blue-400 w-[24vw] p-1 rounded-full ml-7 mb-2"></input>
                </div>
                <br>
                </br>

                <span className='text-sm font-bold pl-7 block'>Enter Password</span>
                <div className='!relative'>
                <div className='absolute top-0 right-12  '>
                {lock ?
                        <IconButton onClick={handleLock}>
                        <VisibilityOffIcon className='!text-[24px]'/>
                    </IconButton>
            :
                        <IconButton onClick={handleLock}>
                        <VisibilityIcon className='!text-[24px]'/>
                    </IconButton>
                    }
                </div>
                <input type={`${lock ? "password" : 'text'}`} placeholder='Enter Your Password' className=" border-2 border-blue-400 w-[24vw] p-1 rounded-full ml-7 mb-2" onClick={() => setlock("false")} onEncrypted={lock} />
                </div>
                <button  className='bg-blue-500 ml-7 p-1 pl-12  pr-12 rounded-full text-white'>Login</button><button className='bg-white ml-5 p-1 pl-12  pr-12 rounded-full mb-20 text-blue-500 border-2 border-blue-400 '>SignUp</button>

                <span className='block text-[10px] text-slate-400 ml-7'>We no longer Support login via Social accounts. To Recover your old accounts</span>
                <span className='text-[10px] text-slate-400 ml-7 '>please<b className='text-[12px] text-blue-500 pl-1'>Click here</b></span>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default SignPage