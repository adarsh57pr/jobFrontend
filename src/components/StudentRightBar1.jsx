import React from 'react'
import { Link } from 'react-router-dom'

const StudentRightBar1 = (props) => {
  let job = props.job
  console.log(job)

  return (
    <div className=' py-7'>
      <div className="m-5 h-[600px] overflow-auto w-80 rounded-lg border-[15px] border-white  px-2 shadow-xl shadow-teal-300">
        <p className="text-lg font-bold capitalize">{job.company}</p>
        <img className='rounded' src={job.image} alt="" />
        <p className="mt-3 text-4xl font-bold">{job.jobRole}</p>
        <p className="text-sm font-semibold text-gray-500">{job.salary}</p>
        {/* <button className="mt-4 w-full rounded-lg border-2 border-black px-10 py-2 text-sm font-semibold hover:bg-black hover:text-white">Request a free demo</button> */}


        <p className='text-lg font-medium'>Requirements</p>
        {
          job.requirements.map((ele) => {
            return <li className="flex items-center space-x-4"><span className="h-2 w-2 ms-2 rounded-full bg-black" /><span>{ele}</span></li>

          })
        }
        <p className='text-lg font-medium'>Skills</p>
        {
          job.skills.map((ele) => {
            return <li className="flex items-center space-x-4"><span className="h-2 w-2 ms-2 rounded-full bg-black" /><span>{ele}</span></li>

          })
        }

        <hr className="my-4" />
        <ul className="space-y-2 font-semibold">
          <li className="flex items-center space-x-2 text-rose-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth={2}>
              <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
            <span>Everything from basic</span>
          </li>
          <li className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth={2}>
              <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
            <span>24/7 Support</span>
          </li>
          <li className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth={2}>
              <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
            <span>10 users</span>
            <Link to='/applyJob' state={job} className='bg-black px-4 py-1 rounded text-white'>apply</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default StudentRightBar1
