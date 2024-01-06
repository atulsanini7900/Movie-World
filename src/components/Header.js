import React, { useContext } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import { AppState } from '../App';
const Header = () => {
  const useAppState = useContext(AppState);
  return (
    <div className='text-2xl flex justify-between italic font-bold p-3 border-b-2 border-gray-500'>
      <Link to={"/"}><span><span className="text-red-500 ">Movie</span>World</span></Link>

      {useAppState.login ?
        <Link to={"/addmovie"}>
          <h1 className='text-lg cursor-pointer'>
            <button>
              <AddIcon className='mr-2' color='inherit' /> Add New
            </button>
          </h1>
        </Link>
        :
        <Link to={"/login"} className='text-lg cursor-pointer  ' >

          <button className='flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
            Login
          </button>

        </Link>
      }

    </div>
  )
}

export default Header