"use client";
import { Button, Divider } from "@nextui-org/react";
import nextLink from "next/link";
import React, { useMemo, useState } from "react";
import { Link } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import EditIcon from "@mui/icons-material/Edit";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <section className="flex mx-auto max-w-6xl ">
      <nav className="flex-1 overflow-hidden">
        <ul>
          <li>
            <Link
              color="foreground"
              as={nextLink}
              className={`link w-full px-2 py-1.5 flex gap-2 rounded-lg ${
                pathname === "/perfilConf/editar"
                  ? "text-white font-bold pl-6 bg-indigo-950"
                  : ""
              }`}
              href="editar"
              underline="active"
            >
              <EditIcon className="text-md" />
              <span>Editar</span>
            </Link>
          </li>

          <Divider className="my-4" />

          <li>
            <Link
              color="foreground"
              as={nextLink}
              className={`link w-full px-2 py-1.5 flex gap-2 rounded-lg ${
                pathname === "/perfilConf/misSuenios"
                  ? "text-white font-bold pl-6 bg-indigo-950"
                  : ""
              }`}
              href="misSuenios"
              underline="active"
            >
              <AutoAwesomeIcon className="text-md" />
              <span>Mis sueños</span>
            </Link>
          </li>
          <Divider className="my-4" />
          <li>
            <Link
              color="foreground"
              as={nextLink}
              className={`link w-full px-2 py-1.5 flex gap-2 rounded-lg ${
                pathname === "/perfilConf/misFavoritos"
                  ? "text-white font-bold pl-6 bg-indigo-950"
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
      <div className="flex-[4] bg-slate-500">{children}</div>
    </section>
  );
};

export default Layout;
