import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Button from "../../../../../components/atoms/Button";
import UserInfo from "../../../../../components/molecules/UserInfo";

function users() {
  const isAdmin = false;
  const myId = 2;

  const USERS = [
    {
      id: 1,
      name: "User 1",
    },
    {
      id: 2,
      name: "User 2",
    },
    {
      id: 3,
      name: "User 3",
    },
    {
      id: 4,
      name: "User 4",
    },
    {
      id: 5,
      name: "User 5",
    },
    {
      id: 6,
      name: "User 6",
    },
  ];

  const myUser = {
    id: 6,
    name: "User 2",
    pasword: "dasdasdasd",
    metodo: "nequi",
    referencia: "asdasdasd",
    Whatsapp: "2153412312",
    email: "test@mail.com",
  };

  const { id } = useRouter().query;

  const ListUsers = () => (
    <div className="flex flex-col justify-start items-center min-h-screen border-2 w-full mx-auto px-10 xl:w-2/4">
      <div className="w-full">
        <UserInfo email={myUser.email} />
        <Link
          href={`/app/campaigns/${id}/`}
          className="text-gray-500 underline w-full text-left"
        >
          Volver
        </Link>
      </div>
      <h1 className="text-gray-500 font-semibold text-3xl w-full">Usuarios</h1>
      <div className="w-full flex flex-col justify-center items-center gap-5 h-max my-10 mx-0 xl:mx-10 xl:w-3/4">
        {USERS.map((user) => (
          <div className="flex flex-row w-full justify-between" key={user.id}>
            <Link href={`/app/campaigns/${id}/users/${user.id}`}>
              <h2 className="text-gray-500 font-semibold text-2xl w-full underline">
                {user.name}
              </h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );

  return <ListUsers />;
}

export default users;
