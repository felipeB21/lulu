import { session } from "@/lib/auth-server";

export default function DashboardPage() {
  const user = session?.user;
  return (
    <div className="my-10 font-sans">
      <h1 className="text-3xl font-bold font-heading">
        ¡Bienvenido {user?.name}!
      </h1>
      <p className="font-lg font-medium mt-2">¿Qué deseas hacer ahora?</p>
    </div>
  );
}
