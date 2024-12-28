import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../store/UserSlice";
import { Link } from "react-router-dom";


const Navbar = () => {

  let dispatch = useDispatch()
  let userStore = useSelector((state) => state.user)
  console.log(userStore)
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white shadow-md fixed top-0 left-0 right-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-xl font-bold">
              JobPortal
            </a>
          </div>

          {/* Links */}
          <div className="hidden md:flex space-x-6">
            <a href="/" className="hover:text-gray-200">
              Home
            </a>
            <a href="/jobs" className="hover:text-gray-200">
              Jobs
            </a>
            <a href="/companies" className="hover:text-gray-200">
              Companies
            </a>
          </div>

          {/* Login/Signup Button */}
          <div className="hidden md:flex">
            {userStore.login === false && <Link to="/login"
              className="px-4 py-2 bg-white text-blue-600 rounded hover:bg-gray-100"> Login
            </Link>}
           {userStore.login === true && <Link
              to="/landingPage"
              onClick={() => dispatch(logoutUser())}
              className="px-4 py-2 ms-2 bg-white text-blue-600 rounded hover:bg-gray-100">Logout
            </Link>}
          </div>

          {/* Hamburger Menu */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-700">
          <Link to="/" className="block px-4 py-2 text-sm hover:bg-blue-800"> Home </Link>
          <Link to="/jobs" className="block px-4 py-2 text-sm hover:bg-blue-800"> Jobs </Link>
          <Link href="/companies" className="block px-4 py-2 text-sm hover:bg-blue-800" > Companies </Link>
          <Link to="/login" className="block px-4 py-2 text-sm bg-white text-blue-600 hover:bg-gray-100" > Login  </Link>
          <Link to="/landingPage" onClick={() => dispatch(logoutUser())} className="block px-4 py-2 text-sm bg-white 
                 text-blue-600 hover:bg-gray-100"> Logout </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
