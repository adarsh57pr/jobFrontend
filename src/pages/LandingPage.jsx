import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div>
      <div className="bg-black text-gray-100 text-[15px]">
        <div className="relative lg:min-h-screen 2xl:min-h-[730px] before:absolute before:inset-0 before:w-full before:bg-black before:opacity-60" style={{ backgroundImage: 'url(https://readymadeui.com/dark-bg-image.webp)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
          <header className="py-4 px-4 sm:px-10 z-50 min-h-[70px] relative">
            <div className="lg:flex lg:items-center gap-x-2 relative">
              <div className="flex items-center shrink-0">
                <a href="javascript:void(0)"><img src="https://readymadeui.com/readymadeui-light.svg" alt="logo" className="w-40" />
                </a>
                <button id="toggleOpen" className="lg:hidden ml-auto">
                  <svg className="w-7 h-7" fill="#fff" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              <div id="collapseMenu" className="lg:ml-14 max-lg:hidden lg:!block w-full max-lg:fixed max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50 z-50">
                <button id="toggleClose" className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-black" viewBox="0 0 320.591 320.591">
                    <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z" data-original="#000000" />
                    <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z" data-original="#000000" />
                  </svg>
                </button>
                <div className="lg:flex items-center justify-end  w-full gap-6 max-lg:fixed max-lg:bg-black max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
                  <ul className="lg:flex gap-x-6 max-lg:space-y-3">
                    <li className="mb-6 hidden max-lg:block">
                      <a href="javascript:void(0)"><img src="https://readymadeui.com/readymadeui-light.svg" alt="logo" className="w-36" />
                      </a>
                    </li>
                    <li className="max-lg:border-b max-lg:py-3 px-3">
                      <a href="javascript:void(0)" className="hover:text-blue-600 text-blue-600 block transition-all">Home</a>
                    </li>
                    <li className="max-lg:border-b max-lg:py-3 px-3"><a href="javascript:void(0)" className="hover:text-blue-600 block transition-all">Team</a>
                    </li>
                    <li className="max-lg:border-b max-lg:py-3 px-3"><a href="javascript:void(0)" className="hover:text-blue-600 block transition-all">Feature</a>
                    </li>
                    <li className="max-lg:border-b max-lg:py-3 px-3"><a href="javascript:void(0)" className="hover:text-blue-600 block transition-all">Blog</a>
                    </li>
                    <li className="max-lg:border-b max-lg:py-3 px-3"><a href="javascript:void(0)" className="hover:text-blue-600 block transition-all">About</a>
                    </li>
                  </ul>
                  {/* <div className="flex xl:w-80 max-xl:w-full bg-transparent px-6 py-2.5 rounded border border-white lg:ml-auto  max-lg:mt-10">
              <input type="text" placeholder="Search something..." className="w-full bg-transparent rounded outline-none" />
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px" className="cursor-pointer fill-gray-400">
                <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
                </path>
              </svg>
            </div> */}
                </div>
              </div>
            </div>
          </header>
          <div className="max-w-5xl mx-auto text-center relative px-4 sm:px-10 mt-16">
            <h1 className="lg:text-7xl md:text-6xl text-4xl font-semibold mb-6 md:!leading-[80px]">
              Find Your Dream Job with Ease
            </h1>
            <p className="text-base text-gray-400">
              Discover countless opportunities tailored to your skills and interests. Join our platform to connect with top companies and take the next step in your career journey.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 items-center mt-16">
              <div className="flex flex-col items-center text-center">
                <h5 className="font-bold text-2xl text-blue-600 mb-2">100K+</h5>
                <p>Job Listings</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <h5 className="font-bold text-2xl text-blue-600 mb-2">50K+</h5>
                <p>Registered Employers</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <h5 className="font-bold text-2xl text-blue-600 mb-2">200K+</h5>
                <p>Successful Placements</p>
              </div>
            </div>
            <div className="mt-14 flex gap-x-8 gap-y-4 justify-center max-sm:flex-col">
              <Link
              to={'/signup'}
                type="button"
                className="px-6 py-3.5 rounded-md text-gray-100 bg-blue-700 hover:bg-blue-800 transition-all"
              >
                Signup as a Student
              </Link>
              <Link
              to={'/companySignup'}
                type="button"
                className="bg-transparent hover:bg-blue-600 border border-blue-600 px-6 py-3.5 rounded-md text-gray-100 transition-all">
                Signup as a Company
              </Link>
            </div>
          </div>

        </div>
        <div className="px-4 sm:px-10">
          <div className="mt-32 max-w-7xl mx-auto">
            <div className="mb-16 max-w-2xl text-center mx-auto">
              <h2 className="md:text-4xl text-3xl font-semibold md:!leading-[50px] mb-6">Why Choose Us?</h2>
              <p className="text-gray-400">
                Unlock a world of opportunities with our innovative features designed to connect job seekers and employers
                seamlessly. Your career journey starts here.
              </p>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12 mt-16">
              <div className="text-center bg-[#111] px-6 py-8 rounded-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-12 mb-6 inline-block bg-gray-700 p-3 rounded-xl"
                  viewBox="0 0 32 32"
                >
                  <path d="M16 3a13 13 0 1 0 13 13A13 13 0 0 0 16 3Zm6.32 11.75-7 7a1 1 0 0 1-1.44 0l-3-3a1 1 0 1 1 1.44-1.44L15 19.57l6.28-6.28a1 1 0 0 1 1.44 1.44Z" />
                </svg>
                <h3 className="text-xl mb-4">Verified Job Listings</h3>
                <p className="text-gray-400">
                  Access thousands of verified job opportunities, ensuring a safe and trustworthy experience for job seekers.
                </p>
                <a href="#" className="text-blue-600 inline-block mt-4 hover:underline">
                  Learn more
                </a>
              </div>
              <div className="text-center bg-[#111] px-6 py-8 rounded-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-12 mb-6 inline-block bg-gray-700 p-3 rounded-xl"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 32C132.288 32 32 132.288 32 256s100.288 224 224 224 224-100.288 224-224S379.712 32 256 32Zm0 400c-97.203 0-176-78.797-176-176S158.797 80 256 80s176 78.797 176 176-78.797 176-176 176Z" />
                  <path d="M348.8 212.8h-85.6v-85.6h-32v85.6h-85.6v32h85.6v85.6h32v-85.6h85.6v-32Z" />
                </svg>
                <h3 className="text-xl mb-4">AI-Powered Job Matching</h3>
                <p className="text-gray-400">
                  Leverage advanced algorithms to match your skills and preferences with the best job opportunities available.
                </p>
                <a href="#" className="text-blue-600 inline-block mt-4 hover:underline">
                  Learn more
                </a>
              </div>
              <div className="text-center bg-[#111] px-6 py-8 rounded-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-12 mb-6 inline-block bg-gray-700 p-3 rounded-xl"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2a10 10 0 0 0-7.5 16.7L2 22l3.3-2.5A10 10 0 1 0 12 2Zm1 15h-2v-2h2Zm0-4h-2V7h2Z" />
                </svg>
                <h3 className="text-xl mb-4">24/7 Support</h3>
                <p className="text-gray-400">
                  Our dedicated support team is available round the clock to assist with all your job search or hiring queries.
                </p>
                <a href="#" className="text-blue-600 inline-block mt-4 hover:underline">
                  Learn more
                </a>
              </div>
            </div>
          </div>





          <div className="mt-32 rounded-md px-4 py-12">
            <div className="grid md:grid-cols-2 justify-center items-center gap-12 max-w-7xl mx-auto">
              <div>
                <img
                  src="https://readymadeui.com/management-img.webp"
                  alt="Job Search Benefits"
                  className="w-full mx-auto"
                />
              </div>
              <div className="max-md:text-center">
                <h2 className="md:text-4xl text-3xl font-semibold md:!leading-[50px] mb-6">
                  Simplify Your Job Search Process
                </h2>
                <p className="text-gray-400">
                  Discover the easiest way to find your dream job. Leverage our platform to explore diverse opportunities,
                  streamline applications, and connect with top employers. Start building your career today.
                </p>
                <button
                  type="button"
                  className="px-6 py-3.5 rounded-md text-gray-100 bg-blue-700 hover:bg-blue-800 transition-all mt-10">
                  Get Started Today
                </button>
              </div>
            </div>
          </div>



          <div className="mt-32 max-w-7xl mx-auto">
            <div className="mb-16 max-w-2xl text-center mx-auto">
              <h2 className="md:text-4xl text-3xl font-semibold md:!leading-[50px] mb-6">
                Hear from Our Users
              </h2>
              <p className="text-gray-400">
                See how our platform has transformed careers and helped businesses find the perfect candidates.
                Real stories from real users, showcasing success.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-12 max-md:justify-center text-center mt-16">
              {/* Testimonial 1 */}
              <div>
                <div className="flex flex-col items-center">
                  <img
                    src="https://readymadeui.com/profile_2.webp"
                    className="w-24 h-24 rounded-full shadow-xl border-2 border-white"
                    alt="User 1"
                  />
                  <div className="mt-4">
                    <h4 className="text-base">Jane Smith</h4>
                    <p className="text-xs text-blue-600 mt-2">Marketing Manager, Startup</p>
                  </div>
                </div>
                <div className="mt-6">
                  <p className="text-gray-400">
                    "Thanks to this platform, I landed my dream job in just two weeks! The process was straightforward,
                    and I loved the personalized job recommendations."
                  </p>
                </div>
                <div className="flex justify-center space-x-2 mt-4">
                  {/* <StarRating filled={4} /> */}
                </div>
              </div>
              {/* Testimonial 2 */}
              <div>
                <div className="flex flex-col items-center">
                  <img
                    src="https://readymadeui.com/profile_3.webp"
                    className="w-24 h-24 rounded-full shadow-xl border-2 border-white"
                    alt="User 2"
                  />
                  <div className="mt-4">
                    <h4 className="text-base">Mark Johnson</h4>
                    <p className="text-xs text-blue-600 mt-2">Hiring Manager, TechCorp</p>
                  </div>
                </div>
                <div className="mt-6">
                  <p className="text-gray-400">
                    "We found the perfect candidate within days of posting the job. The applicant tracking system made
                    our recruitment process seamless and efficient."
                  </p>
                </div>
                <div className="flex justify-center space-x-2 mt-4">
                  {/* <StarRating filled={5} /> */}
                </div>
              </div>
              {/* Testimonial 3 */}
              <div>
                <div className="flex flex-col items-center">
                  <img
                    src="https://readymadeui.com/profile_4.webp"
                    className="w-24 h-24 rounded-full shadow-xl border-2 border-white"
                    alt="User 3"
                  />
                  <div className="mt-4">
                    <h4 className="text-base">Emily Davis</h4>
                    <p className="text-xs text-blue-600 mt-2">Software Engineer</p>
                  </div>
                </div>
                <div className="mt-6">
                  <p className="text-gray-400">
                    "The resume builder and job alerts were incredibly helpful. I was able to prepare and apply for
                    roles with confidence. Highly recommend!"
                  </p>
                </div>
                <div className="flex justify-center space-x-2 mt-4">
                  {/* <StarRating filled={5} /> */}
                </div>
              </div>
            </div>
          </div>



          {/* <div className="mt-32 max-w-7xl mx-auto">
  <div className="text-center">
    <h2 className="md:text-4xl text-3xl font-semibold md:!leading-[50px] mb-6">Pricing Plans</h2>
    <p className="text-gray-400">Change your plan according to your needs</p>
  </div>
  <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-16 max-md:max-w-md max-md:mx-auto">
    {[
      {
        title: "Hobby",
        price: "$10.00",
        description: "Ideal for individuals who need quick access to basic features.",
        features: [
          "50 Image generations",
          "500 Credits",
          "Monthly 100 Credits Free",
          "Customer Support",
          "50GB Cloud Storage",
        ],
      },
      {
        title: "Professional",
        price: "$30.00",
        description: "Ideal for individuals who need advanced features and tools for client work.",
        features: [
          "500 Image generations",
          "5000 Credits",
          "Monthly 1000 Credits Free",
          "Customer Support",
          "500GB Cloud Storage",
        ],
      },
      {
        title: "Business",
        price: "$45.00",
        description: "Ideal for businesses needing personalized services and security for large teams.",
        features: [
          "1000 Image generations",
          "8000 Credits",
          "Monthly 5000 Credits Free",
          "Customer Support",
          "1500GB Cloud Storage",
        ],
      },
    ].map((plan, index) => (
      <div
        key={index}
        className="hover:outline outline-blue-600 rounded relative overflow-hidden transition-all p-6"
      >
        <div className="text-left">
          <h4 className="text-xl mb-4">{plan.title}</h4>
          <h3 className="text-4xl">{plan.price}</h3>
          <p className="mt-4 text-gray-400">{plan.description}</p>
        </div>
        <div className="mt-8">
          <ul className="space-y-4">
            {plan.features.map((feature, idx) => (
              <li key={idx} className="flex items-center text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={17}
                  className="mr-4 bg-gray-200 fill-[#333] rounded-full p-[3px]"
                  viewBox="0 0 24 24"
                >
                  <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <button
          type="button"
          className="w-full px-6 py-3.5 rounded-md text-gray-100 bg-blue-700 hover:bg-blue-800 transition-all mt-10"
        >
          Get started today
        </button>
      </div>
    ))}
  </div>
</div> */}


          {/* <div className="mt-32">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="md:text-4xl text-3xl font-semibold md:!leading-[50px] mb-6">LATEST BLOGS</h2>
          <p className="text-gray-400">Laboris qui Lorem ad tempor ut reprehenderit. Nostrud anim nulla officia ea sit
            deserunt.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-16">
          <div className="cursor-pointer rounded overflow-hidden group">
            <div>
              <span className="block text-gray-400 mb-2">10 FEB 2023</span>
              <h3 className="text-xl group-hover:text-blue-600 transition-all">A Guide to Igniting Your Imagination</h3>
              <div className="mt-6">
                <p className="text-gray-400 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc
                  et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
              </div>
            </div>
            <hr className="my-6" />
            <div className="flex flex-wrap items-center gap-3">
              <img src="https://readymadeui.com/team-1.webp" className="w-9 h-9 rounded-full" />
              <p className="text-xs text-gray-400">BY JOHN DOE</p>
            </div>
          </div>
          <div className="cursor-pointer rounded overflow-hidden group">
            <div>
              <span className="block text-gray-400 mb-2">7 JUN 2023</span>
              <h3 className="text-xl group-hover:text-blue-600 transition-all">Hacks to Supercharge Your Day</h3>
              <div className="mt-6">
                <p className="text-gray-400 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc
                  et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
              </div>
            </div>
            <hr className="my-6" />
            <div className="flex flex-wrap items-center gap-3">
              <img src="https://readymadeui.com/team-2.webp" className="w-9 h-9 rounded-full" />
              <p className="text-xs text-gray-400">BY MARK ADAIR</p>
            </div>
          </div>
          <div className="cursor-pointer rounded overflow-hidden group">
            <div>
              <span className="block text-gray-400 mb-2">5 OCT 2023</span>
              <h3 className="text-xl group-hover:text-blue-600 transition-all">Trends and Predictions</h3>
              <div className="mt-6">
                <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc
                  et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
              </div>
            </div>
            <hr className="my-6" />
            <div className="flex flex-wrap items-center gap-3">
              <img src="https://readymadeui.com/team-3.webp" className="w-9 h-9 rounded-full" />
              <p className="text-xs text-gray-400">BY SIMON KONECKI</p>
            </div>
          </div>
        </div>
      </div>
    </div> */}
          <div className="mt-32">
            <div className="mb-16 max-w-2xl text-center mx-auto">
              <h2 className="md:text-4xl text-3xl font-semibold md:!leading-[50px] mb-6">Application Metrics</h2>
              <p className="text-gray-400">
                Laboris qui Lorem ad tempor ut reprehenderit. Nostrud anim nulla officia ea sit deserunt. Eu eu quis anim aute Laboris qui Lorem ad tempor ut reprehenderit.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 sm:grid-cols-2  gap-2 lg:divide-x lg:divide-red-300">
              {/* Metric Card 1 */}
              <div className="text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="fill-blue-600 w-10 inline-block" viewBox="0 0 512 512">
                  {/* SVG Path */}
                  <path d="M437 268.152h-50.118c-6.821 0-13.425.932-19.71 2.646-12.398-24.372-37.71-41.118-66.877-41.118h-88.59c-29.167 0-54.479 16.746-66.877 41.118a74.798 74.798 0 0 0-19.71-2.646H75c-41.355 0-75 33.645-75 75v80.118c0 24.813 20.187 45 45 45h422c24.813 0 45-20.187 45-45v-80.118c0-41.355-33.645-75-75-75z" />
                </svg>
                <h3 className="text-4xl text-blue-600 mt-6">400+</h3>
                <p className="mt-4">Unique Visitors</p>
              </div>

              {/* Metric Card 2 */}
              <div className="text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="fill-blue-600 w-10 inline-block" viewBox="0 0 512 512">
                  {/* SVG Path */}
                  <path fillRule="evenodd" d="M64.217 333.491h41.421c5.508 0 10 4.492 10 10v97.833c0 5.508-4.492 10-10 10H64.217c-5.508 0-10-4.492-10-10v-97.833c0-5.508 4.492-10 10-10z" clipRule="evenodd" />
                </svg>
                <h3 className="text-4xl text-blue-600 mt-6">450+</h3>
                <p className="mt-4">Total Sales</p>
              </div>

              {/* Metric Card 3 */}
              <div className="text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="fill-blue-600 w-10 inline-block" viewBox="0 0 28 28">
                  {/* SVG Path */}
                  <path d="M18.56 16.94h-3.12l.65-2.16a2.58 2.58 0 0 0-1.66-3.21 1.41 1.41 0 0 0-1.81 1l-.1.42a8.61 8.61 0 0 1-2.26 4l-.57.56a1.56 1.56 0 0 0-1.21-.59h-.73a1.56 1.56 0 0 0-1.56 1.54v6.44a1.56 1.56 0 0 0 1.56 1.56h.73a1.55 1.55 0 0 0 1.33-.76l.14.07a6.55 6.55 0 0 0 2.91.69h3.59a3.58 3.58 0 0 0 3-1.6 6.34 6.34 0 0 0 1.07-3.53v-2.49a1.94 1.94 0 0 0-1.96-1.94z" />
                </svg>
                <h3 className="text-4xl text-blue-600 mt-6">300+</h3>
                <p className="mt-4">Satisfied Customers</p>
              </div>
            </div>
          </div>


        </div>
        <footer className="bg-[#111] px-4 sm:px-10 py-12 mt-32 text-gray-400">
          <div className="lg:max-w-[50%] mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold md:leading-[50px] mb-6 text-white">
              Newsletter
            </h2>
            <p>
              Subscribe to our newsletter and stay up to date with the latest news,
              updates, and exclusive offers. Get valuable insights. Join our
              community today!
            </p>
            <div className="bg-[#444] flex items-center px-2 py-1 rounded-md mt-10">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent outline-none pl-2 text-white"
              />
              <button
                type="button"
                className="px-6 py-3 rounded-md bg-blue-700 hover:bg-blue-800 text-white transition-all ml-auto"
              >
                Submit
              </button>
            </div>
          </div>

          <hr className="border-gray-700 my-12" />

          <div className="grid grid-cols-1 max-lg:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "About Us",
                content: [
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean gravida, mi eu pulvinar cursus, sem elit interdum mauris.",
                ],
              },
              {
                title: "Services",
                links: [
                  "Web Development",
                  "Mobile App Development",
                  "UI/UX Design",
                  "Digital Marketing",
                ],
              },
              {
                title: "Resources",
                links: ["Webinars", "Ebooks", "Templates", "Tutorials"],
              },
              {
                title: "More About Us",
                links: ["Our Story", "Mission and Values", "Team", "Testimonials"],
              },
            ].map(({ title, content, links }, index) => (
              <div key={index}>
                <h4 className="text-lg mb-6 text-white">{title}</h4>
                {content ? (
                  <p>{content[0]}</p>
                ) : (
                  <ul className="space-y-4">
                    {links.map((link, i) => (
                      <li key={i}>
                        <a
                          href="javascript:void(0)"
                          className="hover:text-blue-600 transition-all"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </footer>

      </div>




    </div>
  )
}

export default LandingPage
