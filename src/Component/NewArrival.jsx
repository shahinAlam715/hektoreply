import React, { useContext } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Container from './Container';
import Slider from 'react-slick';
import { FaSearchPlus, FaShoppingCart } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa6';
import { Apidata } from './ContextApi';


function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className="bg-[blue] h-[40px] w-[40px] rounded-full flex justify-center items-center absolute top-1/2 -translate-y-1/2 right-0"
      onClick={onClick}
    >
      <i><IoIosArrowForward  className='text-[#ffff] text-[24px]'/></i>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className="bg-[blue] h-[40px] w-[40px] rounded-full flex justify-center items-center absolute top-1/2 left-0 z-999 -translate-y-1/2"
      onClick={onClick}
    >
      <i><IoIosArrowBack  className='text-[#ffff] text-[24px]'/></i>
    </div>
  );
}

const NewArrival = () => {

    let info = useContext(Apidata)
    console.log(info);


  const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,

   responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
};


  return (
    <>
     <section>
        <Container>
            <div className="">
                <h2 className='2xs:text-[20px] xs:text-[28px] sm:text-[36px] lg:text-[40px] xl:text-[42px] font-bold font-josefin text-[#00009D] text-center my-[64px]'>Featured Products</h2>
            </div>
                <div className="my-[64px] overflow-hidden">

                  <Slider {...settings}>
                  {info.map((item)=>(
                  <div className="group relative w-full bg-[#F6F7FB] shadow-[0_0_15px_rgba(0,0,0,0.15)]">
                      <div className="absolute top-0 left-0 flex gap-x-2 my-3 ml-2 opacity-0 group-hover:opacity-100">
                        <div className="h-[40px] w-[40px] bg-[#EEEFFB] hover:bg-[#00009D] flex items-center justify-center rounded-full">
                          <i><FaShoppingCart  className='text-[#1389FF] hover:text-[#ffff] text-[18px]'/></i>
                        </div>
                         <div className="h-[40px] w-[40px] hover:bg-[#00009D] bg-[#EEEFFB] flex items-center justify-center rounded-full">
                          <i><FaRegHeart  className='text-[#1389FF] text-[20px] hover:text-[#ffff]'/></i>
                        </div>
                         <div className="h-[40px] w-[40px] hover:bg-[#00009D] bg-[#EEEFFB] flex items-center justify-center rounded-full">
                          <i><FaSearchPlus  className='text-[#1389FF] text-[20px] hover:text-[#ffff]'/></i>
                        </div>
                      </div>
                      <div className="pt-[64px] max-w-full 2xs:h-[150px] xl:h-auto flex justify-center">

                        <img src={item.thumbnail} alt="feauter" />

                      </div>
                      <div className="flex justify-center opacity-0 group-hover:opacity-100">
                        <button className='text-[12px] bg-[#08D15F] hover:bg-[#00009D] text-[#ffff] rounded-[4px] w-[150px] py-3 my-2'>View Details</button>
                      </div>
                      <div className="bg-[#ffff] w-full group-hover:bg-[#00009D]">
                        <div className="">
                        <h2 className='text-[#FB2E86] group-hover:text-[#ffff] text-[14px] font-bold font-Lato text-center py-4'>{item.title}</h2>
                        </div>
                        <div className="flex items-center justify-center gap-x-2 py-2">
                          <div className="h-[4px] w-[14px] bg-[#05E6B7]"></div>
                          <div className="h-[4px] w-[14px] bg-[#F701A8]"></div>
                          <div className="h-[4px] w-[14px] bg-[#00009D]"></div>
                        </div>
                        <div className="">
                          <h3 className='text-[14px] group-hover:text-[#ffff] text-[#151875] font-josefin font-medium text-center py-2'>Code - Y523201</h3>
                        </div>
                        <div className="">
                          <h4 className='text-[14px] text-[#151875] group-hover:text-[#ffff] font-Lato font-medium text-center py-2'>${item.price}</h4>
                        </div>
                      </div>
                  </div>
                  ))}
                  </Slider>
                </div>

        </Container>
    </section>
    </>
  )
}

export default NewArrival