import React, { useContext } from 'react'
import { Apidata } from './ContextApi';
import Container from './Container';
import Slider from 'react-slick';

const TopCategory = () => {

    let data = useContext(Apidata)
    
      const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
    
       afterChange: (current) => {
        const dots = document.querySelector('.disslider .slick-dots');
        const activeDot = dots?.querySelector('.slick-active');
    
        if (dots && activeDot) {
          const dotsWidth = dots.offsetWidth;
          const activeLeft = activeDot.offsetLeft;
          const activeWidth = activeDot.offsetWidth;
    
          dots.scrollTo({
            left: activeLeft - dotsWidth / 2 + activeWidth / 2,
            behavior: 'smooth',
          });
        }
      },
    
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
            <Container className="mx-2">
                <div className="">
                <h2 className='2xs:text-[20px] xs:text-[28px] sm:text-[36px] lg:text-[40px] xl:text-[42px] font-bold font-josefin text-[#00009D] text-center my-[64px]'>Top Categories</h2>
                </div>

                        <div className="">
                    <Slider {...settings} className="disslider">
               
                    {data.map((item)=>(

                    <div className="">
                    <div className="h-[275px] w-[275px] hover:bg-[#7E33E0] rounded-full relative group">
                        <div className="shadow-[0_0_15px_rgba(0,0,0,0.15)] h-[270px] w-[255px] bg-[#F6F7FB] ml-[20px] rounded-full flex justify-center items-center">
                        <img src={item.thumbnail} alt="top" />
                        </div>
                        <div className="absolute top-[210px] left-[90px] opacity-0 group-hover:opacity-100">
                          <button className='py-2 px-4 bg-[#08D15F] hover:bg-[#7E33E0] text-[#ffff] text-[16px] rounded-[5px] font-josefin font-normal'>View Shop</button>
                        </div>
                    </div>
                    <div className="">
                      <h3 className='text-center text-[18px] font-josefin font-medium py-2'>{item.title}</h3>
                      <h4 className='text-center text-[16px] font-Lato font-medium'>{item.price}</h4>
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

export default TopCategory