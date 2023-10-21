import { Button, Input } from "@nextui-org/react";
import React, { useState } from "react";
import BotonLoginConRed from "./BotonLoginConRed";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const Login = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <div className="z-10 flex-1 flex flex-col justify-center gap-4 items-center p-4 w-full mx-auto sm:w-2/3 md:w-1/2">
      <h3 className="z-10">Ingresa con...</h3>
      <div className="flex flex-col gap-2 text-center w-full justify-center items-center">
        <BotonLoginConRed red="google" />
        <BotonLoginConRed red="facebook" />
        <BotonLoginConRed red="instagram" />
        <BotonLoginConRed red="twitter" />
      </div>
      <span className="text-center z-10">
        O con tu Email y contraseña
      </span>

      <form className="flex flex-col gap-2 text-center  w-full justify-center items-center md:w-1/2">
        <Input
          size={"sm"}
          type="email"
          label="Email"
          color="secondary"
        />
        <Input
          size={"sm"}
          type={isVisible ? "text" : "password"}
          color="secondary"
          label="Contraseña"
          onClick={toggleVisibility}
          endContent={
            <button
              className="focus:outline-none"
              type="button"
              onClick={toggleVisibility}
            >
              {!isVisible ? (
                <VisibilityOffIcon className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <VisibilityIcon className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
        />
        <Button variant="solid" color="secondary">
          Ingresar
        </Button>
      </form>
    </div>
  );
};

export default Login;
