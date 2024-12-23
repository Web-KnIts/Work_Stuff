import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Collections = ({data}) => {

    var c = 0
  return (
    <div className='bg-zinc-200 w-full py-5 sm:py-0'>
        <div className='py-8'>
            <div className='flex gap-2 items-center justify-center text-4xl mt-10 mb-4'>
                <p className='text-black font-bold'>All Collections</p>
            </div> 
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 px-8'>
            {
           data.map((val,idx)=>{ 
                c++;   
            return (
                <Link draggable={false} to={`/collections/${val}`} key={idx} className='h-[35vh] bg-zinc-600 rounded-2xl transition-all duration-300 ease-in-out hover:opacity-90 flex items-center overflow-hidden justify-center relative'>
                    <img src={val?.src} alt="" className='object-fit w-full h-full transition-all duration-[1500ms] ease-in-out hover:scale-125'/>
                    <p className='text-white w-full text-center text-xl font-semibold absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>{val}</p>
                </Link>
            )
            })}
        </div>
    </div>
  )
}

export default Collections