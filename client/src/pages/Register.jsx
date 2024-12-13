import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { z } from 'zod';


const registrationSchema = z.object({
  fullName: z.string().min(1, 'Full Name is required'),
  lastName: z.string().min(1, 'Last Name is required'),
  email: z.string().email('Please enter a valid email').min(1, 'Email is required'),
  password: z.string().min(6, 'Password must be at least 6 characters').min(1, 'Password is required'),
  repeatPassword: z.string().min(1, 'Please repeat your password'),
}).refine((data) => data.password === data.repeatPassword, {
  message: "Passwords don't match",
  path: ['repeatPassword'], 
});

const RegisterModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [formData, setFormData] = useState({
    fullName: '',
    lastName: '',
    email: '',
    password: '',
    repeatPassword: '',
  });
  const [errors, setErrors] = useState({});

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation using Zod
    try {
      registrationSchema.parse(formData); // Validate the form data
      console.log(formData); // If validation passes, submit form data
      setErrors({});
    } catch (err) {
      // If validation fails, show errors
      const zodErrors = err.errors.reduce((acc, error) => {
        acc[error.path[0]] = error.message;
        return acc;
      }, {});
      setErrors(zodErrors);
    }
  };

  // Toggle modal open/close
  const toggleModal = () => {
    // setIsOpen(!isOpen);
    // if (!isOpen) {
    //   document.body.classList.add('bg-blur');
    // } else {
    //   document.body.classList.remove('bg-blur');
    // }
  };

  return (
    <>
      {/* <button
        onClick={toggleModal}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Register
      </button> */}
      {/* css fixed top-0 left-0 right-0 bottom-0 z-50 */}
      {isOpen && (
        <div
          className=" flex justify-center items-center bg-opacity-50"
          onClick={toggleModal}
        >
          <div
            className="bg-white p-6 my-5 shadow-lg max-w-lg w-full relative"
            onClick={(e) => e.stopPropagation()} // Prevent clicking inside the modal from closing it
          >
            {/* Cross Icon at the top right */}
            {/* <button
              onClick={toggleModal}
              className="absolute top-2 right-4 md:top-6 md:right-6 text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 md:w-8 md:h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button> */}

            <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Create Account</h2>

            <form onSubmit={handleSubmit}>
              {/* Full Name */}
              <div className="mb-4">
                <label htmlFor="fullName" className="block text-gray-700">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
              </div>

              {/* Last Name */}
              <div className="mb-4">
                <label htmlFor="lastName" className="block text-gray-700">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
              </div>

              {/* Email */}
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>

              {/* Password */}
              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
              </div>

              {/* Repeat Password */}
              <div className="mb-6">
                <label htmlFor="repeatPassword" className="block text-gray-700">Repeat Password</label>
                <input
                  type="password"
                  id="repeatPassword"
                  name="repeatPassword"
                  value={formData.repeatPassword}
                  onChange={handleChange}
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.repeatPassword && <p className="text-red-500 text-sm">{errors.repeatPassword}</p>}
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row justify-between mb-4">
                <button
                  type="button"
                  onClick={toggleModal}
                  className="px-6 py-2 mb-2 sm:mb-0 text-white bg-gray-500 hover:bg-gray-600 rounded-md w-full sm:w-auto"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md w-full sm:w-auto"
                >
                  Register
                </button>
              </div>

              {/* Links */}
              <div className="text-center mt-4">
                <p className="text-sm text-gray-500 mt-2">
                  Already have an account?{' '}
                  <Link to="/signin" className="text-blue-600 hover:underline">
                    Log in here
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default RegisterModal;
