"use client";
import React from "react";
import BarraLateral from "@/components/BarraLateral";
import { linksUserConf } from "@/utils/navsItems";


const LayoutPerfilConf = ({ children }: { children: React.ReactNode }) => {

  return (
    <section className="flex flex-col md:flex-row mx-auto max-w-6xl gap-4">
      <BarraLateral ArrayLinks={linksUserConf} />
      <div className="flex-[4]">{children}</div>
    </section>
  );
};

export default LayoutPerfilConf;
