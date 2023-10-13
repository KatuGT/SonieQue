"use client";
import React, { useEffect, useRef, useState } from "react";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { Button, Chip, User } from "@nextui-org/react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";

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

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden">
      <header className="flex justify-between items-center bg-gray-700 px-4 py-2">
        <span>#4</span>
        <div className="flex gap-2">
          <div className="flex gap-1 flex-col justify-center items-center">
            <Button isIconOnly color="warning" aria-label="Take a photo">
              <ThumbDownIcon />
            </Button>
          </div>

          <div className="flex gap-1 flex-col justify-center items-center">
            <Button isIconOnly color="warning" aria-label="Take a photo">
              <ThumbUpIcon />
            </Button>
          </div>

          <Button
            isIconOnly
            color="danger"
            variant="bordered"
            aria-label="Take a photo"
          >
            <PriorityHighIcon />
          </Button>
        </div>
      </header>
      <main className="p-4">
        <User
          name="Jane Doe"
          description="Product Designer"
          avatarProps={{
            src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
          }}
        />
        <p
          className={`transition-all duration-75 ease-in-out ${
            !verMas ? "line-clamp-[8]" : "line-clamp-none"
          }`}
          ref={text}
        >
          {suenio}
        </p>
        <div className="flex justify-center">
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
      <footer className="px-4 py-2 bg-gray-700 flex gap-2 flex-wrap">
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
