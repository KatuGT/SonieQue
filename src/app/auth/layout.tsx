import React from "react";

const LayoutAuth = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex flex-col md:flex-row mx-auto max-w-6xl gap-4">
      {children}
    </section>
  );
};

export default LayoutAuth;
