import React from 'react'
import CatalogFilter from './CatalogFilter'
import CatalogCard from './CatalogCard'
import CourseCard from '../courses/CourseCard'
import CourseList from '../courses/CourseList'

export default function CatalogList() {
  return (
    <div className='grid grid-cols-3 gap-6'>
    
      <CatalogCard />
      <CatalogCard />
      <CatalogCard />
    </div>
  )
}
