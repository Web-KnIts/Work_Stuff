import React from 'react'
import Hero from '../components/Hero'
import BrandCard from '../components/BrandCard'
import CategoriesCard from '../components/CategoriesCard'

const Home = ({categories}) => {
  return (
    <>
     <Hero/>
     <div className='w-full bg-zinc-200'>
        <div className='w-[90%] mx-auto '>
        <BrandCard/>
        {
          categories.map((item,idx)=>{           
            return item.subCategories.length > 0 && (
              <CategoriesCard title={item.main} subCategories={item.subCategories}/>
            )
          })
        }
        </div>
     </div>
    </>
  )
}

export default Home