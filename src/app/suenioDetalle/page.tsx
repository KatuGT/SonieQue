"use client";
import {
  Badge,
  Button,
  Chip,
  Divider,
  Image,
  Textarea,
  User,
  useDisclosure,
} from "@nextui-org/react";
import React, { useState } from "react";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import { PiArrowFatUpFill, PiArrowFatDownFill } from "react-icons/pi";
import NextImage from "next/image";
import ModalImagenes from "@/components/modalImagenes";
import ComentariosSuenio from "@/components/comentariosSuenio";

const SuenioDetalle = () => {
  const [like, setLike] = useState("none");
  const [favorito, setFavorito] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const ilustraciones = [
    {
      id: 1,
      image: "https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg",
    },
    {
      id: 2,
      image: "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
    },
    {
      id: 3,
      image: "https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg",
    },
  ];

  const [imagenClickeada, setImagenClickeada] = useState(0)

  return (
    <section className="max-w-4xl px-5 flex flex-col mx-auto gap-10 pb-10">
      <div className="flex gap-5">
        <div>
          <User
            name="Jane Doe"
            description="publicado hace 12 horas"
            avatarProps={{
              src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
            }}
            className="text-gray-200 "
          />
          <p className="backdrop-blur-xl text-gray-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur fugiat cum consectetur quae officia dicta ullam,
            incidunt quasi provident non nulla unde nisi laborum nobis, ad
            commodi? Quia, error placeat! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Dolor voluptatibus, alias corporis, laudantium est
            corrupti deserunt soluta repudiandae laboriosam veritatis atque.
            Eum, maiores placeat id sint illo odit repellat eaque?
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <Button
            isIconOnly
            color="secondary"
            variant={favorito ? "shadow" : "bordered"}
            aria-label="Añadir a favoritos este sueño"
            onClick={() => setFavorito(!favorito)}
          >
            <LoyaltyIcon />
          </Button>
          <Badge content="10" color="success" variant="shadow">
            <Button
              isIconOnly
              color="success"
              variant={like === "like" ? "shadow" : "bordered"}
              className="text-xl"
              aria-label="Me gusta este sueño"
              onClick={() => setLike("like")}
            >
              <PiArrowFatUpFill />
            </Button>
          </Badge>

          <Badge content="5" color="warning" variant="shadow">
            <Button
              isIconOnly
              color="warning"
              variant={like === "dislike" ? "shadow" : "bordered"}
              className="text-xl"
              aria-label="No me gusta este sueño"
              onClick={() => setLike("dislike")}
            >
              <PiArrowFatDownFill />
            </Button>
          </Badge>

          <Button
            isIconOnly
            color="danger"
            variant="bordered"
            aria-label="Denuncia este sueño"
          >
            <PriorityHighIcon />
          </Button>
        </div>
      </div>
      <div className="flex gap-2">
        <Chip color="warning" variant="bordered">
          caía
        </Chip>
        <Chip color="danger" variant="bordered">
          volaba
        </Chip>
      </div>
      <section>
        <span className="text-xs mb-2 text-gray-200">
          Ilustraciones subidas por autor del sueño
        </span>
        <div className="flex gap-4">
          {ilustraciones.map((imagen, index) => {
            return (
              <Image
                key={imagen.id}
                onClick={() => {onOpen(); setImagenClickeada(index)} }
                className="cursor-pointer"
                as={NextImage}
                isZoomed
                width={300}
                height={150}
                alt="NextUI hero Image"
                src={imagen.image}
              />
            );
          })}
        </div>
        <ModalImagenes isOpen={isOpen} onClose={onClose} imagenes={ilustraciones} imagenClickeada={imagenClickeada}/>
      </section>
      <Divider />
      <div>
        <Textarea
          variant="bordered"
          label="Deja tu comentario aquí"
          labelPlacement="outside"
          className="text-gray-200"
        />
        <Button className="mt-2" color="secondary">
          Enviar
        </Button>
      </div>
      <div className="flex flex-col gap-4">
        <ComentariosSuenio />
        <ComentariosSuenio />
        <ComentariosSuenio />
        <ComentariosSuenio />
        <ComentariosSuenio />
      </div>
    </section>
  );
};

export default SuenioDetalle;
