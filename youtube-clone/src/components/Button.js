import React from 'react'

const Button = ({name}) => {
  return (
    <div>
      <button className='bg-gray-400 p-2 m-2 rounded'>{name}</button>
    </div>
  )
}

export default Button