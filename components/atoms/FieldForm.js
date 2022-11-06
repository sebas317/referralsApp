import React from 'react'

function FieldForm({children, field, typeinput}) {
  return (
    <input className='border-2 p-2 w-full' type={typeinput} id={field} name={field} placeholder={children}/>
  )
}

export default FieldForm