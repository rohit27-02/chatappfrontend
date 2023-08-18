import React from 'react'

const Textbubble = ({message}) => {
  return (
    <div className='p-4 text-xl text-white-light bg-dark rounded-xl max-w-[70%] break-words h-auto ml-6 mt-5 '>
        {message}
    </div>
  )
}

export default Textbubble