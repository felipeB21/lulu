import { Button } from "../ui/button";
import Link from "next/link";
import { LogIn } from "lucide-react";

export default function SessionNav() {
  return (
    <div>
      <Button
        size={"lg"}
        nativeButton={false}
        render={
          <Link href="/">
            <LogIn />
            Iniciar sesión
          </Link>
        }
      ></Button>
    </div>
  );
}
