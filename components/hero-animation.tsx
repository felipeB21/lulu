"use client";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function HeroAnimation() {
  return (
    <div className="w-150 aspect-video">
      <DotLottieReact
        src="/hero.lottie"
        autoplay
        loop
        className="w-full h-full"
      />
    </div>
  );
}
