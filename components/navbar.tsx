import Link from "next/link";
import SessionNav from "./auth/session-nav";

const LINKS = [
  { href: "/about", label: "Sobre nosotros" },
  { href: "/contact", label: "Contacto" },
  { href: "/pricing", label: "Precios" },
] as const;

export default function Navbar() {
  return (
    <header className="border-b py-2 flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Link href={"/"} className="text-xl font-bold font-heading">
          lulú
        </Link>
        <nav>
          <ul className="flex items-center gap-5 ">
            {LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="font-sans text-sm hover:underline">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <SessionNav />
    </header>
  );
}
