import React from 'react'
import Slider from 'react-slick'
import mainbanner from "../assets/mainbanner.png"

const Banner = () => {

    const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1500,
    cssEase: "linear"
  }

  return (
    <>
      <section className="w-full overflow-hidden bg-[#F2F0FF]">

      <Slider {...settings}>
        <div className="w-full">
          <img
            src={mainbanner}
            alt="banner"
            className="w-full block 2xs:object-contain md:h-[450px] lg:h-[650px] object-cover"
          />
        </div>

        <div className="w-full">
          <img
            src={mainbanner}
            alt="banner"
            className="w-full block 2xs:object-contain md:h-[450px] lg:h-[650px] object-cover"
          />
        </div>
      </Slider>

    </section>
    </>
  )
}

export default Banner