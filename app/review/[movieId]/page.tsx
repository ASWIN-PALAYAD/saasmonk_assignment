import ReviewCard from '@/components/ReviewCard'
import React from 'react'

const reviews = [
  {
    id:'1',
    movieId: '1',
    reviewer:"aswin",
    rating:6,
    review:"nice"
  },
  {
    id:'2',
    movieId: '1',
    reviewer:"aswin",
    rating:6,
    review:"nice"
  },
  
  {
    id:'3',
    movieId: '1',
    reviewer:"aswin",
    rating:6,
    review:"nice"
  },
  {
    id:'4',
    movieId: '1',
    reviewer:"aswin",
    rating:6,
    review:"nice"
  },
  {
    id:'5',
    movieId: '1',
    reviewer:"aswin",
    rating:6,
    review:"nice"
  },
  

 
  
]

const MovieReview = () => { 
  return (
    <div className='pl-8 pr-8 pt-5 flex flex-col gap-5'>
     <div className='flex justify-between'>
        <h1 className='text-gray-800 font-semibold text-4xl'>Star Wars: A New Hope</h1>
        <h1  className='text-blue-600 font-semibold text-4xl'>8.1 / 10</h1>
     </div>
      <div className='flex flex-col gap-5'>
        {reviews.map((review)=>(
          <ReviewCard key={review.id} review={review}  />
        ))}
      </div>
    </div>
  )
}

export default MovieReview