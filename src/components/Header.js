import React from 'react'
import AddIcon from '@mui/icons-material/Add';
const Header = () => {
  return (
    <div className='text-2xl flex justify-between italic font-bold p-3 border-b-2 border-gray-500'>
       <span><span className="text-red-500 ">Movie</span>World</span> 
        <h1 className='text-lg cursor-pointer'>
            <button>
           <AddIcon className='mr-2'color='inherit'/> Add New
            </button>
           </h1>
        </div>
  )
}

export default Header