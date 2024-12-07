import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

const CategoriesCard = ({title,subCategories}) => {
    var c =0;
    console.log(title,subCategories)
    var settings = {
        infinite: false,
        speed: 500,
        dots:true,
        slidesToShow: 6,
        slidesToScroll: 6,
        initialSlide: 0,
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
        <div className='w-full mt-12 flex justify-between'>
            <h1 className='text-3xl uppercase font-bold'>{title}</h1>
            <Link to={'/collections'}>< p className='text-blue-500 text-base'>view all ...</p></Link>
        </div>
       <div className='py-7 slider-container'>
       <Slider {...settings}>
       {
            subCategories.map((item,idx)=>{
              c++;
                return(
                    <>
                    <div key={idx} className='p-4 flex flex-col justify-center items-center'>
                        <div className='p-4 bg-white rounded-full overflow-hidden'>
                        <div className='md:w-[160px] md:h-[160px] w-[140px] h-[140px] bg-zinc-500 rounded-full p-4 hover:scale-105'>
                         
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