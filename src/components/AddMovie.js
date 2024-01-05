import React, { useState } from "react";
import { TailSpin } from "react-loader-spinner";
import {addDoc} from "firebase/firestore";
 import {movieRef} from "../firebase/firebase";
import swal from "sweetalert";
const AddMovie=()=>{
    const[form, setForm]=useState({
        title:"",
        year:"",
        description:"",
        image:"",
    })

    const [loading, setLoading]=useState(false);
    const addMovie=async () =>{
      setLoading(true)
      try{
      await addDoc(movieRef, form);
      swal({
        title: "Successfully Added",
        icon:"success",
        buttons: false,
        timer:3000
      })

      
    }catch(err){
      swal({
        title: err,
        icon:"err",
        buttons: false,
        timer:3000
      })

    }
    setForm({
      title:"",
        year:"",
        description:"",
        image:"",
    })
    setLoading(false)

    }

    return(
        <>
        <section className="text-gray-600 body-font relative">
  <div className="container px-5 py-8 mx-auto">
    <div className="flex flex-col text-center w-full mb-4">
      <h1 className="sm:text-3xl text-xl font-medium title-font mb-4 text-white">
        Add New Movie
      </h1>
      
    </div>
    <div className="lg:w-1/3 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="name" className="leading-7 text-sm text-white">
             Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={form.title}
              onChange={(e)=>setForm({...form, title:e.target.value})}
              className="w-full bg-gray-100  rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="email" className="leading-7 text-sm text-gray-300">
              Year
            </label>
            <input
              type="number"
              id="year"
              name="year"
              value={form.year}
              onChange={(e)=>setForm({...form, year:e.target.value})}
              className="w-full bg-gray-100  rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-300"
            >
              Image Link
            </label>
            <input
              id="image"
              name="image"
              value={form.image}
              onChange={(e)=>setForm({...form, image:e.target.value})}
              className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-10 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              defaultValue={""}
            />
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-300"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={form.description}
              onChange={(e)=>setForm({...form, description:e.target.value})}
              className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              defaultValue={""}
            />
          </div>
        </div>
        <div className="p-2 w-full">
          <button onClick={addMovie} className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            {loading ? <TailSpin height={25} color="white"/> : "Submit"}
          </button>
        </div>
        
      </div>
    </div>
  </div>
</section>


        </>
    )
}
export default AddMovie;
