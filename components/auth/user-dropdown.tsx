"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ChevronDown,
  Columns2,
  CreditCard,
  LogOut,
  Settings2,
} from "lucide-react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";

export function UserDropdown({ email }: { email: string }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button variant="ghost">
            {email} <ChevronDown />
          </Button>
        }
      />
      <DropdownMenuContent
        className="w-46 bg-gray-200 text-blakc"
        align="start"
      >
        <DropdownMenuGroup>
          <DropdownMenuItem
            render={
              <Link href={"/dashboard"}>
                <Columns2 />
                Dashboard
              </Link>
            }
          ></DropdownMenuItem>
          <DropdownMenuItem>
            <CreditCard />
            Suscripciones
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings2 />
            Ajustes
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuItem
            onClick={() =>
              authClient.signOut({
                fetchOptions: {
                  onSuccess: () => {
                    window.location.href = "/";
                  },
                },
              })
            }
          >
            <LogOut />
            Cerrar sesión
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
