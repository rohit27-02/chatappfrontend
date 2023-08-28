import React from 'react';
import { useUserSelected } from '../../userSelected';

const Chattopnav = () => {
  const { userSelected } = useUserSelected();

  return (
    <section className='w-full h-[4.5rem] gap-4 flex items-center px-2 bg-green-dark text-white-light'>
      < div className='rounded-full cursor-pointer bg-green-light drop-shadow h-10 w-10' >
        <img src='/user.png' alt='user image' />
      </div >
      <div className='flex items-center text-white-light w-3/5 h-10'>
        <p>{userSelected.username}</p>
      </div>
    </section >

  );
};

export default Chattopnav;
