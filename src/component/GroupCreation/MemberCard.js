import React, { useState } from 'react';

const MemberCard = ({ people, setAddcontact , addContact }) => {

  const handleClick=()=>{
    if (addContact.includes(people)) {
      setAddcontact(prevContacts => prevContacts.filter(person => person !== people));
    } else {
      setAddcontact(prevContacts => [...prevContacts, people]);
    }
  }
  return (
    <div className='flex gap-2 mt-6 h-9 items-center '>
      <label className=' bg-green-light p-3 rounded-lg'>{people}</label>
      
    
    
    <div className='w-8 h-8 border-2 border-white rounded-full cursor-pointer flex justify-center items-center border-green-light' onClick={() => handleClick()}>
       { 
           addContact.includes(people) && <svg xmlns="http://www.w3.org/2000/svg" className='fill-green-light' height="1em" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
        }
    </div>


  </div>
  );
};

export default MemberCard;