import React, { useState } from 'react';
import MemberCard from './MemberCard';
import Addcontact from '../Sidebar/Addcontact';



const Addpeople = ({setshow , show}) => {
  const [allcontact, setAllcontact] = useState(["gaurav", "rohit", "hridik" ,"rohan","sohan","pinki" ,"dipu"]);
  const [addContact, setAddcontact] = useState([]);

  return (
    <div className='bg-white-dark w-4/5 h-4/5 flex flex-col items-center relative p-6'>
      <div className='flex gap-4 mt-6 h-9 items-center'>
        <label>Group Name</label>
        <input
          placeholder='group name'
          className='p-1 px-2 outline-none focus:border-2 rounded-md focus:border-green-dark'
        />
      </div>
      <div className='flex gap-4  flex-wrap '>
      {allcontact.map((people) => (
        <MemberCard key={people} people={people} addContact={addContact} setAddcontact={setAddcontact} />
      ))}
      </div>
      <div className='flex gap-4  flex-wrap '>
      {addContact.map((people) => (
        <p>{people}</p>
      ))}
      </div>
      <div className='rotate-45 absolute top-4 right-6 '>
              <Addcontact setshow={setshow} show={show}/>
      </div>
      
      <button className=' absolute bottom-4 hover:bg-green-light hover:text-white-dark bg-green-dark px-3 py-2 text-white-light  rounded-lg'>Create group</button>
    </div>
  );
};

export default Addpeople;
