import { useRouter } from 'next/router'
import React from 'react'
import Link from 'next/link';
import Form from '../../../../components/molecules/Form';
import FieldForm from '../../../../components/atoms/FieldForm';
import FormButton from '../../../../components/atoms/FormButton';
import UserInfo from '../../../../components/molecules/UserInfo';

function Edit() {
  const { id } = useRouter().query;

  const myUser = 
    {
      id: 6, 
      "name": "nombre del usuario",
      "metodo": "nequi",
      "email": "test@test.com",
      "referencia": 1231241,
      "password": "dasd2131",
      "telefono": 2134123,
    };

  const metodos = [
    {
      id: 1,
      "metodo": "nequi"
    },
    {
      id: 2,
      "metodo": "daviplata"
    },
  ];

  const buttonAction = () => (
    console.log("test 2")
  );

  return (
    <div className="w-full mx-auto h-screen border-2 lg:w-2/4 flex flex-col justify-start items-center gap-5 px-10">
      <div className="w-full">
        <UserInfo email={myUser.email} />
        <Link
          href="/app/users/"
          className="text-gray-500 underline w-full text-left"
        >
          Volver
        </Link>
      </div>
      <h3 className="text-gray-500 font-semibold text-3xl w-full">
        Usuario {id}
      </h3>
      <Form>
        <FieldForm field="nombre" typeinput="text" default_value={myUser.name}>
          {myUser.name}
        </FieldForm>
        <FieldForm field="email" typeinput="email" default_value={myUser.email}>
          {myUser.email}
        </FieldForm>
        <FieldForm field="password" typeinput="password" default_value={myUser.password}>
          {myUser.password}
        </FieldForm>
        <select name="metodos" id="metodos" className='border-2 p-2 w-full'>
          {metodos.map(metodo => (
            <option value={metodo.metodo} key={metodo.metodo}>{metodo.metodo}</option>
          ))}
        </select>
        <FieldForm field="whatsapp" typeinput="number" default_value={myUser.telefono}>
          {myUser.telefono}
        </FieldForm>
        <div className="flex flex-col justify-center items-center gap-5">
          <FormButton type_button="button" action={buttonAction}>Actualizar Información</FormButton>
        </div>
      </Form>
    </div>
  )
}

export default Edit