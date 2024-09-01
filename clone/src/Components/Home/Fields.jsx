import React from 'react';

function Fields() {
  return (
    <div className='relative hidden md:grid bg-white ml-3 mr-3 mb-3'>
      {/* First Grid Section */}
      <div className='grid grid-cols-3 gap-2 mb-2'>
        <div className='flex'>
          <img
            src="https://rukminim2.flixcart.com/fk-p-flap/520/280/image/21204dbb8683a739.jpg?q=20"
            alt='dino'
            className='w-full h-auto object-cover'
          />
        </div>
        <div className='flex'>
          <img
            src="https://rukminim2.flixcart.com/fk-p-flap/520/280/image/21509db443e45489.jpg?q=20"
            alt='dino'
            className='w-full h-auto object-cover'
          />
        </div>
        <div className='flex'>
          <img
            src="https://rukminim2.flixcart.com/fk-p-flap/520/280/image/6a4761c3cb785eac.jpeg?q=20"
            alt='dino'
            className='w-full h-auto object-cover'
          />
        </div>
      </div>

      {/* Second Grid Section */}
      <div className='relative grid grid-cols-3 gap-2 lg:mr-48'>
        <div className='flex w-full'>
          <img
            src="https://rukminim2.flixcart.com/fk-p-flap/450/280/image/d3bcc6c9f12a2be9.jpeg?q=20"
            alt='dino'
            className='w-full h-auto object-cover'
          />
        </div>
        <div className='flex'>
          <img
            src="https://rukminim2.flixcart.com/fk-p-flap/450/280/image/7ab69fa47e32f26f.jpeg?q=20"
            alt='dino'
            className='w-full h-auto object-cover'
          />
        </div>
        <div className='flex'>
          <img
            src="https://rukminim2.flixcart.com/fk-p-flap/450/280/image/0fa1e16950799173.jpeg?q=20"
            alt='dino'
            className='w-full h-auto object-cover'
          />
        </div>
      </div>
      <div className='absolute hidden lg:flex  bottom-0 right-0 !w-[11.5rem] lg:!h-[23vh] xl:!h-auto overflow-hidden '>
        <div className='flex w-[20rem] h-full '>
          <img
            src="https://rukminim2.flixcart.com/fk-p-flap/450/280/image/9d1c3deb5bcaa97e.jpeg?q=20"
            alt='dino'
            className=' !h-[12.5rem] !w-full'
          />
        </div>
        </div>
    </div>
  );
}

export default Fields;
