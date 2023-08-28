import React from 'react'
import Userprofile from './Userprofile'
import Contacts from './Contacts'


const Sidebar = () => {
  
  return (
    <section className='flex flex-col w-1/3 bg-white-dark drop-shadow-lg shadow-inner border-white-dark h-screen'>
        <Userprofile/>
        
        <Contacts/>
    </section>
  )
}

export default Sidebar