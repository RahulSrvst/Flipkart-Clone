import React from 'react'
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined';
import ReactPlayer from 'react-player';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


function Seller() {
    const playerStyle = {
        width: '25vh',
        height: '22vh',
        aspectRatio: '1 / 1', // for square aspect ratio
    };
  return (
    <div>
        <div className='border-b-2 '>
            <span className=' ml-3 mt-3  text-[12px] text-slate-500'>
            Existing Seller? Explore our product recommendations with Dhamaka Selection
            </span>
        </div>
        <div className='relative flex justify-start '>
            <img src='https://static-assets-web.flixcart.com/fk-sp-static/images/flipkart_logo_color_revamp.svg' alt='Error'  className='w-[160px] h-[40px] ml-8 mt-2'></img>
            <span className='mr-0 m-3 text-[16px] '>Sell Online</span><KeyboardArrowDownIcon className='!text-[20px] text-slate-500 mt-4'/>
            <span className='mr-0 m-3 text-[16px]'>Fees & Commision</span><KeyboardArrowDownIcon className='!text-[20px] text-slate-500 mt-4'/>
            <span className='mr-0 m-3 text-[16px]'>Grow</span><KeyboardArrowDownIcon className='!text-[20px] text-slate-500 mt-4'/>
            <span className='mr-0 m-3 text-[16px]'>Learn</span><KeyboardArrowDownIcon className='!text-[20px] text-slate-500 mt-4'/>
            <span className='mr-0 m-3 text-[16px]'>Shopsy</span><KeyboardArrowDownIcon className='!text-[20px] text-slate-500 mt-4'/>

            <div>
                <span className='absolute top-1 right-32 p-2'>Login</span>
            </div>

            <div>
                <span className='absolute top-0 right-4 bg-yellow-400 p-2.5'>Start Selling</span>
            </div>
        </div>

        <div className='relative'>
            <img src='https://static-assets-web.flixcart.com/fk-sp-static/images/prelogin/banner/Desktop_sell.webp' alt='Error'></img>
            <span className='absolute top-2 left-20 text-sm text-slate-500'>Home<ChevronRightIcon className='pl-1 pr-1'/> Sell Online</span>
            <span className='absolute top-24 left-20 text-3xl font-bold '>Sell Online With Flipkart</span>

        </div>


        <div className='ml-32 mr-36'>
        <div className='flex border shadow-lg rounded-lg justify-center '>
        <div className='border-r-2 flex flex-col items-center p-5'>
  <img 
    src='https://static-assets-web.flixcart.com/fk-sp-static/images/crore_users_revamp.svg' 
    alt='Error' 
    className='w-[8vw] h-[8vh]' 
  />
  <div className='text-[16px] font-bold text-center'>
    <span className='block'>45 crore + Flipkart</span>
    <span className='block'>customers</span>
  </div>
</div>


            <div className='border-r-2 p-5'>
                <img src='https://static-assets-web.flixcart.com/fk-sp-static/images/wallet-icon.svg' alt='Error' className='object-center ml-4 w-[8vw] h-[8vh]'></img>
                <div className='text-center text-[16px] font-bold'>
                    <span className='block'>7* days secure & regular </span>
                    <span className='block'>payments</span>
                </div>
            </div>

            <div className='border-r-2 p-5'>
                <img src='https://static-assets-web.flixcart.com/fk-sp-static/images/low-cost-icon.svg' alt='Error' className='object-center w-[8vw] h-[8vh]'></img>
                <div className='text-center text-[16px] font-bold'>
                    <span className='block'>Low cost of doing </span>
                    <span className='block'>business</span>
                </div>
            </div>

            <div className='border-r-2 p-5'>
                <img src='https://static-assets-web.flixcart.com/fk-sp-static/images/seller-support-icon.svg' alt='Error' className='items-center w-[8vw] h-[8vh] ml-5'></img>
                <div className='text-center text-[16px] font-bold'>
                    <span>One click Seller Support</span>
                </div>
            </div>

            <div className=' p-5'>
                <img src='https://static-assets-web.flixcart.com/fk-sp-static/images/shopping-bag-icon.svg' alt='Error' className='items-center w-[8vw] h-[8vh] ml-6'></img>
                <div className='text-center text-[16px] font-bold'>
                    <span className='block'>Access to The Big Billion</span>
                    <span className='block'>Days & more</span>
                </div>
            </div>

        </div>
        </div>
            <div className='m-16'>
                <span className='text-3xl font-bold text-blue-500'>Seller Success</span>
                <span className='text-3xl font-bold text-black'> Stories</span>
            </div>


            <div className='border-b-2'>
            <div className='box bg-slate-50 m-14 rounded-3xl'>
                <div className='flex m-6 p-6'>
                    <img src='https://static-assets-web.flixcart.com/fk-sp-static/images/prelogin/sellers/Raju_yellow.webp' alt='Error' className='rounded-full'></img>

                    <div className='pl-10 mt-3'>
                    <span className='text-lg block font-bold'>Raju Lunawath, Amazestore</span>
                    <span className='text-md'>Starting with just one category, their unwavering support and innovative platform empowered me to grow exponentially, expanding to six diverse categories and achieving an astounding 5x growth year on year.</span>
                    </div>
                </div>
            </div>
            </div>

            <div>
                <div className='grid grid-cols-[530px_auto] gap-6'>
                    <div className='sticky'>
                    <div className='relative pl-44 p-3'>
                        <input type='text' placeholder='     Create Account' className=' placeholder:text-blue-500 placeholder:text-lg font-bold w-[290px] pr-12 p-2 rounded-md border border-indigo-700'></input>
                        <img src='https://static-assets-web.flixcart.com/fk-sp-static/images/nav-header-revamp.svg' alt='Error' className='absolute top-5 left-5 pt-2 pl-40'></img>
                    </div>
                    <span className='text-[14px] text-slate-800 ml-48 mb-3 block'>List Products</span>
                    <span className='text-[14px] text-slate-800 ml-48 mb-3 block'>Storage and Shipping</span>
                    <span className='text-[14px] text-slate-800 ml-48 mb-3 block'>Recieve Payments</span>
                    <span className='text-[14px] text-slate-800 ml-48 mb-3 block'>Grow Faster</span>
                    <span className='text-[14px] text-slate-800 ml-48 mb-3 block'>Seller App</span>
                    <span className='text-[14px] text-slate-800 ml-48 mb-3 block'>Help & Support</span>
                    </div>

                    <div>
                        <div className='relative mb-5'>
                            <span className='block text-xl font-bold'>
                                Create Account
                            </span>

                            <div className='mr-20'>
                            <span className='text-[16px]'>
                            Creating your Flipkart seller account is a quick process, taking less than 10 minutes, and requires only 3 documents. Follow the checklist to ensure a seamless account creation experience. By having these documents ready, you can streamline the account creation process and get started on Flipkart as an online seller in no time.
                            </span>
                            </div>

                            <span className='text-[16px] block mt-4'>* for selling in all categories except for book</span>
                            <span className='text-[16px] block'>** for selling under books category</span>

                            <img src='https://static-assets-web.flixcart.com/fk-sp-static/images/prelogin/images/Desktop_2_sell.webp' alt='Error' className='absolute bottom-0 right-16 w-[8vw] h-[12vh]'></img>
                        </div>



                        <div className='box border rounded-lg mr-20 mb-3'>
                            <div className='m-3'>
                                <span className='text-[16px] font-bold block'>Don’t have a GSTIN?</span>
                                <span className='text-[14px] text-slate-500'>Follow the steps below to generate for your online business.</span>
                                <div className='flex gap-5'>
                                <img src='https://static-assets-web.flixcart.com/fk-sp-static/images/revamp-user.svg' alt='Error' ></img>
                                <div>
                                    <span className='block text-[14px]'>Register / Login to</span>
                                    <span className='block text-[14px]'>www.gst.gov.in</span>
                                </div>

                                <img src='https://static-assets-web.flixcart.com/fk-sp-static/images/prelogin/icons/FileSvg.svg' alt='Error' ></img>
                                <div>
                                    <span className='block text-[14px]'>Fill in the GST Enrollment</span>
                                    <span className='block text-[14px]'>Application Form</span>
                                </div>

                                <img src='https://static-assets-web.flixcart.com/fk-sp-static/images/prelogin/icons/Files.svg' alt='Error' ></img>
                                <div>
                                    <span className='block text-[14px]'>Submit Enrollment</span>
                                    <span className='block text-[14px]'>Application</span>
                                </div>
                                </div>
                            </div>
                        </div>

                        <div className='mr-20 mb-3'>
                            <span className='text-[14px] '>Flipkart offers a diverse range of over 3000+ categories where you can sell your products. These categories represent just a fraction of the wide variety available on Flipkart, providing ample opportunities for sellers to showcase their products to a large customer base. Here are some popular categories to consider for online selling:</span>
                        </div>


                        <div className='box border rounded-lg mr-20 mb-3 shadow-2xl'>
                            <div className='m-3'>
                                <span className='text-[16px] font-bold block mb-4 ml-3'>Popular categories to sell across India</span>       

                                <div className='grid grid-cols-3 gap-6'>
                                    <div>
                                        <div className='ml-3'>
                                            <span className='block text-[14px] text-slate-600 mb-3'>Sell Mobile Online</span>
                                            <span className='block text-[14px] text-slate-600 mb-3'>Sell Mobile Online</span>
                                            <span className='block text-[14px] text-slate-600 mb-3'>Sell Mobile Online</span>
                                            <span className='block text-[14px] text-slate-600 mb-3'>Sell Mobile Online</span>
                                            <span className='block text-[14px] text-slate-600 mb-3'>Sell Mobile Online</span>
                                            <span className='block text-[14px] text-slate-600 mb-3'>Sell Mobile Online</span>
                                        </div>
                                    </div>

                                    <div>
                                            <span className='block text-[14px] text-slate-600 mb-3'>Sell Mobile Online</span>
                                            <span className='block text-[14px] text-slate-600 mb-3'>Sell Mobile Online</span>
                                            <span className='block text-[14px] text-slate-600 mb-3'>Sell Mobile Online</span>
                                            <span className='block text-[14px] text-slate-600 mb-3'>Sell Mobile Online</span>
                                            <span className='block text-[14px] text-slate-600 mb-3'>Sell Mobile Online</span>
                                            <span className='block text-[14px] text-slate-600 mb-3'>Sell Mobile Online</span>
                                        </div>


                                        <div>
                                            <span className='block text-[14px] text-slate-600 mb-3'>Sell Mobile Online</span>
                                            <span className='block text-[14px] text-slate-600 mb-3'>Sell Mobile Online</span>
                                            <span className='block text-[14px] text-slate-600 mb-3'>Sell Mobile Online</span>
                                            <span className='block text-[14px] text-slate-600 mb-3'>Sell Mobile Online</span>
                                            <span className='block text-[14px] text-slate-600 mb-3'>Sell Mobile Online</span>
                                            <span className='block text-[14px] text-slate-600 mb-3'>Sell Mobile Online</span>
                                        </div>
                                </div>
                            </div>
                        </div>


                        <div className='box border rounded-none mr-20 mb-3 shadow-2xl bg-cyan-50'>
                            <div className='m-3'>
                            <span className='text-md font-bold block mb-4 ml-3'>List Product</span>
                            </div>

                            <div className='grid grid-cols-[290px_auto] gap-6 ml-6'>
                                <div>
                                    <span className='text-[14px]'>What is a listing? A listing refers to the process of registering your product on the Flipkart platform, making it visible to customers, and enabling them to view and purchase your product. It involves creating a detailed product page that includes essential information such as product title, description, images, pricing, and other relevant details. A well-crafted listing helps attract potential customers and facilitates the sale of your product on Flipkart.</span>
                                </div>

                                <div className='mr-5'>
                                    <img src='https://static-assets-web.flixcart.com/fk-sp-static/images/prelogin/images/screenshot_2023_05_09_at_3_17_1.webp' alt='Error'></img>
                                </div>
                            </div>

                            <div className='m-6'>
                                <TipsAndUpdatesOutlinedIcon className='text-yellow-400'/><span className='text-[14px] ml-2'>Did you know that providing precise and comprehensive information about your product, along with clear and captivating images, can increase its visibility on our platform by up to 15%.</span>
                            </div>

                            <div className='m-6'>
                                <span className='font-bold'>Listing on Flipkart can be done in 2 different ways:</span>
                            </div>
                            <div className='grid grid-cols-2 gap-6 mb-5'>
                                <div className='ml-6'>
                                    <span className='mb-2 font-bold text-sm'>1. Match with existing products</span>
                                    <div className='aspect-video'>
                                    <ReactPlayer controls url='https://youtu.be/jazZiaTb4_M' height='230px' width='350px'/>
                                    <span className='text-[14px]'>If your product is already available on Flipkart, you have the option to seamlessly link or 'Latch' onto the existing product listing. This allows you to make your product live on the platform without the need to create a separate listing.</span>
                                    </div>
                                </div>
                                <div className='mr-6 '>
                                <span className='mb-2 font-bold text-sm'>2. New Products</span>
                                    <div className='rounded-md'>
                                    <ReactPlayer controls url='https://youtu.be/oKPV5sIjXF8' height='230px' width='350px' />
                                    <span className='text-[14px]'>For products not currently available on Flipkart, you'll need to provide complete information and create a new listing with details like description, dimensions, features, images, and usage instructions.</span>
                                    </div>
                                </div>
                            </div>
                        </div>




                    </div>




                </div>
            </div>
        
    </div>
  )
}

export default Seller