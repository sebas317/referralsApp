import Link from "next/link";
import React from "react";
import Button from "../../components/atoms/Button";
import UserInfo from "../../components/molecules/UserInfo";

function dashboard() {
  const email = "test@email.com";

  return (
    <div className="h-screen border-2 w-full mx-auto xl:w-2/4">
      <UserInfo email={email} />
      <div className="w-full flex flex-col gap-5 justify-center items-center pt-10 h-3/4">
        <Link href='/app/campaigns/'>
          <Button>Campañas</Button>
        </Link>
        <Link href='/app/users/'>
          <Button>Usuarios</Button>
        </Link>
        <Link href='/app/red/'>
          <Button>Ver Red</Button>
        </Link>
      </div>
    </div>
  );
}

export default dashboard;
