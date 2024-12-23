import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { signinUserUsingEmailAndPassword } from '../Firebase/Auth';
import {useAuth} from '../context/AuthProvider'

const signInSchema = z.object({
  email: z.string().email('Please enter a valid email').min(1, 'Email is required'),
  password: z.string().min(6, 'Password must be at least 6 characters').min(1, 'Password is required'),
});

const SignInModal = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const {userLoggedIn} = useAuth();
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  
  useEffect(()=>{
    if(userLoggedIn)
    {
      navigate('/')
    }
    console.log(userLoggedIn)
  },[userLoggedIn])
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {

      signInSchema.parse(formData);
      console.log(formData); 
      setErrors({});
      const res = await signinUserUsingEmailAndPassword(formData);
    } catch (err) {

      const zodErrors = err.errors.reduce((acc, error) => {
        acc[error.path[0]] = error.message;
        return acc;
      }, {});
      setErrors(zodErrors);
    }
  };


  return (
    <>
        <div
          className=" flex justify-center items-center bg-opacity-50"
        >
          <div
            className="bg-white p-6 my-10 shadow-lg  max-w-lg w-full relative"
            onClick={(e) => e.stopPropagation()} 
          >

            <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Sign In</h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
              </div>

              <div className="flex flex-col sm:flex-row justify-between mb-4">
                {/* <button
                  type="button"
                  className="px-6 py-2 mb-2 sm:mb-0 text-white bg-gray-500 hover:bg-gray-600 rounded-md w-full sm:w-auto"
                >
                  Cancel
                </button> */}
                <button
                  type="submit"
                  className="px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md w-full sm:w-auto"
                >
                  Sign In
                </button>
              </div>

              <div className="text-center mt-4">
                <p className="text-sm text-gray-500">
                  <a href="/forgot-password" className="text-blue-600 hover:underline">
                    Forgot your password?
                  </a>
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Don't have an account?{' '}
                  <Link to="/register" className="text-blue-600 hover:underline">
                    Sign up here
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
    </>
  );
};

export default SignInModal;
