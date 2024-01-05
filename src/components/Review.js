import React, { useState } from 'react'
import ReactStars from 'react-stars'

const Review = () => {
    const [rating, setRating]=useState(0);
    return (
        <div className='mt-4 border-t-2 border-gray-700 w-full'>
            <ReactStars
                count={5}
                size={30}
                isHalf={true}
                onChange={(rate)=>setRating(rate)}
            />
            <input
                placeholder='Share Your Thoughts...'
                className='bg-gray-800 w-full p-2 outline-none header '
            />
            <button className='bg-green-600 mt-1 w-full p-1 '>Share</button>

        </div>
    )
}

export default Review