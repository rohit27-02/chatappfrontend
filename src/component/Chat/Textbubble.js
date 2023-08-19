import React from 'react'

const Textbubble = ({message}) => {
  return (
    <div className='py-2 px-4 text-white-light bg-dark rounded-xl max-w-[60%] break-words h-auto ml-6 mt-2'>
        {message}
    </div>
  )
}

export default Textbubble