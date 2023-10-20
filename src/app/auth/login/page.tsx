"use client";
import BotonLoginConRed from "@/components/BotonLoginConRed";
import { Button, Divider, Input } from "@nextui-org/react";
import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
const Page = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <section className="flex flex-1 pb-40">
      <div className=" flex-1 flex flex-col justify-center gap-4 items-center p-4">
        <h3>Ingresa con...</h3>
        <div className="flex flex-col gap-2 text-center w-full justify-center items-center">
          <BotonLoginConRed red="google" />
          <BotonLoginConRed red="facebook" />
          <BotonLoginConRed red="instagram" />
          <BotonLoginConRed red="twitter" />
        </div>
        <span className="w-1/2 text-center">
          O con tu Email y contraseña
        </span>

        <form className="flex flex-col gap-2 text-center  w-full justify-center items-center">
          <Input
            className="w-1/2"
            size={"sm"}
            variant="bordered"
            type="email"
            label="Email"
            color="secondary"
          />
          <Input
            className="w-1/2"
            size={"sm"}
            variant="bordered"
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
      <div className=" flex-1 border flex justify-center p-4">d</div>
    </section>
  );
};

export default Page;
