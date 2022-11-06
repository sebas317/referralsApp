import React from 'react'
import Form from '../../../components/molecules/Form'
import FieldForm from '../../../components/atoms/FieldForm'
import FormButton from '../../../components/atoms/FormButton'
import Link from 'next/link';

function create() {

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

  const buttonAction = () => {
    console.log('test')
  }

  return (
    <div className="w-full mx-auto h-screen border-2 lg:w-2/4 flex flex-col justify-center items-start gap-5 px-10">
      <Link href="/app/campaigns/" className='text-gray-500 underline'>
        Volver
      </Link>
      <h3 className="text-gray-500 font-semibold text-3xl w-full">
        Crear Campaña
      </h3>
      <Form>
        <FieldForm field="nombre" typeinput="text">
          Nombre
        </FieldForm>
        <FieldForm field="porcentaje" typeinput="number">
          Porcentaje de administración
        </FieldForm>
        <FieldForm field="valor" typeinput="number">
          Valor
        </FieldForm>
        <select name="metodos" id="metodos" className='border-2 p-2 w-full'>
          {metodos.map(metodo => (
            <option value={metodo.metodo} key={metodo.metodo}>{metodo.metodo}</option>
          ))}
        </select>
        <FieldForm field="referencia" typeinput="text">
          Referencia
        </FieldForm>
        <div className="flex flex-col justify-center items-center gap-5">
          <FormButton type_button="button" action={buttonAction}>Crear Campaña</FormButton>
        </div>
      </Form>
    </div>
  )
}

export default create