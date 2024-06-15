"use client";
import React, { useState } from "react";
import { redirect, useRouter } from "next/navigation";
import { Input, Button, Checkbox } from "@nextui-org/react";
import BotonLoginConRed from "../BotonLoginConRed";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { axiosInstance } from "@/utils/axiosInstance";
import Cookies from "js-cookie";
import axios, { AxiosError } from "axios";
import { loginSchema } from "@/utils/formulSchemas/loginSchema";
import { useSWRConfig } from "swr";
import { useUserStore } from "@/store/user";

interface LoginProps {
  email: string;
  loginKey: string;
  recordarme: boolean;
}

const Login = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginProps>({
    resolver: zodResolver(loginSchema),
  });

  const router = useRouter();
  const [error, setError] = useState("");

  const { mutate } = useSWRConfig();
  const setUser = useUserStore((state) => state.setUser);

  const onSubmitLogin = async (data: LoginProps) => {
    setError("");
    try {
      const response = await axiosInstance.post("/login", data);

      if (response?.status === 200) {
        if (data.recordarme) {
          Cookies.set("token", response.data.token, { expires: 30 });
        } else {
          Cookies.set("token", response.data.token);
        }

        try {
          const responseLogin = await axiosInstance("/user/get_user_auth", {
            headers: { Authorization: `Bearer ${response.data.token}` },
          });
          if (responseLogin.status === 200) {
            setUser(responseLogin.data);
          }
          mutate("/user/get_user_auth");
          
          router.push("/");
        } catch (error) {
          console.log(error);
        }
      }
    } catch (error) {
      console.log("Error al logearte", error);

      if (axios.isAxiosError(error)) {
        setError(error?.response?.data?.description);
      } else {
        setError("Error desconocido");
      }
    }
  };

  return (
    <div className="z-10 flex-1 flex flex-col justify-center gap-4 items-center p-4 w-full mx-auto sm:w-2/3 md:w-1/2">
      <h3 className="z-10">Ingresa con...</h3>
      <div className="flex flex-col gap-2 text-center w-full justify-center items-center">
        <BotonLoginConRed red="google" />
        <BotonLoginConRed red="facebook" />
        <BotonLoginConRed red="instagram" />
        <BotonLoginConRed red="twitter" />
      </div>
      <span className="text-center z-10">O con tu Email y contraseña</span>

      <form
        onSubmit={handleSubmit(onSubmitLogin)}
        className="flex flex-col gap-2 text-center  w-full justify-center items-center md:w-1/2"
      >
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
          isInvalid={!!errors?.loginKey?.message}
          errorMessage={errors?.loginKey?.message}
          {...register("loginKey")}
        />

        <Checkbox>Recordarme</Checkbox>
        <Button variant="solid" type="submit" color="secondary">
          Ingresar
        </Button>
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
