import { Button, Image, Input, Textarea } from "@nextui-org/react";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { useRef, useState } from "react";
import NextImage from "next/image";
import ClearIcon from "@mui/icons-material/Clear";
import { json } from "stream/consumers";

const PostSuenio = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleButtonClick = () => {
    inputRef?.current?.click();
  };

  const [imagePreview, setImagePreview] = useState<string[]>([]);

  const [cantidadImgExcedida, setCantidadImgExcedida] = useState(false);

  const [tamanioIncorrecto, setTamanioIncorrecto] = useState(false);

  const handleImageChoose = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e?.target?.files;

    const minPX = 500;
    const maxPX = 1200;

    if (files && files?.length >= 3) {
      setCantidadImgExcedida(true);
    } else if (files && files?.length < 3) {

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
            setImagePreview((prevImages) => [...prevImages, img.src]);
            setTamanioIncorrecto(false);
          } else {
            setTamanioIncorrecto(true);
          }
        };
      }
    }
  };

  return (
    <form className="flex flex-col  gap-2">
      <h3>¿Qué soñaste anoche?</h3>
      <div className="flex gap-2 items-center">
        <Textarea
          variant="faded"
          labelPlacement="outside"
          label="Suénio"
          placeholder="Soñé que..."
          className="col-span-12 md:col-span-6 h-full textAreaPostSuenio"
          minRows={4}
          maxRows={8}
          color="secondary"
        />
        <Button color="secondary" type="submit" className="h-full">
          Enviar
        </Button>
      </div>

      <div className="flex gap-2 items-center">
        <div className="flex flex-col gap-1">
          <Button
            startContent={<AddAPhotoIcon />}
            variant="ghost"
            onClick={handleButtonClick}
            className="self-start"
            color="success"
            isDisabled={imagePreview.length === 3}
          >
            Agregar imagen
            <input
              ref={inputRef}
              id="postImg"
              type="file"
              accept="image/*"
              multiple
              capture
              className="appearance-none hidden"
              onChange={(e) => handleImageChoose(e)}
            />
          </Button>
          <p
            className={`text-xs text-gray-500 ${
              cantidadImgExcedida && "text-red-500"
            }`}
          >
            - Máximo 3 imagenes
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
                  onClick={() =>
                    setImagePreview((prev) =>
                      prev.filter((img) => img !== imageUrl)
                    )
                  }
                >
                  <ClearIcon className="text-4xl" />
                </div>
              </figure>
            ))}
        </div>
      </div>
    </form>
  );
};

export default PostSuenio;
