import { getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import {  ThreeDots } from 'react-loader-spinner';
import ReactStars from 'react-stars'
import { movieRef } from '../firebase/firebase';
import { Link } from 'react-router-dom';

const Cards = () => {
    const [data, setData] = useState([]);
    const [loading , setLoading] =useState(true);
    useEffect(()=>{
        async function getData(){
            setLoading(true);
            const data=await getDocs(movieRef)
            data.forEach((doc)=>{
                setData((prv)=>[...prv, {...doc.data(), id:doc.id}])
            })

            
            setLoading(false)

        }
        getData();
    },[])
    return (
        <div className='flex flex-wrap justify-between px-3 mt-2'>
           { loading?<div className='w-full flex justify-center items-center h-96'><ThreeDots height={40} color='white'/></div>:

            
                data.map((index, key) => {
                    return (
                        <Link to={`/detail/${index.id}`}>
                            <div key={key} className=' card shadow-lg p-2 hover:-translate-y-2 cursor-pointer font-medium  mt-4 transition-all duration-500  '>
                            <img alt='Move Poster' className='h-60 md:h-72' src={index.image}></img>
                            <div><h1 ><span className='text-gray-500'>Name: </span> {index.title}</h1></div>
                            
                            <h1 className='flex items-center'>
                                <span className='text-gray-500'>Rating:
                                </span>
                                <span><ReactStars
                                    value={index.rating/index.rated}
                                    edit={false}
                                    size={20} />
                                </span>
                            </h1>
                            <h1><span className='text-gray-500'>Year: </span>{index.year}</h1>
                        </div>
                        </Link>
                    )
                })
            

        }

        </div>
    )
}

export default Cards