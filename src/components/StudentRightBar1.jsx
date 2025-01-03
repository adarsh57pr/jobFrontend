import React from 'react'
import { Link } from 'react-router-dom'

const StudentRightBar1 = (props) => {
  let job = props.job
  console.log(job)

  return (
    <div className=''>
      <div className="m-5  overflow-auto w-96 rounded-lg px-5 py-3 shadow-xl shadow-teal-300">
        <div className='mb-3 rounded-md pb-4 shadow-lg'>
          <p className="my-2 text-3xl font-bold capitalize">{job.jobRole}</p>
          <img className='rounded' src={job.image} alt="" />
          <p className="text-lg font-bold underline capitalize">{job.company}</p>
          <p className="text-sm font-semibold text-gray-700 ">&#8377; {job.salary} a month</p>
          <p className="text-md font-semibold text-gray-900 mb-2 ">{job.location}</p>

          <Link to='/applyJob' state={job} className='bg-blue-600 hover:bg-blue-800 px-6 py-2 rounded text-white'>Apply now</Link>
        </div>
        <div className='h-60 overflow-auto '>
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

            </li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default StudentRightBar1
