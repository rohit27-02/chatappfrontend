/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react'

const Register = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { username, password }
    try {
      fetch(`${process.env.REACT_APP_URL}/api/register`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then((res) => res.json()).then((data) => {
        localStorage.setItem("token", data.token);
      });
    } catch (error) {
      window.alert(error)
    }

  }

  return (
    <section className="bg-green-dark h-screen">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white-dark rounded-lg shadow 1:border md:mt-0 sm:max-w-md xl:p-0 1:bg-gray-800 1:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
              Sign up
            </h1>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" action="#">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                <input onChange={(e) => setusername(e.currentTarget.value)} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 1:bg-gray-700 1:border-gray-600 1:placeholder-gray-400  1:focus:ring-blue-500 1:focus:border-blue-500" placeholder="name@company.com" required="" />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                <input onChange={(e) => setpassword(e.currentTarget.value)} type="password" name="password" id="password" placeholder="password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 1:bg-gray-700 1:border-gray-600 1:placeholder-gray-400  1:focus:ring-blue-500 1:focus:border-blue-500" required="" />
              </div>
              <div className="flex items-center justify-between">
               
              </div>
              <button type="submit" className="w-full text-white-light bg-green-dark hover:bg-green-light focus:ring-4 focus:outline-none focus:ring-green-light font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign up</button>
              <p className="text-sm font-light text-gray-500 1:text-gray-400">
                already have an account <a href="/login" className="font-medium text-primary-600 hover:underline 1:text-primary-500">Sign in</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Register