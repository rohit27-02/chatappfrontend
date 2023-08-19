import { useState, useEffect } from 'react';
import api from '../../api/sendMessage';


const MessageInput = () => {
  const [inputMessage, setInputMessage] = useState('');

   

  const handleSubmit = (e) => {
      e.preventDefault(); // Prevent form submission

    if (inputMessage.trim() !== '') {
      // e.preventDefault(); // Prevent form submission
      api.sendMessage(inputMessage);
      setInputMessage('');
    }
  }
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && inputMessage.trim() !== '') {
      e.preventDefault(); // Prevent form submission
      handleSubmit(e);
      e.target.blur();
    }
  };


  return (
    <section className="flex w-full h-20 justify-center gap-10 items-center px-10 text-dark   bg-white-dark border-2 ">

    <style>
    {`
      .group-focus\\:border-green-dark:focus-within {
        border-color: #2B7A78;
      }
    `}
  </style>
      <form className=' p-2 flex justify-between items-center w-[50vmax] bg-white-light  outline-none  border-2 rounded-lg group-focus:border-green-dark'>
        <input onKeyDown={handleKeyPress} className='w-[40vmax] p-2 outline-none group  ' value={inputMessage} onChange={(e) => setInputMessage(e.currentTarget.value)} type='text' placeholder='send message' />
        <button className='w-10 h-10 object-contain cursor-pointer pr-2' onClick={handleSubmit}>
        <img src='/send-button.png' alt='send-button'/>
      </button>
      </form>
      
    </section>


  )
}

export default MessageInput