"use client";
import {
  Button,
  Radio,
  RadioGroup,
  Input,
  ScrollShadow,
} from "@nextui-org/react";
import EditIcon from "@mui/icons-material/Edit";
import { userProps } from "@/tipos/userTipos";
import { Controller, useController, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { axiosInstance } from "@/utils/axiosInstance";
import Cookies from "js-cookie";
import { userEditSchema } from "@/utils/formulSchemas/userEditSchema";
import Image from "next/image";
import { imagenesAnonimas } from "@/utils/profilePictures";
import RadioButtonImage from "./RadioButtonImage";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { coloresBorde } from "@/utils/colorOptions";
import axios from "axios";

interface userPatchProps {
  nickName: string;
  imageProfile: any;
  borderColorImg: string;
  [key: string]: string;
}

const UserEdit = ({ currentUserDAta }: { currentUserDAta: userProps }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<userPatchProps>({
    resolver: zodResolver(userEditSchema),
  });

  const [error, setError] = useState("");

  const { field } = useController({ control, name: "imageProfile" });

  const onSubmitEdit = async (data: userPatchProps) => {
    setError("");

    console.log(data);
    const formData = new FormData();

    for (const key in data) {
      formData.append(key, data[key]);
    }

    try {
      const response = await axios.patch(
        "http://localhost:8080/api/user/attribute_modification",
        formData,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const [imagenPreview, setImagenPreview] = useState("");
  const [tamanioIncorrecto, setTamanioIncorrecto] = useState(false);

  const handleChosenImagen = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e?.target?.files && e?.target?.files[0];

    const img = new (window as any).Image();

    if (file) {
      img.src = URL.createObjectURL(file);
      setImagenPreview(img.src);

      const minPX = 768;
      const maxPX = 2048;

      const width = img.width;
      const height = img.height;
      if (
        ((width >= minPX || height >= minPX) && width <= maxPX) ||
        height <= maxPX
      ) {
        setImagenPreview(img.src);
        setTamanioIncorrecto(false);
      } else {
        setTamanioIncorrecto(true);
      }
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmitEdit)}
        className="flex flex-col gap-10 w-full"
      >
        <div className="w-[fit-content]">
          <ScrollShadow className="h-[400px] mt-4">
            <RadioGroup orientation="horizontal">
              <span className="w-[140px] h-[168px] rounded-xl border-3 border-gray-700">
                <input
                  type="file"
                  className="hidden w-full h-full"
                  accept="image/*"
                  capture
                  id="subir-foto-perfil"
                  onChange={(e) => {
                    field.onChange(e.target.files && e.target.files[0]);
                    handleChosenImagen(e);
                  }}
                />

                {imagenPreview ? (
                  <>
                    <label
                      htmlFor="subir-foto-perfil"
                      className="px-4 pt-4 w-full  cursor-pointer flex justify-center"
                    >
                      <Image
                        alt="imagen de perfil"
                        src={imagenPreview}
                        height={100}
                        width={100}
                        className="rounded-xl overflow-hidden"
                      />
                    </label>
                    <button
                      className="text-center w-full pt-2 text-red-600"
                      type="button"
                      onClick={() => setImagenPreview("")}
                    >
                      Borrar
                    </button>
                  </>
                ) : (
                  <label
                    htmlFor="subir-foto-perfil"
                    className="flex cursor-pointer flex-col justify-center items-center h-full"
                  >
                    <AddAPhotoIcon />
                    <p>Agregar foto</p>
                  </label>
                )}
              </span>

              {imagenesAnonimas.map((imagen, index) => (
                <RadioButtonImage
                  key={index}
                  value={imagen.path}
                  onChange={() => setImagenPreview(imagen.path)}
                >
                  <Image
                    alt="imagen de perfil"
                    src={imagen.path}
                    height={100}
                    width={100}
                    className="rounded-xl overflow-hidden"
                  />
                </RadioButtonImage>
              ))}
            </RadioGroup>
          </ScrollShadow>

          <Controller
            name="borderColorImg"
            control={control}
            render={({ field }) => (
              <RadioGroup
                label="Color de borde"
                orientation="horizontal"
                color="secondary"
                {...field}
              >
                {coloresBorde.map((color) => (
                  <Radio
                    value={color?.value ? color?.value : ""}
                    key={color.value}
                    color={color.value}
                  >
                    {color.displayName}
                  </Radio>
                ))}
              </RadioGroup>
            )}
          />
        </div>

        <div className="w-[min-content]">
          <Controller
            name="nickName"
            control={control}
            render={({ field }) => (
              <Input
                autoFocus
                endContent={
                  <EditIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                }
                label="Nombre / Apodo"
                placeholder={currentUserDAta?.nickName}
                variant="bordered"
                style={{ width: "fit-content" }}
                {...field}
              />
            )}
          />
        </div>
        <button>Send</button>
      </form>
    </div>
  );
};

export default UserEdit;
