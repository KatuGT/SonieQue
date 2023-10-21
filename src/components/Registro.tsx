import { Button, Input, Listbox, ListboxItem } from "@nextui-org/react";
import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const Registro = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const [selectedKeys, setSelectedKeys] = useState(new Set(["text", "number"]));

  return (
    <div className="z-10 flex-1 flex flex-col justify-center gap-4 items-center p-4 registro w-full mx-auto sm:w-2/3 md:w-1/2">
      <h3 className="z-10">Registrate</h3>
      <form className="flex flex-col gap-2 text-center w-full md:w-1/2 justify-center items-center">
        <Input size={"sm"} type="text" label="Nombre" color="secondary" />
        <Input size={"sm"} type="email" label="Email" color="secondary" />
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
        <Input
          size={"sm"}
          type={isVisible ? "text" : "password"}
          color="secondary"
          label="Confirma contraseña"
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
        <section className="text-left text-xs self-start">
          <p className="font-semibold">La contraseña debe tener...</p>
          <ul>
            <li className="text-gray-400">Almenos 8 carácteres</li>
            <li className="text-gray-400">Almenos 1 número</li>
            <li className="text-gray-400">Almenos 1 carácter especial</li>
          </ul>
        </section>
        <Button variant="solid" color="secondary">
          Registrate
        </Button>
      </form>
    </div>
  );
};

export default Registro;
