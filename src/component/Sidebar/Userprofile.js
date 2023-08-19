/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'

const Userprofile = () => {
  return (
    <section className=' w-full h-14 flex items-center px-2 bg-green-dark  text-white-light'>
      <div className='rounded-full cursor-pointer bg-green-light drop-shadow h-10 w-10'>
        <img src='/user.png' alt='user image'/>
      </div>
    </section>
  )
}

export default Userprofile