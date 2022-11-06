import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Button from "../../../components/atoms/Button";
import UserInfo from "../../../components/molecules/UserInfo";
function users() {

  const { id } = useRouter().query; 

  const myUser = {
    id: 6,
    "name": "User 2",
    "pasword": "dasdasdasd",
    "email": "test@test.com",
    "metodo": "nequi",
    "referencia": "asdasdasd",
    "Whatsapp": "2153412312",
    "email": "test@mail.com",
  };

  const UserView = () => (
    <div className="flex flex-col justify-start items-center min-h-screen border-2 w-full mx-auto px-10 xl:w-2/4">
      <div className="w-full">
        <UserInfo email={myUser.email} />
        <Link
          href={`/app/dashboard/`}
          className="text-gray-500 underline w-full text-left"
        >
          Volver
        </Link>
      </div>
      <div className="h-full flex flex-col justify-center items-center w-full pt-10">
        <h1 className="text-gray-500 font-semibold text-3xl w-full">
          Usuarios
        </h1>
        <div className="w-full flex flex-row justify-between items-center gap-5 h-max my-10 mx-0 xl:mx-10 xl:w-3/4">
          <Link href={`/app/users/${myUser.id}`}>
            <h2 className="text-gray-500 font-semibold text-2xl w-full underline">
              {myUser.name}
            </h2>
          </Link>
          <Link href={`/app/users/edit/${myUser.id}`}>
            <Button>Editar</Button>
          </Link>
        </div>
      </div>
    </div>
  );

  return <UserView />;
}

export default users;
