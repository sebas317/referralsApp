import React from 'react'
import Link from 'next/link'
import FieldForm from '../../../../components/atoms/FieldForm'
import Form from '../../../../components/molecules/Form'
import FormButton from '../../../../components/atoms/FormButton'

function ReportPayment() {
  return (
    <div className="w-full mx-auto h-screen border-2 lg:w-2/4 flex flex-col justify-center items-start gap-5 px-10">
      <Link href="/app/campaigns/" className='text-gray-500 underline'>
        Volver
      </Link>
      <h3 className="text-gray-500 font-semibold text-3xl w-full">
        Reportar pago
      </h3>
      <Form>
        <FieldForm field="nombre" typeinput="text">
          Nombre del destinatario
        </FieldForm>
        <FieldForm field="comprobante" typeinput="file">
          Prueba de pago
        </FieldForm>
        <div className="flex flex-col justify-center items-center gap-5">
          <FormButton type_button="button">Enviar</FormButton>
        </div>
      </Form>
    </div>
  )
}

export default ReportPayment