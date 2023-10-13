"use client";
import Header from "@/components/header";
import Filters from "@/components/filters";
import CardSuenio from "@/components/cardSueño";
import patron  from "./../assets/imagenes/patronEstrellas.png"
import UserAside from "@/components/userAside";
export default function Home() {

  return (
    <div className="bg-gradient-to-b from-superDarkBlue to-darkBlue flex-1">
      <div className="bg-repeat bg-[url('./../assets/imagenes/patronEstrellas.png')]">

      <Header />
      <main className="max-w-6xl px-5 flex-col md:flex-row mx-auto flex gap-10">
        <aside className="flex-[2] flex-shrink-0">
          <Filters />
        </aside>
        <section className="flex flex-col gap-4 flex-[6] mb-8 flex-shrink-0">
          <CardSuenio suenio=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis est quis illum veniam eos natus, perferendis explicabo labore repudiandae cumque nesciunt debitis. Enim delectus quibusdam architecto, obcaecati ex sint dolor. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis est quis illum veniam eos natus, perferendis explicabo labore repudiandae cumque nesciunt debitis. Enim delectus quibusdam architecto, obcaecati ex sint dolor. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis est quis illum veniam eos natus, perferendis explicabo labore repudiandae cumque nesciunt debitis. Enim delectus quibusdam architecto, obcaecati ex sint dolor. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis est quis illum veniam eos natus, perferendis explicabo labore repudiandae cumque nesciunt debitis. Enim delectus quibusdam architecto, obcaecati ex sint dolor." />

          <CardSuenio suenio=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis est quis illum veniam eos natus, perferendis explicabo labore repudiandae cumque nesciunt debitis. Enim delectus quibusdam architecto, obcaecati ex sint dolor." />
        </section>
        <aside className="flex-[2] flex-shrink-0">
          <UserAside />
        </aside>
      </main>
    </div>
      </div>
  );
}
