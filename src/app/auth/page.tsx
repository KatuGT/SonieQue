"use client";

import Login from "@/components/auth/Login";
import Registro from "@/components/auth/Registro";
import useUser from "@/customHooks/useUser";
import { Divider } from "@nextui-org/react";
import { redirect } from "next/navigation";
import { useEffect } from "react";

const Page = () => {
  useEffect(() => {
    async function getLoader() {
      const { squircle } = await import("ldrs");
      squircle.register();
    }
    getLoader();
  }, []);

  const { data, error, isLoading } = useUser();

  if (data) redirect("/");

  if (isLoading)
    return (
      <div>
        <l-squircle
          size="20"
          stroke="5"
          stroke-length="0.15"
          bg-opacity="0.1"
          speed="0.9"
          color="white"
        ></l-squircle>
      </div>
    );

  if (!data)
    return (
      <section className="flex flex-col md:flex-row relative mx-auto max-w-6xl text-gray-200">
        <Login />
        <Divider className="my-10 md:hidden" />
        <Registro />
        <div className="backdrop-blur-sm bg-black/30 transition absolute w-full flex-1  self-stretch md:w-1/2 md:h-full bg-movedizo rounded-lg"></div>
      </section>
    );
};

export default Page;
