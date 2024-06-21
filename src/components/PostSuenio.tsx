import {
  Button,
  Textarea,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  CheckboxGroup,
  Checkbox,
  Input,
} from "@nextui-org/react";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { useEffect, useRef, useState } from "react";
import NextImage from "next/image";
import ClearIcon from "@mui/icons-material/Clear";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { uploadImages } from "@/utils/uploadImages";
import CheckboxTag from "./CheckboxTag";
import { filtros } from "@/utils/filtros";
import { axiosInstance } from "@/utils/axiosInstance";
import Cookies from "js-cookie";
import { postSueniosSchema } from "@/utils/formulSchemas/postSuenio";
import { useSWRConfig } from "swr";

interface PostSuenioProps {
  story: string;
  title: string;
  anonymous: boolean;
  images: any;
  idCategory: string[];
}

const PostSuenio = () => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  const [imagePreview, setImagePreview] = useState<string[]>([]);

  const [cantidadImgExcedida, setCantidadImgExcedida] = useState(false);

  const [tamanioIncorrecto, setTamanioIncorrecto] = useState(false);

  const [archivosParaSubir, setArchivosParaSubir] = useState<any>();

  const handleChosenImagen = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e?.target?.files;

    const minPX = 500;
    const maxPX = 1200;

    if ((files && files?.length >= 4) || imagePreview.length >= 3) {
      setCantidadImgExcedida(true);
    } else if (files && files?.length <= 3) {
      setCantidadImgExcedida(false);

      const filesArray = Array.from(files);

      for (const file of filesArray) {
        const img = new (window as any).Image();
        img.src = URL.createObjectURL(file);

        img.onload = function () {
          const width = img.width;
          const height = img.height;

          if (
            ((width >= minPX || height >= minPX) && width <= maxPX) ||
            height <= maxPX
          ) {
            // setImagePreview((prevImages) => [...prevImages, img.src]);
            setImagePreview((prevImages) => [img.src]);
            setTamanioIncorrecto(false);
            setArchivosParaSubir(files[0]);
          } else {
            setTamanioIncorrecto(true);
          }
        };
      }
    }
  };

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<PostSuenioProps>({
    resolver: zodResolver(postSueniosSchema),
    defaultValues: {
      title: "",
      story: "",
      anonymous: false,
      images: "",
      idCategory: [],
    },
  });

  // useEffect(() => {
  //   if (isSubmitSuccessful) {
  //     reset({ story: "", images: null, idCategory: [] });
  //     setImagePreview([]);
  //     setArchivosParaSubir(null);
  //   }
  // }, [isSubmitSuccessful, reset]);

  const token = Cookies.get("token");

  const { mutate } = useSWRConfig();

  const onSubmitLogin = async (data: PostSuenioProps) => {
    const formdata = new FormData();

    for (const key in data) {
      const value = data[key as keyof PostSuenioProps];

      if ((value !== null && !Array.isArray(value)) || key !== "tags") {
        formdata.append(key, value.toString());
      } else if (Array.isArray(value) && key === "tags") {
        for (const tag of value) {
          formdata.append(key, tag.toString());
        }
      }
    }

    try {
      if (archivosParaSubir) {
        // const imageURLs = await uploadImages(archivosParaSubir);
        formdata.append("images", archivosParaSubir);
        setTamanioIncorrecto(false);
        setCantidadImgExcedida(false);
      }

      const response = await axiosInstance.post("/user/new_post", formdata, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.status === 201) {
        mutate("/public/latest_posts");
        mutate("/public/latest_posts");
        resetForm();
        onClose();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const resetForm = () => {
    reset({ images: null, story: "", idCategory: [] }), setImagePreview([]);
    setArchivosParaSubir([]);
  };

  return (
    <>
      <Button onPress={onOpen}>Contanos que soñaste</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="2xl">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                ¿Qué soñaste?
              </ModalHeader>
              <ModalBody>
                <form
                  onSubmit={handleSubmit(onSubmitLogin)}
                  className="flex flex-col  gap-2"
                >
                  <Controller
                    name="title"
                    control={control}
                    render={({ field }) => (
                      <Input
                        autoFocus
                        placeholder={"Título genial aquí"}
                        variant="faded"
                        color="secondary"
                        style={{ width: "fit-content" }}
                        {...field}
                      />
                    )}
                  />
                  {errors.title && (
                    <p className="text-xs text-danger-300">
                      {errors.title.message}
                    </p>
                  )}

                  <Controller
                    control={control}
                    name="story"
                    render={({ field: { onChange, onBlur, value, ref } }) => (
                      <Textarea
                        ref={ref}
                        variant="faded"
                        placeholder="Soñé que..."
                        className="col-span-12 md:col-span-6 h-full textAreaPostSuenio"
                        minRows={4}
                        maxRows={8}
                        color="secondary"
                        isInvalid={!!errors.story}
                        isRequired={true}
                        onChange={onChange}
                        onBlur={onBlur}
                        value={value}
                      />
                    )}
                  />

                  {errors.story && (
                    <p className="text-xs text-danger-300">
                      {errors.story.message}
                    </p>
                  )}

                  <Controller
                    name="anonymous"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <Checkbox onChange={onChange} isSelected={value}>
                        Publicar anonimamente
                      </Checkbox>
                    )}
                  />

                  <div className="flex flex-col gap-2">
                    <div className="flex flex-col gap-1">
                      <span className="text-xs text-gray-500">
                        Imagen opcional*
                      </span>
                      <label htmlFor="botonImagen" className="cursor-pointer">
                        <Button
                          startContent={<AddAPhotoIcon />}
                          variant="ghost"
                          className="self-start"
                          color="success"
                          style={{ pointerEvents: "none", cursor: "pointer" }}
                          isDisabled={!imagePreview ? true : false}
                        >
                          Agregar imagen
                        </Button>
                      </label>

                      <Controller
                        control={control}
                        name="images"
                        render={({
                          field: { onChange, onBlur, value, ref },
                        }) => (
                          <input
                            className="appearance-none hidden"
                            ref={ref}
                            id="botonImagen"
                            type="file"
                            accept="image/*"
                            capture
                            disabled={!imagePreview ? true : false}
                            onChange={(e) => {
                              onChange(e);
                              handleChosenImagen(e);
                            }}
                            onBlur={onBlur}
                          />
                        )}
                      />

                      <p
                        className={`text-xs text-gray-500 ${
                          cantidadImgExcedida && "text-red-500"
                        }`}
                      >
                        - Máximo 1 imagen
                      </p>
                      <p
                        className={`text-xs text-gray-500 ${
                          tamanioIncorrecto && "text-red-500"
                        }`}
                      >
                        - 500px mínimo, 1200px máximo
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      {imagePreview &&
                        imagePreview.map((imageUrl, index) => (
                          <figure
                            key={index}
                            className="relative cursor-pointer overflow-hidden h-16  w-16 rounded-lg"
                          >
                            <NextImage
                              fill={true}
                              objectFit="cover"
                              src={imageUrl}
                              alt="Vista previa de imagenes seleccionadas"
                              className="cursor-pointer bg-slate-50"
                            />
                            <div
                              className="absolute h-full w-full bg-gray-600/30 inset-0 z-10 opacity-0 hover:opacity-100 overflow-hidden flex justify-center items-center text-superDarkBlue text-xl"
                              onClick={() => {
                                setImagePreview((prev) =>
                                  prev.filter((img) => img !== imageUrl)
                                );
                                setArchivosParaSubir("");
                              }}
                            >
                              <ClearIcon className="text-4xl" />
                            </div>
                          </figure>
                        ))}
                    </div>

                    <CheckboxGroup
                      label="Selecciona tags"
                      orientation="horizontal"
                      color="secondary"
                    >
                      {filtros.map((tag, index) => {
                        return (
                          <Controller
                            key={index}
                            control={control}
                            name="idCategory"
                            render={(field) => (
                              <CheckboxTag
                                {...field}
                                key={index}
                                color={tag.color}
                                texto={tag.key}
                                value={tag.value}
                              />
                            )}
                          />
                        );
                      })}
                    </CheckboxGroup>
                    {errors.idCategory && (
                      <p className="text-xs text-danger-300">
                        {errors.idCategory.message}
                      </p>
                    )}
                  </div>
                  <Button color="secondary" variant="light" type="submit">
                    Enviar
                  </Button>
                  <Button color="warning" variant="light" onClick={resetForm}>
                    Borrar
                  </Button>
                </form>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default PostSuenio;
