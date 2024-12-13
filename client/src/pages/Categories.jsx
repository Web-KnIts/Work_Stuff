import React from 'react'
import { useParams } from 'react-router-dom'

const CategoriesPage = () => {
    let {subcategory} = useParams()
  return (
    <div>{subcategory}</div>
  )
}

export default CategoriesPage