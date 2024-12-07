import React from 'react'

const Collections = () => {
    var c = 0
  return (
    <div className='bg-zinc-200 w-full'>
        <div className='py-8'>
            <div className='flex gap-2 items-center justify-center text-4xl mt-10 mb-4'>
                <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-[#414141]'></p>
                <p className='text-black'>All<span className='text-yellow-700 font-bold ml-2'>Collections</span></p>
                <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-[#414141]'></p>
            </div> 
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 px-8'>
            {
            Array(20).fill(1).map((val,idx)=>{ 
                c++;   
            return (
                <div className='h-[30vh] bg-black rounded-2xl transition-opacity hover:opacity-70 flex items-center justify-center'>
                    <p className='text-white'>subCat - {c}</p>
                </div>
            )
            })}
        </div>
    </div>
  )
}

export default Collections