import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Input } from "@nextui-org/react";
import BotonLoginConRed from "./BotonLoginConRed";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

interface LoginProps {
  email: string;
  password: string;
}

const Login = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const loginSchema = z
    .object({
      email: z.string().email("Ingresa un e-mail valido."),
      password: z.string().min(8, "Contraseña incorrecta"),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginProps>({
    resolver: zodResolver(loginSchema),
  });

  const router = useRouter();

  const onSubmitLogin = (data: LoginProps) => {
    console.log(data);
    router.push("/");
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
          isInvalid={!!errors?.password?.message}
          errorMessage={errors?.password?.message}
          {...register("password")}
        />
        <Button variant="solid" type="submit" color="secondary">
          Ingresar
        </Button>
      </form>
    </div>
  );
};

export default Login;
