"use client";
import React, { useEffect, useState } from "react";
import BarraLateral from "@/components/BarraLateral";
import { linksUserConf } from "@/utils/navsItems";
import useUser from "@/customHooks/useUser";
import { redirect } from "next/navigation";
import LoadingIcon from "../../../public/SVG/LoadingIcon";

const LayoutPerfilConf = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    async function getLoader() {
      const { squircle } = await import("ldrs");
      squircle.register();
    }
    getLoader();
  }, []);

  const { data, isLoading, isValidating } = useUser();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && !isLoading && !data) {
      redirect("/");
    }
  }, [mounted, data, isLoading]);

  if (!mounted || isValidating)
    return (
      <section className="mx-auto max-w-6xl h-96 grid place-items-center ">
        <LoadingIcon />
      </section>
    );

  if (data && mounted)
    return (
      <section className="flex flex-col md:flex-row mx-auto max-w-6xl gap-4 text-gray-200">
        <BarraLateral ArrayLinks={linksUserConf} />
        <div className="flex-[4]">{children}</div>
      </section>
    );
};

export default LayoutPerfilConf;
