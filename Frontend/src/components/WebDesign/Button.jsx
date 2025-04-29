import React from 'react'

export const Button = ({text, onClick}) => {
  return (
    <button className='bg-gradient-to-r from-blue-600 to-indigo-600 text-white w-fit px-4 py-2 rounded-md cursor-pointer self-center md:text-xl md:py-4 md:px-8 hover:from-blue-400 hover:to-indigo-500 hover:shad-wmd'
    onClick={onClick}
    >
        {text}
    </button>
  )
}
