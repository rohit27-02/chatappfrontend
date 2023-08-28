import React from 'react';
import { useUserSelected } from '../../userSelected';

const Contactcard = ({ contact }) => {
  const { setUserSelected } = useUserSelected();

  return (
    <div
      className='flex items-center gap-4 cursor-pointer w-full rounded-xl bg-white-light p-2 text-green-dark h-[12vmin] border-white-light'
      onClick={()=>setUserSelected(contact)}
    >
      <img src='/user.png' alt='user-profile' className='h-8 w-8' />
      <p className='opacity-100'>{contact.username}</p>
    </div>
  );
}

export default Contactcard;
