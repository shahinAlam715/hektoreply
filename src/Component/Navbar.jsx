import React, { useState } from 'react'
import Container from './Container'
import hekto from "../assets/Hekto.png"
import { IoIosArrowDown, IoIosSearch } from 'react-icons/io'
import { RxCross2 } from 'react-icons/rx'
import { FaBarsStaggered } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Navbar = () => {

    let [menu, setmenu] = useState(false);
    
        let handlebar = ()=>{
            setmenu(!menu)
        }

  return (
    <>
     <section className='py-2'>
        <Container className="">
             <div className="grid relative 2xs:grid-cols-4 2xs:justify-between 2xs:items-center 2xs:px-2 xl:grid-cols-4 py-2  xl:justify-between xl:px-2 items-center">

                <div className="">
                   <div className="">
                        <img className='2xs:h-[20px] 2xs:w-[40px] xs:h-[30px] xs:w-[70px] sm:h-[40px] sm:w-[90px] md:h-[60px] md:w-[130px] lg:h-[70px] lg:w-[150px] xl:h-[30px] xl:w-[80px]' src={hekto} alt="logo" />
                   </div>
                </div>

               
                   <div className={`2xs:absolute 2xs:top-[48px] 2xs:p-2 2xs:text-center xl:static xl:bg-[#ffff] xl:col-span-2 xl:flex xl:gap-x-4 xl:justify-center ease-in-out duration-500
                    ${menu == true ? "absolute top-0 sm:top-[70px] md:top-[90px] left-[100px] xs:left-[150px] sm:left-[200px] md:left-[250px] lg:left-[300px] bg-[yellow] z-999" : "absolute top-0 left-[-400px] bg-[red]"}`}>
                        <ul className='2xs:inline-block xl:flex flex-wrap gap-x-4 cursor-pointer'>
                            <Link to="/">
                            <li className='group flex group-hover:hover:text-[#FB2E86] gap-x-2 items-center'>
                                <h3 className='2xs:text-[18px] xs:text-[20px] sm:text-[24px] md:text-[36px] lg:text-[46px] xl:text-[16px] font-Lato font-medium text-[#262626]'>Home   </h3>
                                <i className=''><IoIosArrowDown  className='text-[#262626] sm:text-[24px] xl:text-[18px] mt-1 '/></i>
                            </li>
                            </Link>

                            
                            <Link to="/product">
                            <li className='group flex group-hover:hover:text-[#FB2E86] items-center gap-x-2 '>
                                <h3 className='2xs:text-[18px] xs:text-[20px]   sm:text-[24px]   md:text-[36px] lg:text-[46px] xl:text-[16px] font-Lato font-medium text-[#262626]'>Pages   </h3>
                                <i><IoIosArrowDown  className='text-[#262626] sm:text-[24px] xl:text-[18px] mt-1 '/></i>
                            </li>
                            </Link>

                                      
                            <li className='group flex group-hover:hover:text-[#FB2E86] items-center gap-x-2 '>
                                <h3 className='2xs:text-[18px] xs:text-[20px] sm:text-[24px]  md:text-[36px]    lg:text-[46px] xl:text-[16px] font-Lato font-medium text-[#262626]'>Products</h3>
                                <i><IoIosArrowDown  className='text-[#262626] sm:text-[24px] xl:text-[18px] mt-1 '/></i>
                            </li>

                                    

                            <li className='group flex group-hover:hover:text-[#FB2E86] items-center gap-x-2 '>
                                <h3 className='2xs:text-[18px] xs:text-[20px]   sm:text-[24px]   md:text-[36px] lg:text-[46px] xl:text-[16px] font-Lato font-medium text-[#262626]'>Blog    </h3>
                                <i><IoIosArrowDown  className='text-[#262626] sm:text-[24px] xl:text-[18px] mt-1 '/></i>
                            </li>

                            <li className='group flex group-hover:hover:text-[#FB2E86] items-center gap-x-2 '>
                                <h3 className='2xs:text-[18px] xs:text-[20px]   sm:text-[24px]   md:text-[36px] lg:text-[46px] xl:text-[16px] font-Lato font-medium text-[#262626]'>Shop   </h3>
                                <i><IoIosArrowDown  className='text-[#262626] sm:text-[24px] xl:text-[18px] mt-1 '/></i>
                            </li>


                            <li className='group flex group-hover:hover:text-[#FB2E86] items-center gap-x-2 '>
                                <h3 className='2xs:text-[18px] xs:text-[20px]   sm:text-[24px]   md:text-[36px] lg:text-[46px] xl:text-[16px] font-Lato font-medium text-[#262626]'>Contact</h3>
                                <i><IoIosArrowDown  className='text-[#262626] sm:text-[24px] xl:text-[18px] mt-1 '/></i>
                            </li>
                        </ul>
                   </div>
                

                <div className="2xs:col-span-2 xl:col-span-1 xl:flex xl:justify-end relative">
                    <div className="w-full">
                   <form>
                        <input className='2xs:w-full 2xs:text-[10px] 2xs:p-2 xs:text-[12px] sm:text-[18px] md:text-[28px] lg:text-[36px] xl:text-[16px] xl:w-full xl:p-2 bg-[#FB2E86] text-[#ffff] outline-none' type="text" placeholder='Search your product' />
                   </form>
                    </div>
                   <div className="bg-[blue] 2xs:p-1 xl:p-2 text-center xl:pt-2 absolute top-0 right-0">
                        <i><IoIosSearch  className='text-[#ffff] 2xs:text-[22px] xs:text-[25px] sm:text-[34px] md:text-[50px] lg:text-[61px] xl:text-[24px]'/></i>
                   </div>

                </div>

                <div className="2xs:flex 2xs:justify-end xl:hidden" onClick={handlebar}>
                    {menu == true ? <i><RxCross2 className='2xs:text-[24px] 2xs:text-[#262626] xs:text-[26px] sm:text-[30px] md:text-[40px] lg:text-[50px]'/></i> : <i>< FaBarsStaggered className='2xs:text-[24px] 2xs:text-[#262626] xs:text-[26px] sm:text-[30px] md:text-[40px] lg:text-[50px]'/></i>}
                    
                </div>

            </div>

        </Container>
    </section>
    </>
  )
}

export default Navbar