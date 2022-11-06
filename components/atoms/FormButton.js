import React from 'react'

function FormButton({children, type_button}) {
  return (
    <button className='bg-gray-500 px-5 py-2 w-2/4 text-white' type={type_button}>{children}</button>
  )
}

export default FormButton