import axios from 'axios'
import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

const ForgetPassword = () => {

    let emailRef = useRef()

    const handleSubmit = async (e) => {
        e.preventDefault()
        let obj = {
            email: emailRef.current.value
        }
        let res = await axios.post('https://jobbackend-6z5h.onrender.com/users/forgetpassword', obj)
        let data = res.data
        console.log(data)
        if (data.success) {
            toast.success(data.msg, { position: 'top-left' })
        } else {
            toast.error(data.msg, { position: 'top-left' })
        }
    }
    return (
        <div className=''>
            <form className="space-y-1 mt-10 bg-slate-300 p-8 rounded-md shadow-2xl text-[#333] max-w-md mx-auto">
                <p className="font-bold text-center text-xl mb-4"> Forget Password</p>
                <p className="font-thin">Enter your valid email</p>
                <div className="relative flex items-center">
                    <input ref={emailRef} type="email" placeholder="Enter Email" className="px-4 py-3 bg-[#f0f1f2] focus:bg-transparent w-full text-sm border outline-[#007bff] rounded transition-all" />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-4" viewBox="0 0 682.667 682.667">
                        <defs>
                            <clipPath id="a" clipPathUnits="userSpaceOnUse">
                                <path d="M0 512h512V0H0Z" data-original="#000000" />
                            </clipPath>
                        </defs>
                        <g clipPath="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                            <path fill="none" strokeMiterlimit={10} strokeWidth={40} d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z" data-original="#000000" />
                            <path d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z" data-original="#000000" />
                        </g>
                    </svg>
                </div>
                <button onClick={handleSubmit} type="submit" className="px-6 py-2.5 w-full !mt-8 text-sm bg-[#007bff] hover:bg-blue-600 text-white rounded active:bg-[#006bff]">Submit</button>
            </form>

            <div className='m-auto w-max'>
            <Link to={'/login'} className="flex mt-10 w-max items-center justify-center px-3 h-8 me-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                <svg className="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5H1m0 0 4 4M1 5l4-4" />
                </svg>
                Back to login
            </Link>
            </div>
        </div>
    )
}

export default ForgetPassword