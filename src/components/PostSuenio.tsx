import { Button, Image, Input, Textarea } from "@nextui-org/react";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { useRef, useState } from "react";
import NextImage from "next/image";
import ClearIcon from "@mui/icons-material/Clear";

const PostSuenio = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleButtonClick = () => {
    inputRef?.current?.click();
  };

  const [imagePreview, setImagePreview] = useState<string[]>([]);

  const handleImageChoose = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e?.target?.files;

    if (files) {
      const imageUrls: string[] = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );

      setImagePreview((imagePreview) => [...imagePreview, ...imageUrls]);
    }
  };

  return (
    <form className="flex flex-col  gap-2">
      <Textarea
        variant="faded"
        label="¿Qué soñaste hoy?"
        labelPlacement="outside"
        placeholder="Soñe que..."
        className="col-span-12 md:col-span-6 mb-6 md:mb-0"
        maxRows={8}
        color="secondary"
      />
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
                className="absolute h-full w-full bg-red-500/30 inset-0 z-10 opacity-0 hover:opacity-100 overflow-hidden flex justify-center items-center text-superDarkBlue text-xl"
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
      <div className="flex justify-between items-center">
        <Button
          startContent={<AddAPhotoIcon />}
          variant="ghost"
          onClick={handleButtonClick}
          className="self-start"
          color="success"
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
        <Button color="secondary">Enviar</Button>
      </div>
    </form>
  );
};

export default PostSuenio;
