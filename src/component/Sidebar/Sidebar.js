import React, { useState } from 'react'
import Userprofile from './Userprofile'
import Contacts from './Contacts'
import Addcontact from './Addcontact'


const Sidebar = ({setshow}) => {
  
  return (
    <section className=' relative flex flex-col w-1/3 bg-white-dark drop-shadow-lg shadow-inner border-white-dark h-screen'>
        <Userprofile/>
          <Contacts/>
        <div className=' absolute bottom-6 right-6'>
          <Addcontact setshow={setshow}/>
        </div>
        
       
    </section>
  )
}

export default Sidebar