import { useRouter } from 'next/router'
import React from 'react'
import Link from 'next/link';

function User() {

  const {id} = useRouter().query;

  return (
    <div className="flex flex-col mt-0 justify-center items-center mb-auto h-screen border-2 w-full mx-auto xl:w-2/4 xl:px-5">
      <Link href="/app/users/" className='text-gray-500 underline w-full text-left'>
        Volver
      </Link>
      <h3 className="text-gray-500 font-semibold text-3xl w-full">
        Usuario
      </h3>
      <section className='flex flex-col gap-5 w-full mx-auto xl:w-3/4'>
        <div>
          <small>Nombre del referido: {`Referido name`}</small>
        </div>
        <div>
          <small>Nombre Campaña: {`Campaign name`}</small>
        </div>
        <p className="text-gray-500 font-semibold text-2xl w-full">
          Nombre: <span className='text-black'>{`User name`}</span>
        </p>
        <p className="text-gray-500 font-semibold text-2xl w-full">
          Metodo: <span className='text-black'>{`User pay method`}</span>
        </p>
        <p className="text-gray-500 font-semibold text-2xl w-full">
          Referencia: <span className='text-black'>{`User reference`}</span>
        </p>
        <p className="text-gray-500 font-semibold text-2xl w-full">
          Whatsapp: <span className='text-black'>{`User whatsapp`}</span>
        </p>
      </section>
    </div>
  )
}

export default User