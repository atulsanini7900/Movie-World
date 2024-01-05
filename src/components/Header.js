import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className='text-2xl flex justify-between italic font-bold p-3 border-b-2 border-gray-500'>
     <Link to={"/"}><span><span className="text-red-500 ">Movie</span>World</span></Link> 
      <Link to={"/addmovie"}>
        <h1 className='text-lg cursor-pointer'>
          <button>
            <AddIcon className='mr-2' color='inherit' /> Add New
          </button>
        </h1>
      </Link>

    </div>
  )
}

export default Header