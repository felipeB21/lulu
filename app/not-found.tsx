import PageNotFoundAnimation from "@/components/404-animation";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <PageNotFoundAnimation />
      <h2 className="text-center mt-5 font-heading text-xl font-bold">
        Página no encontrada
      </h2>
      <Button
        className="mt-5 mx-auto flex items-center gap-2 w-max"
        size={"lg"}
        nativeButton={false}
        render={
          <Link href="/">
            <Home />
            Volver al inicio
          </Link>
        }
      ></Button>
    </div>
  );
}
