import React, { useState } from 'react'
import CompanySidebar from '../../components/CompanySidebar';
import { useSelector } from 'react-redux';
import axios from 'axios'
import { toast } from 'react-toastify'


const CreateJob = () => {

  let userStore = useSelector((state) => state.user)
  // console.log(userStore)
  const [details, setdetails] = useState({
    title: "",
    description: "",
    company: "",
    jobRole: "",
    salary: "",
    requirements: [],
    skills: [],
    image: "", location: "",
    ShiftAndSchedule: "",
    lastDateOfApply: "",
    jobType: ""

  });
  // console.log(details)

  const [image, setImage] = useState('')

  // const handleFileChanger = (e) => {
  //   let files = e.target.files[0]
  //   // console.log(files)
  //   let reader = new FileReader();
  //   reader.readAsDataURL(files);
  //   reader.onload = () => {
  //     // console.log(reader.result)
  //     setdetails({ ...details, image: reader.result })
  //   }
  //   reader.onerror = () => {
  //     // console.log("error in file reader")
  //   }
  //   setImage(files)

  // }

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
    setdetails({ ...details, image: url })
  }


  const handleInputChanger = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    // console.log(name)
    // console.log(value)
    if (name === 'skills') {
      value = e.target.value.split(',')
      // console.log(value)
    }
    if (name === 'requirements') {
      value = e.target.value.split(',')
      // console.log(value)
    }
    setdetails({ ...details, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // console.log(details)
    let res = await axios.post('https://jobbackend-6z5h.onrender.com/jobs/create', details, {
      headers: {
        'Authorization': userStore.token
      }
    })
    let data = res.data;
    if (data.success) {
      toast.success(data.msg, { position: 'top-end' })
      setdetails({
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


  // console.log(details)
  return (
    <div>
      <CompanySidebar />
      <div className='p-4 sm:ml-64'>

        <section className="max-w-4xl p-6 mx-auto bg-gray-200 mt-14 rounded-md shadow-md dark:bg-gray-800">
          <h2 className="text-lg font-semibold text-gray-900 capitalize dark:text-white">create job form</h2>
          <form>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label className="text-gray-900 ms-2 dark:text-gray-200" htmlFor="username">Job Title</label>
                <input onChange={handleInputChanger} name='title' id="username" type="text" placeholder='Enter job title..' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
              </div>
              <div>
                <label className="text-gray-900 ms-2 dark:text-gray-200" htmlFor="companyName">Company Name</label>
                <input onChange={handleInputChanger} name='company' id="companyName" type="text" placeholder='Enter company name..' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
              </div>
              <div>
                <label className="text-gray-900 ms-2 dark:text-gray-200" htmlFor="sallery">Sallery</label>
                <input onChange={handleInputChanger} name='salary' id="sallery" type="text" placeholder='Enter sallery..' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
              </div>
              <div>
                <label className="text-gray-900 ms-2 dark:text-gray-200" htmlFor="username">City</label>
                <input onChange={handleInputChanger} name='location' id="username" type="text" placeholder='Enter city..' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
              </div>
              <div>
                <label className="text-gray-900 ms-2 dark:text-gray-200" htmlFor="username">Last Date Of Apply</label>
                <input onChange={handleInputChanger} name='lastDateOfApply' id="username" type="date" placeholder='Enter last date..' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
              </div>
              <div className='flex flex-col'>
                <label className='text-gray-900 mb-2 ms-2' htmlFor="">Choose a role </label>
                <select onChange={handleInputChanger} name='jobRole' className="px-4 w-full py-2 cursor-pointer hover:bg-blue-800 dark:text-gray-200  bg-blue-950 text-white rounded-md" htmlFor="file">
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
              <div className=' mb-5 flex gap-6 items-center   w-full'>
                <div className=''>
                  <label className="px-4 py-2 cursor-pointer hover:bg-blue-800 dark:text-gray-200  bg-blue-950 text-white rounded-md" htmlFor="file">Upload Company Image</label>
                  <input onChange={handleFileChanger} name='image' id='file' type="file" hidden />
                </div>
                <div className='w-36 rounded-lg h-36 bg-white border-y-gray-300 border-2'>{image && <img className='w-36 rounded-lg h-32' src={URL.createObjectURL(image)} alt=""/>}</div>
              </div>
              <div className=''>
                <div className='flex flex-col'>
                  <label className='text-gray-900 mb-2 ms-2' htmlFor="">Shift And Schedule</label>
                  <select onChange={handleInputChanger} name='ShiftAndSchedule' className="px-4 w-full py-2 cursor-pointer hover:bg-blue-800 dark:text-gray-200  bg-blue-950 text-white rounded-md" htmlFor="file">
                    <option value="">Select a Shift</option>
                    <option value="Fullstack developer">Day</option>
                    <option value="Fullstack developer">Night</option>
                  </select>
                </div>
                <div className='flex flex-col'>
                  <label className='text-gray-900 my-2 ms-2' htmlFor="">Job Type</label>
                  <select onChange={handleInputChanger} name='jobType' className="px-4 w-full py-2 cursor-pointer hover:bg-blue-800 dark:text-gray-200  bg-blue-950 text-white rounded-md" htmlFor="file">
                    <option value="">Select a Type</option>
                    <option value="Fullstack developer">Full-Time</option>
                    <option value="Fullstack developer">Part-Time</option>
                  </select>
                </div>
              </div>
            </div>

            <div className='mt-2'>
              <label className="text-gray-900  dark:text-gray-200 ms-2" htmlFor="password">Description</label>
              <textarea onChange={handleInputChanger} name='description' id="description" className="block w-full px-4 py-2 my-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
            </div>

            <div>
              <label className="text-gray-900 dark:text-gray-200 ms-2" htmlFor="requirements">Requirements</label>
              <textarea onChange={handleInputChanger} name='requirements' id="requirements" className="block w-full px-4 py-2 my-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
            </div>
            <div>
              <label className="text-gray-900 ms-2 dark:text-gray-200" htmlFor="skills">Skills</label>
              <textarea onChange={handleInputChanger} name='skills' id="skills" className="block w-full px-4 py-2 my-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
            </div>
            <div className="flex justify-center mt-6">
              <button onClick={handleSubmit} className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
            </div>
          </form>
        </section>

      </div>

    </div>
  )
}

export default CreateJob