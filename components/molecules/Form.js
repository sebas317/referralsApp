import React from "react";

function Form({children}) {
  return (
    <form className="flex flex-col justify-center w-full gap-5">
      {children}
    </form>
  );
}

export default Form;
