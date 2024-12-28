import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import axios from 'axios'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { jwtDecode } from "jwt-decode";
import StudentRightBar1 from '../../components/StudentRightBar1'
// import PDFViewer from 'pdf-viewer-reactjs';
// import PDFViewer from 'pdf-viewer-reactjs';
// npm install @react-pdf-viewer/core @react-pdf-viewer/default-layout pdfjs-dist


const ApplyJob = () => {
  let location = useLocation()
  let navigate = useNavigate()
  console.log(location)
  let job = location.state
  console.log(job)


  let userStore = useSelector((state) => state.user);
  console.log(userStore)
  let decode = jwtDecode(userStore.token);
  console.log(decode)

  const [apllicantDetails, SetapllicantDetails] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    coverletter: "",
    resume: "",
    user: "",
    job: ""
  });
  console.log(apllicantDetails)
  const handleInputChanger = (e) => {
    // e.target.name
    // e.target.value
    SetapllicantDetails({ ...apllicantDetails, [e.target.name]: e.target.value })
  }

  const handleResumeChanger = async (e) => {
    let file = e.target.files[0];
    let formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', "mediaAgain");
    formData.append("resource_type", "raw"); // Important for non-image files

    try {
      let res = await axios.post('https://api.cloudinary.com/v1_1/dsf7eyovf/upload', formData);
      let url = res.data.secure_url;
      console.log(url)
      if (url) {
        SetapllicantDetails({ ...apllicantDetails, resume: res.data.secure_url })
      }
      // console.log(res.data)
      // console.log("Uploaded URL:", url);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault()
    let obj = { ...apllicantDetails, job: location.state._id, companyId: job.userId }
    let res = await axios.post('https://jobbackend-6z5h.onrender.com/applicant/create', obj, {
      headers: {
        'Authorization': userStore.token
      }
    })

    let data = res.data
    if (data.success) {

      toast.success(data.msg, { position: 'top-left' })
      navigate('/')
    }
    else {
      toast.error(data.msg, { position: 'top-left' })
    }
  }

  return (
    <div className='bg-black text-white'>

      {/* <iframe 
    src="https://res.cloudinary.com/dsf7eyovf/image/upload/v1734939351/ynpxfcggaqgq3zbzaod9.pdf" 
    width="100%" 
    height="600" 
    frameborder="0">
</iframe> */}


      <div className="lg:w-1/2 lg:mx-10">





        {job.applicants.includes(decode._id) ? <div>Already applied to this job</div> : <form className="mt-12">
          <div className="-mx-2 md:items-center md:flex">
            <div className="flex-1 px-2">
              <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Full Name</label>
              <input onChange={handleInputChanger} value={apllicantDetails.name} name='name' type="text" placeholder="John Doe" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
            </div>
            <div className="flex-1 px-2 mt-4 md:mt-0">
              <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
              <input onChange={handleInputChanger} name='email' value={apllicantDetails.email} type="email" placeholder="johndoe@example.com" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
            </div>
          </div>
          <div className="flex-1 px-2">
            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Phone</label>
            <input onChange={handleInputChanger} name='phone' value={apllicantDetails.phone} type="text" placeholder="Phone no" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
          </div>

          <div className="w-full mt-4">
            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Address</label>
            <textarea onChange={handleInputChanger} name='address' value={apllicantDetails.address} className="block w-full h-16 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-16 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Address" defaultValue={""} />
          </div>
          <div className="w-full mt-4">
            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Cover Letter</label>
            <textarea onChange={handleInputChanger} name='coverletter' value={apllicantDetails.coverletter} className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Address" defaultValue={""} />
          </div>

          <label htmlFor="resume" className='bg-green-800 px-4 py-2 rounded-md'>Upload Resume</label>

          <div>
            <input onChange={handleResumeChanger} name='resume' type="file" id='resume' hidden placeholder='upload your resume' />
            {apllicantDetails.resume && <iframe src={apllicantDetails.resume} frameborder="0"></iframe>}
          </div>
          <button onClick={handleSubmit} className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
            submit
          </button>
        </form>}
      </div>


      <StudentRightBar1 job={job} />
    </div>
  )
}

export default ApplyJob
