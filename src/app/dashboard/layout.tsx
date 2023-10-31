import BarraLateral from "@/components/BarraLateral";
import { linksDashboard } from "@/utils/navsItems";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex flex-col md:flex-row mx-auto max-w-6xl gap-4 px-10">
      <BarraLateral ArrayLinks={linksDashboard} />
      <div className="flex-[4]">{children}</div>
    </section>
  );
};

export default layout;
