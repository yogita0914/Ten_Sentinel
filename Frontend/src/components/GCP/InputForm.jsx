import React from 'react'

export const InputForm = ({type, placeholder}) => {
    return (
        <input type={type} placeholder={placeholder} className='bg-white py-2 px-4 border border-gray-300 rounded-sm' />
    )
}
