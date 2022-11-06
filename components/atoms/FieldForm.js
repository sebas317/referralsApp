import React from 'react'

function FieldForm({children, field, typeinput, default_value}) {
  return (
    <input className='border-2 p-2 w-full' type={typeinput} id={field} name={field} placeholder={children} defaultValue={default_value}/>
  )
}

export default FieldForm