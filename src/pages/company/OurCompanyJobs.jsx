import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CompanySidebar from '../../components/CompanySidebar';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { Button, Modal } from 'antd';
import { toast } from 'react-toastify';

const OurCompanyJobs = () => {

  let userStore = useSelector((state) => state.user);
  console.log(userStore)


  const [jobs, setJobs] = useState([])
  const getCompanyJobs = async () => {
    let res = await axios.get('https://jobbackend-6z5h.onrender.com/jobs/getsinglejob', {
      headers: {
        'Authorization': userStore.token
      }
    })
    let data = res.data;
    console.log(data)
    setJobs(data.allJobs)
  }

  const handleJobDelete = async (id) => {
    // console.log(id)
    let res = await axios.delete(`https://jobbackend-6z5h.onrender.com/jobs/delete/${id}`, {
      headers: {
        'Authorization': userStore.token
      }
    })
    let data = res.data;
    console.log(data)
    if (data.success) {
      getCompanyJobs()
    }
  }

  const [selectedJob, setselectedJob] = useState({
    title: "",
    description: "",
    company: "",
    jobRole: "",
    salary: "",
    requirements: [],
    skills: [],
    image: "",
    location: "",
    ShiftAndSchedule: "",
    lastDateOfApply: "",
    jobType: ""

  });


  const handleSendEdit = (obj) => {
    setselectedJob(obj)
    setIsModalOpen(true)
  }

  const handleEdit = async (e) => {
    e.preventDefault()
    let res = await axios.put(`https://jobbackend-6z5h.onrender.com/jobs/update/${selectedJob._id}`, selectedJob, {
      headers: {
        'Authorization': userStore.token
      }
    })
    let data = res.data;
    setIsModalOpen(false)
    getCompanyJobs()
  }

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    getCompanyJobs()
  }, [])



  const [image, setImage] = useState('')

  const handleFileChanger = async (e) => {
    let files = e.target.files[0]
    // console.log(files)
    setImage(files)
    let formData = new FormData();
    formData.append('file', files);
    formData.append('upload_preset', 'job_portal');
    let res = await axios.post(`https://api.cloudinary.com/v1_1/dqncbfwfn/upload`, formData);
    console.log(res)
    let url = res.data.secure_url
    console.log(url)
    setselectedJob({ ...selectedJob, image: url })
  }


  const handleInputChanger = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    console.log(name)
    console.log(value)
    if (name === 'skills') {
      value = e.target.value.split(',')
      // console.log(value)
    }
    if (name === 'requirements') {
      value = e.target.value.split(',')
      // console.log(value)
    }
    setselectedJob({ ...selectedJob, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // console.log(details)
    let res = await axios.post('https://jobbackend-6z5h.onrender.com/jobs/create', selectedJob, {
      headers: {
        'Authorization': userStore.token
      }
    })
    let data = res.data;
    if (data.success) {
      toast.success(data.msg, { position: 'top-center' })
      selectedJob({
        title: "",
        description: "",
        company: "",
        jobRole: "",
        salary: "",
        requirements: [],
        skills: [],
        image: "",
        location: "",
        ShiftAndSchedule: "",
        lastDateOfApply: "",
        jobType: ""

      })
      setImage("")
    }
    else {
      toast.error(data.msg, { position: 'top-center' })
    }
  }

  return (
    <div>
      <CompanySidebar />
      <div className=' grid mt-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 pt-20 pe-5 ps-44 '>
        {
          jobs?.map((ele, i) => {
            return <div key={i} className="w-full hover:scale-105 max-w-sm px-4 py-3 bg-white rounded-md shadow-xl shadow-teal-300 dark:bg-gray-800">
              <div className="flex items-center">
                <div className='h-12 w-12 rounded-full border'>
                  {ele.image && <img src={ele.image} className='h-12 w-12 rounded-full' alt="" />}
                </div>
                <span className="text-sm ms-5 font-semibold font-dark text-gray-800 dark:text-gray-200">{ele.company}</span>

              </div>
              <div>
                <h1 className="mt-2 text-lg font-semibold text-gray-800 dark:text-white">{ele.title}</h1>
                <span>Sallary:- </span>
                <span className="px-3 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full dark:bg-blue-300 dark:text-blue-900"> {ele.salary}</span>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{ele.description}</p>
              </div>
              <div>
                <div className="flex items-center mt-2 text-gray-800 dark:text-gray-200">
                  <span>Skills:- </span>
                  <span> {ele.skills.join(' , ')}</span>
                </div>
                <div className="flex items-center mt-2 text-gray-700 dark:text-gray-200">
                  <span>Requirements:- </span>
                  <span> {ele.requirements.join(' , ')}</span>
                </div>
                <div className="flex gap-8 items-center justify-center mt-4">
                  <a className="mr-2 text-gray-800 cursor-pointer dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300" tabIndex={0} role="link" aria-label="share link">
                    <FaEdit className='text-3xl text-blue-600 hover:text-blue-700' onClick={() => handleSendEdit(ele)} />
                  </a>
                  <a className="mr-2 text-gray-800 cursor-pointer dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300" tabIndex={0} role="link" aria-label="twitter link">
                    <MdDelete className='text-3xl text-red-500 hover:text-red-600' onClick={() => handleJobDelete(ele._id)} />
                  </a>
                </div>
              </div>

            </div>
          })
        }
      </div>
      <div >
        <Modal title="" cancelButtonProps={{style:{display:'none'}}} okButtonProps={{style:{display:'none'}}} open={isModalOpen}  onCancel={handleCancel}>

          {/* <section className="max-w-4xl p-6 mx-auto bg-gray-900 mt-14 rounded-md shadow-md dark:bg-gray-800"> */}
          <h2 className="text-2xl font-bold text-gray-900 capitalize dark:text-white">create job form</h2>

          <form action='#'>

            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label className="text-gray-900 ms-2 dark:text-gray-200 font-medium" htmlFor="username">Job Title</label>
                <input value={selectedJob.title} onChange={handleInputChanger} name='title' id="username" type="text" placeholder='Enter job title..' className="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
              </div>
              <div>
                <label className="text-gray-900 ms-2 dark:text-gray-200 font-medium" htmlFor="companyName">Company Name</label>
                <input value={selectedJob.company} onChange={handleInputChanger} name='company' id="companyName" type="text" placeholder='Enter company name..' className="block w-full px-4 py-2 mt-1  text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
              </div>
              <div>
                <label className="text-gray-900 ms-2 dark:text-gray-200 font-medium" htmlFor="sallery">Sallery</label>
                <input value={selectedJob.salary} onChange={handleInputChanger} name='salary' id="sallery" type="text" placeholder='Enter sallery..' className="block w-full px-4 py-2 mt-1  text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
              </div>
              <div>
                <label className="text-gray-900 ms-2 dark:text-gray-200 font-medium" htmlFor="username">City</label>
                <input value={selectedJob.location} onChange={handleInputChanger} name='location' id="username" type="text" placeholder='Enter city..' className="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
              </div>
              <div>
                <label className="text-gray-900 ms-2 dark:text-gray-200 font-medium" htmlFor="username">Last Date Of Apply</label>
                <input value={selectedJob.lastDateOfApply} onChange={handleInputChanger} name='lastDateOfApply' id="username" type="date" placeholder='Enter last date..' className="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
              </div>
              <div className='flex flex-col'>
                <label className='text-gray-900 mb-1 ms-2 font-medium' htmlFor=""> Choose a Role </label>
                <select value={selectedJob.jobRole} onChange={handleInputChanger} name='jobRole' className="px-4 w-full py-2.5 cursor-pointer hover:bg-blue-800 dark:text-gray-200  bg-blue-950 text-white rounded-md" htmlFor="file">
                  <option value="">Select a role</option>
                  <option value="Fullstack developer">Fullstack developer</option>
                  <option value="Frontend developer">Frontend developer</option>
                  <option value="Backend developer">Backend developer</option>
                  <option value="Mern developer">Mern developer</option>
                  <option value="IOS developer">IOS developer</option>
                  <option value="Android developer">Android developer</option>
                  <option value="WordPress developer">WordPress developer</option>
                </select>
              </div>

              <div className=' mb-5 flex flex-col justify-around'>
                <div className='mt-4'>
                  <label className="px-5 w-[160px] font-medium  py-2.5 cursor-pointer hover:bg-blue-800 dark:text-gray-200  bg-blue-950 text-white rounded-md" htmlFor="file">Upload Company Image</label>
                  {<input className='' onChange={handleFileChanger} name='image' id='file' type="file" hidden />}
                  <div className='w-48 rounded-md h-24'>
                    {selectedJob.image && <img className='w-48 rounded-md h-24 mt-5' src={selectedJob.image} alt="" />}
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <label className='text-gray-900 mb-1 ms-2 font-medium' htmlFor="">Shift And Schedule</label>
                  <select value={selectedJob.ShiftAndSchedule} onChange={handleInputChanger} name='ShiftAndSchedule' className="px-4 w-full py-2.5 cursor-pointer hover:bg-blue-800 dark:text-gray-200  bg-blue-950 text-white rounded-md" htmlFor="file">
                    <option value="">Select a Shift</option>
                    <option value="Fullstack developer">Day</option>
                    <option value="Fullstack developer">Night</option>
                  </select>
                </div>

                <div className='mt-5'>
                  <label className='text-gray-900 mb-2 ms-2 font-medium' htmlFor="">Job Type</label>
                  <select value={selectedJob.jobType} onChange={handleInputChanger} name='jobType' className="px-4 w-full py-2.5 cursor-pointer hover:bg-blue-800 dark:text-gray-200  bg-blue-950 text-white rounded-md" htmlFor="file">
                    <option value="">Select a Type</option>
                    <option value="Fullstack developer">Full-Time</option>
                    <option value="Fullstack developer">Part-Time</option>
                  </select>
                </div>
              </div>
            </div>

            <div>
              <label className="text-gray-900 ms-2 dark:text-gray-200 font-medium" htmlFor="password">Description</label>
              <textarea value={selectedJob.description} onChange={handleInputChanger} name='description' id="description" className="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
            </div>

            <div>
              <label className="text-gray-900 ms-2 dark:text-gray-200 font-medium" htmlFor="requirements">Requirements</label>
              <textarea value={selectedJob.requirements} onChange={handleInputChanger} name='requirements' id="requirements" className="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
            </div>
            <div>
              <label className="text-gray-900 ms-2 dark:text-gray-200 font-medium" htmlFor="skills">Skills</label>
              <textarea value={selectedJob.skills} onChange={handleInputChanger} name='skills' id="skills" className="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
            </div>
            <div className="flex justify-center mt-6">
              <button onClick={handleEdit} className="px-8 py-2.5 font-medium leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Update</button>
            </div>
          </form>

          {/* </section> */}
        </Modal>
      </div>
    </div>
  )
}

export default OurCompanyJobs