"use client";
import { Button } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

interface RedProps {
  red: "twitter" | "instagram" | "facebook" | "google";
}

interface DataBotonProps {
  logo: any;
  texto: string;
  bgBolor: string;
}

const BotonLoginConRed = ({ red }: RedProps) => {
  const [dataBoton, setDataBoton] = useState<DataBotonProps>({
    logo: null,
    texto: "",
    bgBolor: "",
  });
  useEffect(() => {
    if (red === "google") {
      setDataBoton({
        logo: <GoogleIcon />,
        texto: "Google",
        bgBolor: "bg-google",
      });
    } else if (red === "facebook") {
      setDataBoton({
        logo: <FacebookIcon />,
        texto: "Facebook",
        bgBolor: "bg-facebook",
      });
    } else if (red === "instagram") {
      setDataBoton({
        logo: <InstagramIcon />,
        texto: "Instagram",
        bgBolor: "bg-instagram",
      });
    } else if (red === "twitter") {
      setDataBoton({
        logo: <TwitterIcon />,
        texto: "Twitter",
        bgBolor: "bg-twitter",
      });
    }
  }, [red]);

  return (
    <Button
      className={`${dataBoton.bgBolor} text-darkBlue w-1/2 rounded-lg py-2 font-bold flex items-center justify-center gap-2 cursor-pointer`}
    >
      {dataBoton.logo}
      <span>{dataBoton.texto}</span>
    </Button>
  );
};

export default BotonLoginConRed;
