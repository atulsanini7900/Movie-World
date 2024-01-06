import React, { useEffect, useState } from 'react'
import ReactStars from 'react-stars'
import { reviewsRef, db } from '../firebase/firebase';
import { addDoc, doc, updateDoc, query, where, getDocs } from 'firebase/firestore';
import { TailSpin, ThreeDots } from 'react-loader-spinner';
import swal from 'sweetalert';
const Review = ({ id, prevRating, userRated }) => {
    const [rating, setRating] = useState(0);
    const [loading, setLoading] = useState(false);
    const [reviewLoading, setReviewLoading] = useState(false)
    const [thought, setThought] = useState("");
    const [data, setData] = useState([]);

    const sendReview = async () => {
        setLoading(true)
        try {
            await addDoc(reviewsRef, {
                movieid: id,
                name: "nikunj",
                rating: rating,
                thought: thought,
                timestamp: new Date().getTime()
            })
            const ref = doc(db, "movies", id);
            await updateDoc(ref, {
                rating: prevRating + rating,
                rated: userRated + 1,
            })

            setRating(0);
            setThought("");
            swal({
                title: "Your Review Send",
                icon: "success",
                buttons: false,
                timer: 3000
            })



           

        }


        catch (error) {
            swal({
                title: error.message,
                icon: "error",
                buttons: false,
                timer: 3000
            })
        }
        setLoading(false)
    }
    useEffect(() => {
        async function getData() {
            setReviewLoading(true);
            let quer = query(reviewsRef, where('movieid', '==', id))
            const querySanpshot = await getDocs(quer);

            querySanpshot.forEach(doc => {
                setData((prev) => [...prev, doc.data()])
            });

            setReviewLoading(false);


        }
        getData();
    }, [id])
    return (
        <div className='mt-4 border-t-2 border-gray-700 w-full'>
            <ReactStars
                count={5}
                size={30}
                value={rating}
                isHalf={true}
                onChange={(rate) => setRating(rate)}
            />
            <input
                value={thought}
                onChange={(e) => setThought(e.target.value)}
                placeholder='Share Your Thoughts...'
                className='bg-gray-800 w-full p-2 outline-none header '
            />
            <button onClick={sendReview} className='bg-green-600 flex justify-center mt-1 w-full p-1 '>{loading ? <TailSpin height={25} color='white' width={20} /> : 'Share'}</button>


            {
                reviewLoading ? <div className='mt-6 flex justify-center'><ThreeDots height={10} color='white' /></div> :
                    <div className='mt-4 p-2'>
                        {data.map((e, i) => {
                            return (
                                <div className='bg-gray-900 p-2 w-full mt-2' key={i}>
                                    <div className='flex'>
                                        <p className='text-blue-500'>{e.name}</p>
                                        <p className='ml-2 text-xs'>{new Date(e.timestamp).toLocaleString()}</p>

                                    </div>
                                    <ReactStars
                                        count={5}
                                        size={30}
                                        value={e.rating}
                                        isHalf={true}
                                        onChange={(rate) => setRating(rate)}
                                    />
                                    <p>{e.thought}</p>
                                </div>
                            )
                        })
                        }
                    </div>

            }
        </div>
    )
}

export default Review