import React from 'react'
import { useUserSelected } from '../../userSelected'

const Textbubble = ({data}) => {
  const {userSelected} = useUserSelected();
  return (
    <div className={`py-2 px-4 text-white-light ${userSelected._id !== data.sender && "float-right"} bg-dark rounded-full w-fit max-w-[60%] break-words h-auto`}>
        {data.message}
    </div>
  )
}

export default Textbubble