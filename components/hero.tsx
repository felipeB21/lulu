"use client";

import dynamic from "next/dynamic";

const HeroAnimation = dynamic(() => import("./hero-animation"), {
  ssr: true,
});

export default function Hero() {
  return (
    <div className="flex items-center">
      <HeroAnimation />
      <div className="flex flex-col gap-3">
        <h2 className="text-7xl font-heading font-black">¡Hola!</h2>
        <h1 className="text-5xl font-heading font-black">
          Soy{" "}
          <span className="inline-block bg-linear-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            lulú
          </span>{" "}
          tu asistente virtual.
        </h1>
      </div>
    </div>
  );
}
