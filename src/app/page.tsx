'use client'
import Header from "@/components/header";
import Filters from "@/components/filters";
import { useState } from "react";


export default function Home() {
  const [selected, setSelected] = useState(["buenos-aires", "sydney"]);

  return (
    <div className="bg-gradient-to-b from-superDarkBlue to-darkBlue flex-1">
      <Header />
      <main className="max-w-6xl px-5 flex-col md:flex-row mx-auto flex gap-4">
        <aside>
          <Filters />
        </aside>
        <section className="flex-1 bg-gray-50">dfdfdg</section>
      </main>
    </div>
  );
}
