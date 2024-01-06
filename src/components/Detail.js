import React, { useEffect, useState } from 'react'
import ReactStars from 'react-stars'
import { useParams } from 'react-router-dom'
import { db } from '../firebase/firebase'
import { doc, getDoc } from 'firebase/firestore'
import { ThreeCircles } from 'react-loader-spinner'
import Review from './Review'

const Detail = () => {
    const { id } = useParams();
    const [loadding, setLoading]=useState(false);
    const [data, setData] = useState({
        title: "",
        year: "",
        image: "",
        description: "",
        rating:0,
        rated:0,
    })
    useEffect(() => {
        async function getData() {
            setLoading(true)
            const _doc = doc(db, "movies", id);

            const data = await getDoc(_doc);
            console.log(data);
            setData(data.data());
            setLoading(false)
        }
        getData();
    },[id])
    return (
        <div className='p-4 flex flex-col items-center md:items-start md:flex-row w-full justify-center'>
            { loadding ? <div className='h-96 flex w-full justify-center items-center'><ThreeCircles height={30} color='white'/></div> :
             <>
            <img className='h-96 block md:sticky top-24' src={data.image} alt={data.title} />
            <div className='md:ml-4 ml-0 w-full md:w-1/2'>
                <h1 className='text-3xl font-bold text-gray-400'>{data.title} <span className='text-xl'>({data.year})</span></h1>
                <p className='mt-2 '>
                    <ReactStars
                        count={5}
                        value={data.rating/data.rated}
                        size={24}
                        isHalf={true} />
                </p>

                <p className='mt-3'>{data.description}</p>
                <Review id={id}  prevRating={data.rating} userRated={data.rated}/>
            </div>
            </>}

        </div>
    )
}

export default Detail