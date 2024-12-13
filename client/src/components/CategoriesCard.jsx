import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const CategoriesCard = ({title,subCategories}) => {
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
    afterChange: function(index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    }
        ,
        responsive: [
            {
                breakpoint:1200,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 6,
                    infinite: true,
                    dots: true
                  }
            },
            {
              breakpoint: 1024,
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
            <h1 className='text-xl sm:text-2xl md:text-3xl uppercase font-bold'>{title}</h1>
            <Link to={'/collections'}>< p className='text-blue-500 text-base'>view all ...</p></Link>
        </div>
       <div className='py-7 slider-container'>
       <Slider {...settings}>
       {
            subCategories.map((item,idx)=>{
              c++;
                return(
                    <>
                    <div key={idx} className='p-4 flex flex-col justify-center items-center ml-4'>
                        <div className='p-4 bg-white rounded-full overflow-hidden'>
                        <div className='md:w-[160px] md:h-[160px] w-[120px] h-[120px] bg-zinc-500 rounded-full p-4 hover:scale-105'>
                         
                        </div>
                        </div>
                        <p>Text-{c}</p>
                    </div> 
                    </>
                )
            })
        }
        </Slider>
       </div>
    </div>
  )
}

export default CategoriesCard