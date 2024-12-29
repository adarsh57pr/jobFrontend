import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'

import StudentRightBar1 from '../../components/StudentRightBar1'




const Home = () => {
  let userStore = useSelector((state) => state.user)
  // console.log(userStore)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [searchDetails, setsearchDetails] = useState({
    title: "",
    location: ""
  });

  console.log(searchDetails)

  const searchChanger = (e) => {
    setsearchDetails({ ...searchDetails, [e.target.name]: e.target.value })
  }

  const [allJob, setAllJob] = useState("")
  console.log(allJob)
  const getAllJobs = async () => {

    const res = await axios.get('https://jobbackend-6z5h.onrender.com/jobs/getalljob', {
      headers: {
        'authorization': userStore.token
      }
    })
    let data = res.data
    // console.log(data)
    setAllJob(data)
  }

  const [show, setShow] = useState(!true)
  const [Viewjob, setViewJob] = useState("")
  const handleViewJob = (obj) => {
    // console.log(obj)
    setViewJob(obj)
    setShow(true)
    setIsModalOpen(true)
  }

  useEffect(() => {
    getAllJobs()
  }, [])
  const [searchJobs, setsearchJobs] = useState([]);
  const [clikedSearch, setclikedSearch] = useState(false);

  const handleJobSubmit = async () => {

    let res = await axios.get(`https://jobbackend-6z5h.onrender.com/job/searchJob?location=${searchDetails.location}&title=${searchDetails.title}`)
    let data = res.data;
    console.log(data);

    setsearchJobs(data)
    setclikedSearch(true)
  }


  return (
    <div className=''>
      <div className='py-16 w-2/3'>
      <div className='flex md:flex-row justify-center gap-4 flex-col mt-5 py-2 px-4 rounded-md w-max m-auto bg-slate-200'>
        <input onChange={searchChanger} name='title' type="text" className='px-3 py-2 border-2 rounded-md' placeholder='search a job' />
        <input onChange={searchChanger} name='location' type="text" className='px-3 py-2 border-2 rounded-md' placeholder='search a location' />
        <button onClick={handleJobSubmit} className='bg-blue-700 hover:bg-blue-900 px-4 py-1 rounded-md  text-white'>search job</button>
      </div>
        {!clikedSearch && <div className='grid md:grid-cols-2 sm:grid-cols-2 '>
          {
            allJob?.jobs?.map((ele) => {
              return <div key={ele._id} className=" bg-gray-100 w-96 mx-auto my-10 max-w-xs rounded-xl px-6 py-6 text-gray-700 shadow-xl shadow-teal-300">
                <div>
                  <img className='rounded h-40 w-80' src={ele.image} alt="" />
                  <div className="my-4 w-max rounded-md bg-blue-900 px-2 py-1 text-sm text-center font-bold text-blue-100 capitalize">{ele.company}</div>
                </div>
                <p className="mb-2 text-2xl capitalize">{ele.title}</p>
                <p className="mb-6 text-gray-600">{ele.description}</p>
                <button onClick={() => handleViewJob(ele)} className="flex items-center space-x-2 rounded-md border-2 border-blue-500 px-4 py-2 font-medium text-blue-600 transition hover:bg-blue-500 hover:text-white">
                  <span> Learn more </span>
                  <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                    <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z" clipRule="evenodd" />
                  </svg>
                  </span>
                </button>
              </div>
            })
          }
        </div>}
        {clikedSearch &&
          <div className='w-full flex flex-col items-center gap-7'>
            {
              searchJobs.length > 0 ? searchJobs.map((ele, index) => {
                return <div key={ele._id} className="w-full max-w-sm px-4 py-3 bg-white rounded-md shadow-md dark:bg-gray-800">
                  <div className="flex items-center justify-between">
                    <span className="text-sm  text-gray-800 dark:text-gray-400 capitalize font-bold">{ele.company}</span>
                    <img className='w-16 h-16 rounded-full' src={ele.image} alt="" />
                  </div>
                  <div>
                    <h1 className="mt-2 text-lg font-semibold text-gray-800 dark:text-white capitalize">{ele.title}</h1>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{ele.description}</p>
                  </div>
                  <div>
                    <div className="flex items-center mt-2 text-gray-700 dark:text-gray-200">
                      <span>Visit on:</span>
                      <a className="mx-2 text-blue-600 cursor-pointer dark:text-blue-400 hover:underline" tabIndex={0} role="link">edx.org</a>
                      <span>or</span>
                      <a className="mx-2 text-blue-600 cursor-pointer dark:text-blue-400 hover:underline" tabIndex={0} role="link">classcentral.com</a>
                    </div>
                    <div className="flex items-center justify-center mt-4">
                      <a className="mr-2 text-gray-800 cursor-pointer dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300" tabIndex={0} role="link" aria-label="twitter link">
                        <button onClick={() => handleViewJob(ele)} className='border-b-2 pb-2'>view full job detail</button>
                      </a>

                    </div>
                  </div>
                </div>

              }
              )
                : 'No match found related to this job'
            }
          </div>}
        <div className='fixed top-16 right-10'> {show === true ? <StudentRightBar1 job={Viewjob} /> : ''}</div>
      </div>

    </div>
  )
}

export default Home
