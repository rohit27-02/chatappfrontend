import React, { useState, useEffect } from 'react'
import api from '../../api/sendMessage';
import Textbubble from './Textbubble';

const Messagedisplay = () => {

  const [messages, setmessages] = useState([]);

  useEffect(() => {
    api.onMessageReceived((message) => {
      setmessages([...messages, message])
    })
  }, [messages])

  return (
    <section className='chat-bg flex flex-col text-dark bg-white-dark h-full'>
      
      <div className="messages flex flex-col justify-end h-full py-6">
        {messages.map((message, index) => (
          <div key={index} className="message">
           <Textbubble message={message.text}/>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Messagedisplay