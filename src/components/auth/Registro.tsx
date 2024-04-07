"use client";
import { Button, Input } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { AxiosError } from "axios";
import { axiosInstance } from "@/utils/axiosInstance";
import JSConfetti from "js-confetti";
import { registroSchema } from "@/utils/formulSchemas/registroSchema";

interface RegistroProps {
  nickName: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

const Registro = () => {
  useEffect(() => {
    async function getLoader() {
      const { squircle } = await import("ldrs");
      squircle.register();
    }
    getLoader();
  }, []);

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<RegistroProps>({
    resolver: zodResolver(registroSchema),
  });

  const contraseniaCheck = useWatch({
    control,
    name: "password",
  });

  const [confirmEmail, setConfirmEmail] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const onSubmitRegistro = async (data: RegistroProps) => {
    const jsConfetti = new JSConfetti();
    setError("");
    setIsLoading(true);
    try {
      const response = await axiosInstance.post("/signup", data);
      if (response.status === 201) {
        jsConfetti.addConfetti();

        setIsLoading(false);
        reset();
        setConfirmEmail(true);
      }
    } catch (error) {
      console.error("Error al registrarse", error);
      setIsLoading(false);
      setConfirmEmail(false);
      if (error instanceof AxiosError) {
        setError(error?.response?.data);
      }
    }
  };

  return (
    <div className="z-10 flex-1 flex flex-col justify-center gap-4 items-center p-4 registro w-full mx-auto sm:w-2/3 md:w-1/2">
      <h3 className="z-10">Registrate</h3>
      <form
        onSubmit={handleSubmit(onSubmitRegistro)}
        className="flex flex-col gap-2 text-center w-full md:w-1/2 justify-center items-center"
      >
        <Input
          size={"sm"}
          type="text"
          label="Nombre"
          color="secondary"
          isInvalid={!!errors?.nickName?.message}
          errorMessage={errors?.nickName?.message}
          {...register("nickName")}
        />
        <Input
          size={"sm"}
          type="email"
          label="Email"
          color="secondary"
          isInvalid={!!errors?.email?.message}
          errorMessage={errors?.email?.message}
          {...register("email")}
        />
        <Input
          size={"sm"}
          type={isVisible ? "text" : "password"}
          color="secondary"
          label="Contraseña"
          isInvalid={!!errors?.password?.message}
          errorMessage={errors?.password?.message}
          {...register("password")}
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
          isInvalid={!!errors?.passwordConfirm?.message}
          errorMessage={errors?.passwordConfirm?.message}
          {...register("passwordConfirm")}
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
            <li
              className={`text-gray-400 ${
                contraseniaCheck?.length > 7 && "text-green-500"
              }`}
            >
              Almenos 8 caracteres
            </li>
            <li
              className={`text-gray-400 ${
                contraseniaCheck !== undefined &&
                /[a-zA-Z]/.test(contraseniaCheck) &&
                "text-green-500"
              }`}
            >
              Almenos 1 letra
            </li>
            <li
              className={`text-gray-400 ${
                /\d/.test(contraseniaCheck) && "text-green-500"
              }`}
            >
              Almenos 1 número
            </li>
            <li
              className={`text-gray-400 ${
                /[!@#$%^&*()?]/.test(contraseniaCheck) && "text-green-500"
              }`}
            >
              Almenos 1 carácter especial !@#$%^&*()?
            </li>
          </ul>
        </section>
        <Button variant="solid" type="submit" color="secondary">
          {isLoading ? (
            <>
              <l-squircle
                size="20"
                stroke="5"
                stroke-length="0.15"
                bg-opacity="0.1"
                speed="0.9"
                color="white"
              ></l-squircle>

              <span>Procesando...</span>
            </>
          ) : (
            "Registrate"
          )}
        </Button>
      </form>
      {confirmEmail && (
        <p className="max-w-md text-center balance">
          Registro exitoso, solo falta que revises tu email para y confirmar
        </p>
      )}

      {error && (
        <p className="max-w-md text-center balance text-red-500">{error}</p>
      )}
    </div>
  );
};

export default Registro;
