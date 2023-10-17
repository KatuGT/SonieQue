"use client";
import { Divider } from "@nextui-org/react";
import nextLink from "next/link";
import React from "react";
import { Link } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import Person3Icon from '@mui/icons-material/Person3';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <section className="flex flex-col md:flex-row mx-auto max-w-6xl gap-4">
      <nav className="flex-1 overflow-hidden p-4">
        <ul className="flex justify-between items-center md:items-stretch md:flex-col">
          <li className="flex-1">
            <Link
              color="foreground"
              as={nextLink}
              className={`link w-full px-2 py-1.5 flex gap-2 rounded-lg ${
                pathname === "/perfilConf/editar"
                  ? "text-white font-bold md:pl-6 bg-indigo-950"
                  : ""
              }`}
              href="editar"
              underline="active"
            >
              <Person3Icon className="text-md" />
              <span>Mi perfil</span>
            </Link>
          </li>

          <Divider className="my-4 hidden md:block"  />

          <li className="flex-1">
            <Link
              color="foreground"
              as={nextLink}
              className={`link w-full px-2 py-1.5 flex gap-2 rounded-lg ${
                pathname === "/perfilConf/misSuenios"
                  ? "text-white font-bold md:pl-6 bg-indigo-950"
                  : ""
              }`}
              href="misSuenios"
              underline="active"
            >
              <AutoAwesomeIcon className="text-md" />
              <span>Mis sueños</span>
            </Link>
          </li>
          <Divider className="my-4 hidden md:block" />
          <li className="flex-1">
            <Link
              color="foreground"
              as={nextLink}
              className={`link w-full px-2 py-1.5 flex gap-2 rounded-lg ${
                pathname === "/perfilConf/misFavoritos"
                  ? "text-white font-bold md:pl-6 bg-indigo-950"
                  : ""
              }`}
              href="misFavoritos"
              underline="active"
            >
              <LoyaltyIcon className="text-md" />
              <span>Mis favoritos</span>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="flex-[4]">{children}</div>
    </section>
  );
};

export default Layout;
