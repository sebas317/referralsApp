import React from 'react'

function FormButton({children, type_button, action}) {
  return (
    <button className='bg-gray-500 px-5 py-2 w-2/4 text-white' type={type_button} onClick={action}>{children}</button>
  )
}

export default FormButton