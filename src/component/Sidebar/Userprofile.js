/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'

const Userprofile = () => {
  return (
    <section className=' w-full h-14 flex items-center px-2 bg-green-dark  text-white-light'>
      <div className='rounded-full cursor-pointer bg-green-light drop-shadow h-10 w-10'>
        <img src='/user.png' alt='user image'/>
      </div>
      <div className=' absolute right-8 cursor-pointer  ' >
          <svg className='fill-white-light' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 128 512"><path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/></svg>
      </div>
    </section>
  )
}

export default Userprofile