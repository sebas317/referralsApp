import React from 'react'
import FieldForm from '../atoms/FieldForm'
import FormButton from '../atoms/FormButton'

function LoginForm({title_form}) {
  return (
    <div className='w-full mx-auto h-screen border-2 lg:w-2/4 flex flex-col justify-center items-start gap-5 px-10'>
      <h3 className='text-gray-500 font-semibold text-3xl w-full'>{title_form}</h3>
      <form className="flex flex-col justify-center w-full gap-5">
      <FieldForm field="email" typeinput="text">
        Email
      </FieldForm>
      <FieldForm field="password" typeinput="password">
        Password
      </FieldForm>
      <div className='flex flex-col justify-center items-center gap-5'>
        <a className='text-blue-900 underline'>Forgot Password?</a>
        <FormButton type_button='submit'>Sign In</FormButton>
      </div>
    </form>
    </div>
  )
}

export default LoginForm