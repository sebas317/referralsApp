import { useRouter } from 'next/router'
import React from 'react'
import Link from 'next/link';
import Form from '../../../../components/molecules/Form';
import FieldForm from '../../../../components/atoms/FieldForm';
import FormButton from '../../../../components/atoms/FormButton';

function Edit() {
  const { id } = useRouter().query;

  const campaign = 
    {
      id: 1, 
      "name": "First Campaign",
      "porcentaje": 10,
      "valor": 20000,
      "metodo": "nequi",
      "referencia": 1231241,
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
    <div className="w-full mx-auto h-screen border-2 lg:w-2/4 flex flex-col justify-center items-start gap-5 px-10">
      <Link href="/app/campaigns/" className='text-gray-500 underline'>
        Volver
      </Link>
      <h3 className="text-gray-500 font-semibold text-3xl w-full">
        Campaña {id}
      </h3>
      <Form>
        <FieldForm field="nombre" typeinput="text" default_value={campaign.name}>
          {campaign.name}
        </FieldForm>
        <FieldForm field="porcentaje" typeinput="number" default_value={campaign.porcentaje}>
          {campaign.porcentaje}
        </FieldForm>
        <FieldForm field="valor" typeinput="number" default_value={campaign.valor}>
          {campaign.valor}
        </FieldForm>
        <select name="metodos" id="metodos" className='border-2 p-2 w-full'>
          {metodos.map(metodo => (
            <option value={metodo.metodo} key={metodo.metodo}>{metodo.metodo}</option>
          ))}
        </select>
        <FieldForm field="referencia" typeinput="text" default_value={campaign.referencia}>
          {campaign.referencia}
        </FieldForm>
        <div className="flex flex-col justify-center items-center gap-5">
          <FormButton type_button="button" action={buttonAction}>Actualizar Campaña</FormButton>
        </div>
      </Form>
    </div>
  )
}

export default Edit