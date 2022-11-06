import { useRouter } from "next/router";
import React from "react";
import Link from "next/link";
import Button from "../../../../components/atoms/Button";

function Campaign() {
  const { id } = useRouter().query;
  const isJoined = true;

  const Menu = () =>
    !isJoined ? (
      <Link href={`/app/campaigns/${id}/join/`}>
        <Button>Unirme a la campaña</Button>
      </Link>
    ) : (
      <div className="w-full flex flex-col gap-5">
        <Link href={`/app/campaigns/${id}/users/`}>
          <Button>Ver Usuarios</Button>
        </Link>
        <Link href={`/app/campaigns/${id}/reportpayment/`}>
          <Button>Reportar pago</Button>
        </Link>
        <Link href={`/app/campaigns/${id}/payments/`}>
          <Button>Reportar Pagos Recibidos</Button>
        </Link>
      </div>
    );

  return (
    <div className="w-full mx-auto h-screen border-2 lg:w-2/4 flex flex-col justify-center items-start gap-5 px-10">
      <Link
        href="/app/campaigns/"
        className="text-gray-500 underline w-full text-left"
      >
        Volver
      </Link>
      <h3 className="text-gray-500 font-semibold text-3xl w-full">
        Campaña {id}
      </h3>
      <section className="flex flex-col gap-5 w-full mx-auto xl:w-3/4">
        <p className="text-gray-500 font-semibold text-2xl w-full">
          Nombre: <span className="text-black">{`Campaign name`}</span>
        </p>
        <p className="text-gray-500 font-semibold text-2xl w-full">
          Porcentaje de administración:{" "}
          <span className="text-black">{`Campaign %`}</span>
        </p>
        <p className="text-gray-500 font-semibold text-2xl w-full">
          Valor: <span className="text-black">{`Campaign valor`}</span>
        </p>
        <p className="text-gray-500 font-semibold text-2xl w-full">
          Metodo: <span className="text-black">{`Campaign metodo`}</span>
        </p>
        <p className="text-gray-500 font-semibold text-2xl w-full">
          Referencia:{" "}
          <span className="text-black">{`Campaign referencia`}</span>
        </p>
        <Menu/>
      </section>
    </div>
  );
}

export default Campaign;
