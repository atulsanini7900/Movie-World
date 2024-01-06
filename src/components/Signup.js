import React, { useState } from 'react'
import { TailSpin } from 'react-loader-spinner'
import { Link } from 'react-router-dom';

const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    password: "",
  })
  const [loading, setLoading] = useState(false);
  const [otpSend, setOtpSend] = useState(false);
  const [OTP, setOTP]=useState("");
  return (
    <div className='w-full flex flex-col  mt-8 items-center'>
        <h1 className='text-xl font-bold'>Signup Now</h1>
      { otpSend ?

      <>
      <div className="p-2 md:w-1/3">
      <div className="relative">
        <label
          htmlFor="message"
          className="leading-7 text-sm text-gray-300"
        >
         Enter OTP
        </label>
        <input
         
          id="OTP"
          name="OTP"
          value={OTP}
          onChange={(e) => setOTP(e.target.value)}
          className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-10 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          defaultValue={""}
        />
      </div>
    </div>
    <div className="p-2 w-full">
            <button className="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              {loading ? <TailSpin height={25} color="white" /> : "Confirm OTP"}
            </button>
          </div>

          <div>
            <p>
              Already have an account? <Link to={"/login"}><span className='text-blue-500'>Login</span></Link>
            </p>
          </div>

    </>

      :
        <>
        
          <div className="p-2 md:w-1/3">
            <div className="relative">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-300"
              >
                Name
              </label>
              <input
                type='name'
                id="name"
                name="name"
                value={form.mobile}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-10 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                defaultValue={""}
              />
            </div>
          </div>

          <div className="p-2 md:w-1/3">
            <div className="relative">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-300"
              >
                Mobile No.
              </label>
              <input
                type='number'
                id="name"
                name="mobile"
                value={form.mobile}
                onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-10 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                defaultValue={""}
              />
            </div>
          </div>

          <div className="p-2 md:w-1/3">
            <div className="relative">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-300"
              >
                Password
              </label>
              <input
                type='password'
                id="password"
                name="password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-10 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                defaultValue={""}
              />
            </div>
          </div>

          <div className="p-2 w-full">
            <button className="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              {loading ? <TailSpin height={25} color="white" /> : "Signup"}
            </button>
          </div>

          <div>
            <p>
              Already have an account? <Link to={"/login"}><span className='text-blue-500'>Login</span></Link>
            </p>
          </div>
        </>
      }
    </div>







  )
}

export default Signup;