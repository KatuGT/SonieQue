"use client";
import Header from "@/components/header";
import Filters from "@/components/filters";
import CardSuenio from "@/components/cardSueño";
import patron from "./../assets/imagenes/patronEstrellas.png";
import UserAside from "@/components/userAside";
import PostSuenio from "@/components/PostSuenio";
import useUser from "@/customHooks/useUser";
import { axiosInstance } from "@/utils/axiosInstance";
import Cookies from "js-cookie";
import { useEffect } from "react";

export default function Home() {
  const { data, error, isLoading } = useUser()

  return (
    <main className="max-w-6xl px-5 flex-row mx-auto flex gap-10 flex-wrap ">
      <aside className="flex-1 md:flex-[2]">
        <Filters />
      </aside>

      <aside className="flex-1 md:flex-[2] md:order-3">
        <UserAside />
      </aside>

      <section className="w-full flex flex-col gap-4 md:flex-[6] mb-8 md:order-2">
        <PostSuenio />
        <CardSuenio suenio="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis est quis illum veniam eos natus, perferendis explicabo labore repudiandae cumque nesciunt debitis. Enim delectus quibusdam architecto, obcaecati ex sint dolor. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis est quis illum veniam eos natus, perferendis explicabo labore repudiandae cumque nesciunt debitis. Enim delectus quibusdam architecto, obcaecati ex sint dolor. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis est quis illum veniam eos natus, perferendis explicabo labore repudiandae cumque nesciunt debitis. Enim delectus quibusdam architecto, obcaecati ex sint dolor. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis est quis illum veniam eos natus, perferendis explicabo labore repudiandae cumque nesciunt debitis. Enim delectus quibusdam architecto, obcaecati ex sint dolor." />
        <CardSuenio suenio="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis est quis illum veniam eos natus, perferendis explicabo labore repudiandae cumque nesciunt debitis. Enim delectus quibusdam architecto, obcaecati ex sint dolor." />
      </section>
    </main>
  );
}
