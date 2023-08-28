import React from 'react'
import Messagedisplay from "./Messagedisplay"
import MessageInput from "./MessageInput"
import Chattopnav from './Chattopnav'
import { useUserSelected } from '../../userSelected'

const UserChat = () => {
  const {userSelected} = useUserSelected();

  return (
    <>
   {userSelected ? <section className='flex flex-col w-2/3 h-screen relative bg-gray-700 text-white'>
      <Chattopnav/>
      <Messagedisplay />
      <MessageInput />
    </section> : null}
    </>
  )
}

export default UserChat