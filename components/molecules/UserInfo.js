import React from 'react'
import Image from 'next/image'

function UserInfo({email}) {
  return (
    <div className='w-4/5 flex flex-row justify-between items-center mx-auto py-2 border-b-gray-400 border-b-2'>
      <h1 className='text-black text-3xl font-semibold'>{email}</h1>
      <Image src='/user-icon.svg' width='40' height='40'/>
    </div>
  )
}

export default UserInfo