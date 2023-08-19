import React, { useState } from 'react'

const Contactcard = ({id}) => {

  const [membercount, setmembercount] = useState(2);
  
  return (
    <div className=' flex  items-center gap-4 cursor-pointer w-full rounded-xl bg-white-light  p-2 text-green-dark h-[12vmin] border-white-light'>
        <img src='/user.png' alt='user-profile' className='h-8 w-8'/>
       <p className='opacity-100 '>ContactsCard {id}</p>
       </div>
  //   <div className='flex items-center gap-2 w-full bg-white-light text-green-dark h-12 border-white-light'>
  //   <div className='relative flex items-center space-x-2'>
  //     {Array.from({ length: membercount }).map((_, index) => (
  //       <img
  //         key={index}
  //         src='/user.png'
  //         alt='user image'
         
  //       />
  //     ))}
  //   </div>
  //   <p className='opacity-100 pl-6'>ContactsCard {id}</p>
  // </div>
  )
}

export default Contactcard