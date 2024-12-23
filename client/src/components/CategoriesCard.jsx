import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const CategoriesCard = ({title,subCategories,mainCat}) => {
  var c =0
    var settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      initialSlide: 0,
      focusOnSelect: true,
      dots:true,
      slidesToScroll: 6,
      className: "center",
      centerPadding: "60px",
      slidesToShow: 6,
        responsive: [
            {
                breakpoint:1280,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    infinite: true,
                    dots: true
                  }
            },
            {
              breakpoint: 1080,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                initialSlide: 0
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            }
          ]}

  return (
    <div className='text-[#707070]'>
        <div className='w-auto mt-12 flex justify-between'>
            <h1 className='text-xl md:text-2xl uppercase font-bold'>{title}</h1>
            <Link to={'/collections'}>< p className='text-blue-500 text-base'>view</p></Link>
        </div>
       <div className='py-7 slider-container'>
       <Slider {...settings}>
       {
            subCategories.map((item,idx)=>{
              c++;
                return(
                    <div key={idx}> 
                    <div className='p-4 flex flex-col justify-center items-center ml-4'>
                        <div className='p-4 bg-white rounded-full overflow-hidden'>
                        <div className='md:w-[160px] md:h-[160px] w-[120px] h-[120px] bg-zinc-white b rounded-full p-4 hover:scale-105 overflow-hidden'>
                        <Link draggable={false} to={`/collections/${item}`} className='w-full h-full'><img src="https://c8.alamy.com/comp/D4GMKM/car-clutch-plate-isolated-on-a-white-background-3d-render-D4GMKM.jpg" alt="" className='w-full h-full'/></Link>
                        </div>
                        </div>
                        <p className='mt-2 text-center'>{item}</p>
                    </div> 
                    </div>
                )
            })
        }
        </Slider>
       </div>
    </div>
  )
}

export default CategoriesCard