import React from 'react'
import Messagedisplay from "./Messagedisplay"
import MessageInput from "./MessageInput"

const UserChat = () => {

  return (
    <section className='flex flex-col w-2/3 h-screen bg-gray-700 text-white'>
      <Messagedisplay />
      <MessageInput />
    </section>
  )
}

export default UserChat