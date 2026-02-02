import VerifyAnimation from "@/components/verify-animation";
import { session } from "@/lib/auth-server";

export default function VerifyEmail() {
  const user = session?.user;
  if (user?.emailVerified) {
    return (
      <div>
        <h2 className="text-center font-heading text-xl font-bold">
          Tu correo electrónico ya ha sido verificado.
        </h2>
      </div>
    );
  }
  return (
    <div>
      <VerifyAnimation />
      <h2 className="text-center font-heading text-xl font-bold">
        Verifica tu correo electrónico para continuar
      </h2>
    </div>
  );
}
