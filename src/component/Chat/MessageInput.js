import { useState, useEffect } from 'react';
import api from '../../api/sendMessage';


const MessageInput = () => {
  const [inputMessage, setInputMessage] = useState('');

   

  const handleSubmit = () => {
    if (inputMessage.trim() !== '') {
      api.sendMessage(inputMessage);
      setInputMessage('');
    }
  }
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && inputMessage.trim() !== '') {
      e.preventDefault(); // Prevent form submission
      handleSubmit();
      e.target.blur();
    }
  };


  return (
    <section className="flex w-full h-16 justify-center gap-10 items-center px-10 text-dark   bg-white-dark border-2 ">

      <form >
        <input onKeyDown={handleKeyPress} className='w-[40vmax] p-2 outline-none caret-transparent border-2 rounded-lg focus:border-green-dark' value={inputMessage} onChange={(e) => setInputMessage(e.currentTarget.value)} type='text' placeholder='send message' />
      </form>
      <button className='w-10 h-10 object-contain cursor-pointer' onClick={handleSubmit}>
        <img src='/send-button.png' alt='send-button'/>
      </button>
    </section>
  )
}

export default MessageInput