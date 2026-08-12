import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetail = () => {

    const params = useParams();
    
    
  return (
    <div className='font-bold text-5xl absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] uppercase tracking-widest text-center'>{params.id} Course Detail</div>
  )
}

export default CourseDetail