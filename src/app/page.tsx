"use client";
import Filters from "@/components/filters";
import CardSuenio from "@/components/cardSueño";
import UserAside from "@/components/userAside";
import PostSuenio from "@/components/PostSuenio";
import useUser from "@/customHooks/useUser";
import LoadingIcon from "../../public/SVG/LoadingIcon";

export default function Home() {
  const { data, isLoading } = useUser();

  return (
    <main className="max-w-6xl px-5 flex-row mx-auto flex gap-10 flex-wrap ">
      <aside className="flex-1 md:flex-[2]">
        <Filters />
      </aside>

      <aside className="flex-1 md:flex-[2] md:order-3">
        <UserAside data={data} />
      </aside>

      <section className="w-full flex flex-col gap-4 md:flex-[6] mb-8 md:order-2">
        {isLoading && <LoadingIcon />}
        {data && <PostSuenio />}
        <CardSuenio suenio="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis est quis illum veniam eos natus, perferendis explicabo labore repudiandae cumque nesciunt debitis. Enim delectus quibusdam architecto, obcaecati ex sint dolor. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis est quis illum veniam eos natus, perferendis explicabo labore repudiandae cumque nesciunt debitis. Enim delectus quibusdam architecto, obcaecati ex sint dolor. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis est quis illum veniam eos natus, perferendis explicabo labore repudiandae cumque nesciunt debitis. Enim delectus quibusdam architecto, obcaecati ex sint dolor. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis est quis illum veniam eos natus, perferendis explicabo labore repudiandae cumque nesciunt debitis. Enim delectus quibusdam architecto, obcaecati ex sint dolor." />
        <CardSuenio suenio="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis est quis illum veniam eos natus, perferendis explicabo labore repudiandae cumque nesciunt debitis. Enim delectus quibusdam architecto, obcaecati ex sint dolor." />
      </section>
    </main>
  );
}
