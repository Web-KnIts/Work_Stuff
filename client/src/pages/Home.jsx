import React from 'react'
import Hero from '../components/Hero'
import BrandCard from '../components/BrandCard'
import CategoriesCard from '../components/CategoriesCard'
import { useEffect } from 'react'

const Home = ({newCategoriesData}) => {

  const newData = Object.entries(newCategoriesData).map(([key,val])=>{
  return {
    name:key,
    value:val
  }
  })
  return (
    <>
     <Hero/>
     <div className='w-full bg-zinc-200 overflow-x-hidden py-10 sm:py-0'>
        <div className='w-[90%] mx-auto '>
        {/* <BrandCard/> */}
        {
          newData.map((item,idx)=>{           
            return item.value.length > 0 && (
              <CategoriesCard title={item.name} subCategories={item.value} key={idx}/>
            )
          })
        }
        </div>
     </div>
    </>
  )
}

export default Home