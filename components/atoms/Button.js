import React from 'react'

function Button({children}) {
  return (
    <div className='bg-gray-500 px-5 py-2 max-w-60 min-w-max text-white text-center'>
      {children}
    </div>
  )
}

export default Button