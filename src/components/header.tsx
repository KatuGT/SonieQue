import Image from "next/image";
import React from "react";
import Logo from "../assets/imagenes/logoConFondo.svg";
import Nube1 from "../assets/imagenes/nube1.svg";
import Nube2 from "../assets/imagenes/nube2.svg";
import Nube3 from "../assets/imagenes/nube3.svg";
import Nube4 from "../assets/imagenes/nube4.svg";
import Nubecita1 from "../assets/imagenes/nubecita1.svg";
import Nubecita2 from "../assets/imagenes/nubecita2.svg";

const Header = () => {
  return (
    <header className="flex justify-center py-1 relative transition overflow-hidden">
      <Image
        alt="Nube1"
        src={Nube1}
        height={300}
        className="absolute translate-x-[-100%]  md:translate-x-[-100%] xl:translate-x-[-120%] translate-y-[20%] transition "
      />
      <Image
        alt="Nube2"
        src={Nube2}
        height={200}
        className="absolute translate-x-[-200%]   md:translate-x-[-70%] xl:translate-x-[-90%] translate-y-[150%] transition"
      />
      <Image
        alt="Nubecita1"
        src={Nubecita1}
        height={50}
        className="absolute translate-x-[-400%]   md:translate-x-[-500%] xl:translate-x-[-600%] translate-y-[800%] transition"
      />

      <Image
        alt="Nube3"
        src={Nube3}
        height={200}
        className="absolute translate-x-[200%]   md:translate-x-[90%] xl:translate-x-[85%] translate-y-[70%] transition"
      />
      <Image
        alt="Nube4"
        src={Nube4}
        height={200}
        className="absolute translate-x-[200%]  md:translate-x-[120%] xl:translate-x-[150%] translate-y-[180%] transition"
      />

      <Image
        alt="Nubecita2"
        src={Nubecita2}
        height={50}
        className="absolute translate-x-[400%]  md:translate-x-[500%] xl:translate-x-[850%] translate-y-[700%] transition"
      />

      <Image alt="logo" src={Logo} height={600} />
    </header>
  );
};

export default Header;
