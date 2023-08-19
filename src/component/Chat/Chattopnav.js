import React, { useEffect, useState } from 'react';

const Chattopnav = () => {
  
  const [chatmember, setChatmember] = useState(['you', 'gaurav','rohit']);
  const [peoplearr, setPeoplearr] = useState('');

  useEffect(() => {
      const formattedChatMembers = chatmember.join(', ');
  
      if (chatmember.length > 1) {
        const lastChatMember = chatmember[chatmember.length - 1];
        const otherChatMembers = chatmember.slice(0, -1).join(', ');
        setPeoplearr(`${otherChatMembers} and ${lastChatMember}`);
      } else {
        setPeoplearr(formattedChatMembers);
      }
    }, [chatmember]);

  return (
    <section className='w-full h-[4.5rem]  gap-4 flex items-center px-2 bg-green-dark text-white-light'>
      <div className='rounded-full cursor-pointer bg-green-light drop-shadow h-10 w-10'>
        <img src='/user.png' alt='user image' />
      </div>
      <div className='flex items-center text-white-light w-3/5 h-10'>
        <p>{peoplearr}</p>
      </div>
    </section>
  );
};

export default Chattopnav;
