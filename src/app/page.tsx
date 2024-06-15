"use client";
import Filters from "@/components/filters";
import UserAside from "@/components/userAside";
import PostSuenio from "@/components/PostSuenio";
import useUser from "@/customHooks/useUser";
import LoadingIcon from "../../public/SVG/LoadingIcon";
import { axiosInstance } from "@/utils/axiosInstance";
import useSWR from "swr";
import { suenioProps } from "@/tipos/sueniosTipos";
import CardSuenio from "@/components/cardSuenio/cardSueño";
import { useUserStore } from "@/store/user";

export default function Home() {
  const user = useUserStore((state) => state.user);

  const fetcher = async (url: string) => {
    try {
      const response = await axiosInstance(url);
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch data");
    }
  };
  const {
    data: sueniosPublicos,
    error: sueniosError,
    isLoading: sueniosIsLoading,
    isValidating: sueniosIsValidating,
  } = useSWR("/public/latest_posts", fetcher);

  // console.log(sueniosPublicos);

  return (
    <main className="max-w-6xl px-5 flex-row mx-auto flex gap-10 flex-wrap ">
      <aside className="flex-1 md:flex-[2]">
        <Filters />
      </aside>

      <aside className="flex-1 md:flex-[2] md:order-3">
        <UserAside data={user} />
      </aside>

      <section className="w-full flex flex-col gap-4 md:flex-[6] mb-8 md:order-2">
  
        {user ? <PostSuenio /> : null}
        {sueniosPublicos?.length > 0 &&
          sueniosPublicos?.map((suenio: suenioProps) => {
            return (
              <CardSuenio
                key={suenio.id + suenio.creationDate}
                isUser={user ? true : false}
                suenio={suenio.story}
                fecha={suenio.creationDate}
                categorias={suenio.categories}
                suenioId={suenio.id}
              />
            );
          })}
        {sueniosIsLoading ? (
          <div className="mx-auto">
            <LoadingIcon />
          </div>
        ) : null}
      </section>
    </main>
  );
}
