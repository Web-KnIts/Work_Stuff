import React from 'react'

const BikeCollection = () => {
    const bikeCards = [
        'Honda','Suzuki','Yamaha',
        'Tvs','Mahindra','KTM','Bajaj'
    ]

  return (
    <div className='bg-zinc-200 w-full'>
    <div className='py-8'>
        <div className='flex gap-2 items-center justify-center text-4xl mt-10 mb-4'>
            <p className='text-black font-bold'>Bike Collections</p>
        </div> 
    </div>
    <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 px-8'>
        {
       bikeCards.map((val,idx)=>{ 
        return (
            <div className='h-[35vh] bg-zinc-600 rounded-2xl transition-all duration-300 ease-in-out hover:opacity-90 flex items-center overflow-hidden justify-center relative'>
                <img src={val?.src} alt="" className='object-fit w-full h-full transition-all duration-300 ease-in-out hover:scale-125'/>
                <p className='text-white w-full text-center text-xl font-semibold absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>{val}</p>
            </div>
        )
        })}
    </div>
</div>
  )
}

export default BikeCollection