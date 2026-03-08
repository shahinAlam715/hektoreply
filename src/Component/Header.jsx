import React from 'react'
import Container from './Container'
import { MdOutlineMail } from 'react-icons/md'
import { FiPhone } from 'react-icons/fi'
import { IoIosArrowDown } from 'react-icons/io'
import { CiHeart, CiUser } from 'react-icons/ci'
import { IoCartOutline } from 'react-icons/io5'

const Header = () => {
  return (
    <>
        <section className='bg-[#7E33E0] w-full'>
            <Container>
                <div className="grid 2xs:py-3 xs:py-3 sm:py-3 xl:grid-cols-2 xl:py-3">
               
                             <div className="xl:flex items-center lg:flex lg:justify-between lg:px-3 xl:gap-6 xl:justify-start cursor-pointer">
               
                               <div className="">
                                   <div className="flex items-center 2xs:gap-3 2xs:justify-center xs:gap-3 xs:justify-center lg:justify-start xl:gap-x-2">
                                     <div className="">
                                       <i><MdOutlineMail  className='text-white xs:text-[24px] sm:text-[30px] lg:text-[36px] xl:text-[16px] mt-1'/></i>
                                     </div>
                                     <div className="">
                                       <h2 className='text-white xs:text-[26px] sm:text-[36px] lg:text-[46px] xl:text-[16px] font-josefin'>mhhasanul@gmail.com</h2>
                                     </div>
                                   </div>
                               </div>
               
                                 <div className="">
                                    <div className="flex 2xs:justify-center 2xs:my-2 xs:justify-center items-center xs:gap-1 xs:my-2 sm:gap-x-3 lg:justify-end xl:my-0 xl:gap-x-2">
                                     <div className="">
                                       <i><FiPhone  className='text-white xs:text-[24px] sm:text-[30px] lg:text-[36px] xl:text-[16px] mt-1'/></i>
                                     </div>
                                     <div className="">
                                       <h2 className='text-white xs:text-[26px] sm:text-[36px] lg:text-[46px] xl:text-[16px] font-josefin'>(12345)67890</h2>
                                     </div>
                                   </div>
                                 </div>
                             </div>
               
               
                                     <div className="flex py-2 flex-wrap cursor-pointer 2xs:justify-between 2xs:gap-x-0 2xs:px-1 xs:justify-between xs:gap-x-0 xs:px-1 xl:px-0 xl:justify-between xl:gap-x-2 xl:pr-2">
               
                                       <div className="flex items-center 2xs:gap-x-0 xs:gap-x-0 xl:gap-x-1">
                                         <div className="">
                                           <h2 className='text-white 2xs:text-[18px] xs:text-[20px] sm:text-[36px] md:text-[36px] lg:text-[46px] xl:text-[16px] font-josefin'>English</h2>
                                         </div>
                                         <div className="2xs:hidden xs:hidden sm:hidden md:block xl:block">
                                           <i><IoIosArrowDown  className='text-white md:text-[30px] lg:text-[46px] lg:ml-2 xl:text-[18px] xl:mt-1'/></i>
                                         </div>
                                       </div>
               
                                        <div className="flex items-center xl:gap-x-1">
                                         <div className="">
                                           <h2 className='text-white 2xs:text-[18px] xs:text-[20px] sm:text-[36px] md:text-[36px] lg:text-[46px] xl:text-[16px] font-josefin'>USD</h2>
                                         </div>
                                         <div className="2xs:hidden xs:hidden sm:hidden md:block xl:block">
                                           <i><IoIosArrowDown  className='text-white md:text-[30px] lg:text-[46px] lg:ml-2 xl:text-[18px] mt-1'/></i>
                                         </div>
                                       </div>
               
                                        <div className="flex items-center xs:gap-x-0 xl:gap-x-1">
                                         <div className="2xs:hidden xs:hidden sm:hidden md:block xl:block">
                                           <h2 className='text-white md:text-[36px] lg:text-[46px]  xl:text-[16px] font-josefin'>Login</h2>
                                         </div>
                                         <div className="">
                                           <i><CiUser  className='text-white 2xs:text-[20px] xs:text-[24px] sm:text-[36px] lg:text-[46px] lg:ml-2 xl:text-[18px]'/></i>
                                         </div>
                                       </div>
               
                                        <div className="flex items-center xs:gap-x-0 xl:gap-x-1">
                                         <div className="2xs:hidden xs:hidden sm:hidden md:block xl:block">
                                           <h2 className='text-white md:text-[36px] lg:text-[46px]  xl:text-[16px] font-josefin'>Wishlist</h2>
                                         </div>
                                         <div className="">
                                           <i><CiHeart  className='text-white 2xs:text-[20px] xs:text-[24px] sm:text-[36px] lg:text-[46px] lg:ml-2 xl:text-[18px]'/></i>
                                         </div>
                                       </div>
               
                                        <div className="flex items-center xs:gap-x-0 xl:gap-x-1">
                                         <div className="2xs:hidden xs:hidden sm:hidden md:block xl:block">
                                           <h2 className='text-white md:text-[36px] lg:text-[46px]  xl:text-[16px] font-josefin'>Cart</h2>
                                         </div>
                                         <div className="">
                                           <i><IoCartOutline  className='text-white 2xs:text-[20px] xs:text-[24px] sm:text-[36px] lg:text-[46px] lg:ml-2 xl:text-[18px]'/></i>
                                         </div>
                                       </div>
                                     </div>
               
                           </div>
            </Container>
        </section>
    </>
  )
}

export default Header