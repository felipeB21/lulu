"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { LogIn } from "lucide-react";
import { toast } from "sonner";

import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Field, FieldGroup } from "../ui/field";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";
import { Spinner } from "../ui/spinner";
import GoogleSvg from "../svg/googe";
import { authClient } from "@/lib/auth-client";
import { Badge } from "../ui/badge";

const signInSchema = z.object({
  email: z.email("Email inválido"),
  password: z.string().min(1, "La contraseña es requerida"),
});

type SignInValues = z.infer<typeof signInSchema>;

export default function SignInDialog() {
  const [isLoading, setIsLoading] = useState(false);
  const lastMethod = authClient.getLastUsedLoginMethod();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInValues>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = async (values: SignInValues) => {
    await authClient.signIn.email(
      {
        email: values.email,
        password: values.password,
        callbackURL: "/dashboard",
      },
      {
        onRequest: () => setIsLoading(true),
        onSuccess: () => {
          setIsLoading(false);
          toast.success("¡Sesión iniciada!");
          window.location.href = "/dashboard";
        },
        onError: (ctx) => {
          setIsLoading(false);
          toast.error(ctx.error.message || "Credenciales incorrectas");
        },
      },
    );
  };

  return (
    <Dialog>
      <DialogTrigger
        render={
          <Button variant="outline">
            <LogIn className="mr-2 h-4 w-4" />
            Iniciar sesión
          </Button>
        }
      />

      <DialogContent className="sm:max-w-sm">
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogHeader>
            <DialogTitle>Inicie sesión</DialogTitle>
            <DialogDescription>
              Use su cuenta para iniciar sesión en la aplicación.
            </DialogDescription>
          </DialogHeader>
          <FieldGroup className="py-4 flex flex-col gap-4">
            <Field>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="lulú@ejemplo.com"
                {...register("email")}
                className={errors.email ? "border-red-500" : ""}
              />
              {errors.email && (
                <span className="text-xs text-red-500">
                  {errors.email.message}
                </span>
              )}
            </Field>

            <Field>
              <Label htmlFor="password">Contraseña</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                {...register("password")}
                className={errors.password ? "border-red-500" : ""}
              />
              {errors.password && (
                <span className="text-xs text-red-500">
                  {errors.password.message}
                </span>
              )}
            </Field>
          </FieldGroup>

          <DialogFooter>
            <div className="flex flex-col gap-4 w-full">
              <div className="relative w-full">
                <Button
                  type="submit"
                  className="w-full"
                  disabled={isLoading}
                  variant={lastMethod === "email" ? "default" : "outline"}
                >
                  {isLoading ? <Spinner className="mr-2" /> : null}
                  {isLoading ? "Cargando..." : "Iniciar sesión"}
                </Button>
                {lastMethod === "email" && (
                  <Badge className="absolute -top-2 -right-2 px-2 py-0.5 text-[10px] uppercase tracking-wider shadow-sm bg-black rounded-full">
                    Usado recientemente
                  </Badge>
                )}
              </div>

              <div className="relative flex items-center justify-center w-full py-2">
                <Separator className="absolute w-full" />
                <span className="relative z-10 bg-background px-2 text-sm text-muted-foreground">
                  o
                </span>
              </div>

              <div className="relative w-full">
                <Button
                  type="button"
                  variant={lastMethod === "google" ? "default" : "outline"}
                  className="w-full"
                  onClick={() =>
                    authClient.signIn.social({
                      provider: "google",
                      callbackURL: "/dashboard",
                    })
                  }
                >
                  <GoogleSvg />
                  Google
                </Button>
                {lastMethod === "google" && (
                  <Badge className="absolute -top-2 -right-2 px-2 py-0.5 text-[10px] uppercase tracking-wider shadow-sm bg-black rounded-full">
                    Usado recientemente
                  </Badge>
                )}
              </div>
            </div>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
