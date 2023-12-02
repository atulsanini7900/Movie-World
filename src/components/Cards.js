import React, { useState } from 'react'
import ReactStars from 'react-stars'
const Cards = () => {
    const [data, setData] = useState([
        {
            name: "Wanda Vision",
            year: 2019,
            rating: 5,
            img: "https://i.etsystatic.com/18242346/r/il/fd61f8/2933715225/il_570xN.2933715225_a913.jpg",
        },
        {
            name: "Pathan",
            year: 2019,
            rating: 4.5,
            img: "https://m.media-amazon.com/images/I/91uzbH0vmcL.jpg",
        },
        {
            name: "Avengers EndGame",
            year: 2019,
            rating: 3.5,
            img: "https://www.movieposters.com/cdn/shop/products/108b520c55e3c9760f77a06110d6a73b_240x360_crop_center.progressive.jpg?v=1573652543",
        },
        {
            name: "Wanda Vision",
            year: 2019,
            rating: 2,
            img: "https://i.etsystatic.com/18242346/r/il/fd61f8/2933715225/il_570xN.2933715225_a913.jpg",
        },
        {
            name: "Wanda Vision",
            year: 2019,
            rating: 4,
            img: "https://i.etsystatic.com/18242346/r/il/fd61f8/2933715225/il_570xN.2933715225_a913.jpg",
        },
        {
            name: "Wanda Vision",
            year: 2019,
            rating: 3,
            img: "https://i.etsystatic.com/18242346/r/il/fd61f8/2933715225/il_570xN.2933715225_a913.jpg",
        },
        {
            name: "Wanda Vision",
            year: 2019,
            rating: 5,
            img: "https://i.etsystatic.com/18242346/r/il/fd61f8/2933715225/il_570xN.2933715225_a913.jpg",
        },
        {
            name: "Wanda Vision",
            year: 2019,
            rating: 5,
            img: "https://i.etsystatic.com/18242346/r/il/fd61f8/2933715225/il_570xN.2933715225_a913.jpg",
        },
        {
            name: "Wanda Vision",
            year: 2019,
            rating: 5,
            img: "https://i.etsystatic.com/18242346/r/il/fd61f8/2933715225/il_570xN.2933715225_a913.jpg",
        }
    ])
    return (
        <div className='flex flex-wrap justify-between p-5 mt-2'>

            {
                data.map((index, key) => {
                    return (
                        <div key={key} className=' card shadow-lg p-2 hover:-translate-y-2 cursor-pointer  font-medium  mt-4 transition-all duration-500'>
                            <img alt='Move Poster' className='h-72' src={index.img}></img>
                            <h1><span className='text-gray-500'>Name: </span>{index.name}</h1>
                            <h1 className='flex items-center'>
                                <span className='text-gray-500'>Rating:
                                </span>
                                <span><ReactStars
                                    value={index.rating}
                                    edit={false}
                                    size={20} />
                                </span>
                            </h1>
                            <h1><span className='text-gray-500'>Year: </span>{index.year}</h1>
                        </div>
                    )
                })
            }



        </div>
    )
}

export default Cards