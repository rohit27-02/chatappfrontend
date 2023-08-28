import React, { useState } from 'react'

const Addcontact = ({setshow ,show }) => { 
 
  return (
      <>
    <div className='h-9 w-9 cursor-pointer border-2 border-green-light rounded-full flex items-center justify-center ' onClick={()=>setshow(!show)}>
      <svg className='h-7 w-7 fill-green-light' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
    </div>
    
    </>
  )
}

export default Addcontact