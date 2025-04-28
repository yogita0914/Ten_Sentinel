import React from 'react'

export const Button = ({text}) => {
  return (
    <button className='bg-gradient-to-r from-blue-600 to-indigo-600 text-white w-fit px-4 py-2 rounded-md cursor-pointer self-center'>
        {text}
    </button>
  )
}
