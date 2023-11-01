"use client";
import React, { useEffect, useRef, useState } from "react";
import { Button, Chip, Link, User } from "@nextui-org/react";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { PiArrowFatUpFill, PiArrowFatDownFill } from "react-icons/pi";
import NextLink from "next/link";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import { MagicMotion } from "react-magic-motion";

const CardSuenio = ({ suenio }: { suenio: string }) => {
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
          href="/suenioDetalle"
          showAnchorIcon
          anchorIcon={<OpenInNewIcon />}
          color="foreground"
        >
          #4560565
        </Link>
        <div className="flex gap-2">
          <Button
            isIconOnly
            color="secondary"
            variant={favorito ? "shadow" : "bordered"}
            aria-label="Añadir a favoritos este sueño"
            onClick={() => setFavorito(!favorito)}
          >
            <LoyaltyIcon />
          </Button>
          <div className="flex gap-1 flex-col justify-center items-center">
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
          </div>

          <div className="flex gap-1 flex-col justify-center items-center">
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
          </div>

          <Button
            isIconOnly
            color="danger"
            variant="bordered"
            aria-label="Denuncia este sueño"
          >
            <PriorityHighIcon />
          </Button>
        </div>
      </header>
      <MagicMotion>
        <main className="p-4 bg-gray-800 ">
          <User
            name="Jane Doe"
            description="hace 6 horas"
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
        <Chip color="default">Caía</Chip>
        <Chip color="primary">volaba</Chip>
        <Chip color="secondary">alguien me perseguía</Chip>
        <Chip color="success">no podía correr</Chip>
        <Chip color="warning">yo moría</Chip>
        <Chip color="danger">veía un muerto</Chip>
      </footer>
    </div>
  );
};

export default CardSuenio;
