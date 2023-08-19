import React, { useState } from 'react'
import Contactcard from './Contactcard';

const Contacts = () => {
  const [ContactArr, setContactArr] = useState([1,2 ,3]);
  return (
    
 <div className='flex flex-col gap-2 p-4'>
   {
      ContactArr.map((item)=>(
        <Contactcard id={item}/>
      ))
    }
</div>
  )
}

export default Contacts