import React from 'react'

function LoginPage() {
  return (
    <div className='bg-slate-100 flex justify-center'>
  <div className="box h-[72vh] w-[54vw] shadow-sm bg-white m-3 mb-5">
    <div className="relative grid grid-cols-[325px_auto] h-full">
      <div className="bg-blue-500 col-span-1 pt-8 p-6"> 
        <div>
          <span className="text-white block font-bold text-xl mb-2">Login</span>
          <span className="text-slate-200 block text-sm mb-1">Get access to your Order,</span>
          <span className="text-slate-200 block text-sm">Wishlist and Recommendations</span>
        </div>
        <div className='absolute bottom-12 left-10'>
          <img src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png' alt='Error' />
        </div>
      </div>
      <div className='relative mt-10 ml-6'>
        <input placeholder='Enter Email/Mobile number' className='border-b-2 block w-[95%] mb-4' />
        <span className='text-[12px] text-slate-500 '>By continuing, you agree to Flipkart's <span className='text-blue-600'>Terms of Use</span> and <span className='text-blue-600'>Privacy Policy</span>.</span>
        <button className='bg-orange-500 w-[90%] m-2 ml-0.5 p-3 text-xs text-white font-bold'>Request OTP</button>
        <div className='absolute bottom-5 left-20'>
          <span className='text-[14px] text-blue-500 font-bold'>New to Flipkart? Create an account</span>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default LoginPage