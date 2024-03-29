"use client";
 
import Login from "@/components/Login";
import Registro from "@/components/Registro";
import { Divider } from "@nextui-org/react";

const Page = () => {
  return (
    <section className="flex flex-col md:flex-row relative mx-auto max-w-6xl text-gray-200">
      <Login />
      <Divider className="my-10 md:hidden"/>
      <Registro />
      <div className="backdrop-blur-sm bg-black/30 transition absolute w-full flex-1  self-stretch md:w-1/2 md:h-full bg-movedizo rounded-lg"></div>
    </section>
  );
};

export default Page;
