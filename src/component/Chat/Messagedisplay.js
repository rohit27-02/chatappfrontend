import React, { useEffect, useState } from 'react'
import api from '../../api/sendMessage';
import Textbubble from './Textbubble';
import { useQuery } from '@tanstack/react-query';
import { useUserSelected } from '../../userSelected';
import socket from '../../middleware/socket';

const Messagedisplay = () => {
  const [messages, setmessages] = useState([]);
  const { userSelected } = useUserSelected();

  socket.on("private message", (message) => {
    console.log('Received private message:', message);
    setmessages([...messages, message]); // Update state with the new message
  });

  const { data } = useQuery({
    queryKey: ['chatf', userSelected._id],
    queryFn: () =>
      fetch(`http://localhost:3001/api/chats/${userSelected._id}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
          'Content-Type': 'application/json',
        },
        method: "GET",
      }).then(res => {
        return res.json();
      }),
    enabled: userSelected !== "",
    select: (data) => data.message.messages
  }
  );
  console.log(data)

  return (
    <section className='chat-bg flex flex-col flex-grow  overflow-auto text-dark bg-white-dark '>

      <div className="messages gap-2 flex flex-col justify-end  p-6">
        {data?.map((message, index) => (
          <div key={index} className="message">
            <Textbubble data={message} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Messagedisplay