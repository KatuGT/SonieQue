"use client";
import React, { useEffect, useRef, useState } from "react";
import { Button, Chip, Link, User } from "@nextui-org/react";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { PiArrowFatUpFill, PiArrowFatDownFill } from "react-icons/pi";
import NextLink from "next/link";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import { MagicMotion } from "react-magic-motion";
import { Tooltip } from "@nextui-org/tooltip";
import { getTimeElapsedString } from "@/utils/getTimeCration";
import { categoria } from "@/tipos/sueniosTipos";
import LikesActions from "./LikesActions";
import { colorCategoriaMap } from "@/utils/mapColoresCategorias";

const CardSuenio = ({
  suenio,
  isUser,
  fecha,
  categorias,
  suenioId,
}: {
  suenio: string;
  isUser: Boolean;
  fecha: string;
  categorias: categoria[];
  suenioId: number;
}) => {
  const [verMas, setVerMas] = useState(false);

  const text = useRef<HTMLParagraphElement | null>(null);

  const [textoLargo, setTextoLargo] = useState(false);

  useEffect(() => {
    const { current } = text;

    if (current) {
      const handleResize = () => {
        if (current.scrollHeight > current.clientHeight) {
          setTextoLargo(true);
        } else {
          setTextoLargo(false);
        }
      };

      handleResize();
    }
  }, []);

  const [like, setLike] = useState("none");
  const [favorito, setFavorito] = useState(false);

  return (
    <div className="rounded-lg overflow-hidden">
      <header className="flex justify-between items-center backdrop-blur-sm bg-white/30 px-4 py-2">
        <Link
          as={NextLink}
          href={`/suenioDetalle/${suenioId}`}
          showAnchorIcon
          anchorIcon={<OpenInNewIcon />}
          color="foreground"
        >
          #{suenioId}
        </Link>
        <div className="flex gap-2">
          <Tooltip content={isUser ? "Guarda en favoritos" : "Inicia sesión"}>
            <Button
              isIconOnly
              color="secondary"
              variant={favorito ? "shadow" : "bordered"}
              aria-label="Añadir a favoritos este sueño"
              onClick={() => setFavorito(!favorito)}
              disabled={!isUser}
            >
              <LoyaltyIcon />
            </Button>
          </Tooltip>
          <LikesActions postId={suenioId} />
          {/* <div className="flex gap-1 flex-col justify-center items-center">
            <Tooltip content={isUser ? "Voto positivo" : "Inicia sesión"}>
              <Button
                isIconOnly
                color="success"
                variant={like === "like" ? "shadow" : "bordered"}
                className="text-xl"
                aria-label="Me gusta este sueño"
                onClick={() => setLike("like")}
                disabled={!isUser}
              >
                <PiArrowFatUpFill />
              </Button>
            </Tooltip>
          </div>

          <div className="flex gap-1 flex-col justify-center items-center">
            <Tooltip content={isUser ? "Voto negativo" : "Inicia sesión"}>
              <Button
                isIconOnly
                color="warning"
                variant={like === "dislike" ? "shadow" : "bordered"}
                className="text-xl"
                aria-label="No me gusta este sueño"
                onClick={() => setLike("dislike")}
                disabled={!isUser}
              >
                <PiArrowFatDownFill />
              </Button>
            </Tooltip>
          </div> */}

          <Tooltip content={isUser ? "Reportar" : "Inicia sesión"}>
            <Button
              isIconOnly
              color="danger"
              variant="bordered"
              aria-label="Denuncia este sueño"
              disabled={!isUser}
            >
              <PriorityHighIcon />
            </Button>
          </Tooltip>
        </div>
      </header>
      <MagicMotion>
        <main className="p-4 bg-gray-800 ">
          <User
            name="Jane Doe"
            description={getTimeElapsedString(fecha)}
            className="text-gray-200 "
            avatarProps={{
              src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
            }}
            key="exclude"
          />
          <p
            className={`transition-all duration-75 ease-in-out text-gray-200 ${
              !verMas ? "line-clamp-[8]" : "line-clamp-none"
            }`}
            ref={text}
          >
            {suenio}
          </p>
          <div className="flex justify-center" key="exclude">
            {textoLargo && (
              <Button
                onClick={() => setVerMas(!verMas)}
                size="sm"
                variant="light"
                color="primary"
                className="mt-4 mx-auto"
              >
                {verMas ? "Ver menos" : "Ver mas"}
              </Button>
            )}
          </div>
        </main>
      </MagicMotion>
      <footer className="px-4 py-2 backdrop-blur-sm bg-white/30  bg-gray-700 flex gap-2 flex-wrap">
        {categorias.map((categoria: categoria) => (
          <Chip key={categoria.id} color={colorCategoriaMap[categoria.id]}>
            {categoria.name}
          </Chip>
        ))}
      </footer>
    </div>
  );
};

export default CardSuenio;
