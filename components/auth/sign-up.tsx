"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
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
import GoogleSvg from "../svg/googe";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import { toast } from "sonner";

const signUpSchema = z.object({
  name: z
    .string()
    .min(2, "Mínimo 2 caracteres")
    .max(50, "Máximo 50 caracteres"),
  email: z.email("Email inválido"),
  password: z
    .string()
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .max(50, "Máximo 50 caracteres")
    .regex(/[A-Z]/, "Debe tener una mayúscula")
    .regex(/[a-z]/, "Debe tener una minúscula")
    .regex(/[0-9]/, "Debe tener un número"),
});

type SignUpValues = z.infer<typeof signUpSchema>;

export default function SignUpDialog() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpValues>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (values: SignUpValues) => {
    await authClient.signUp.email(
      {
        email: values.email,
        password: values.password,
        name: values.name,
        callbackURL: "/verify-email",
      },
      {
        onRequest: () => setIsLoading(true),
        onSuccess: () => {
          setIsLoading(false);
          toast.success("Por favor, verifica tu email para validar tu cuenta.");
          window.location.href = "/verify-email";
        },
        onError: (ctx) => {
          setIsLoading(false);
          toast.error(ctx.error.message);
        },
      },
    );
  };

  return (
    <Dialog>
      <DialogTrigger render={<Button>Crear una cuenta</Button>} />

      <DialogContent className="sm:max-w-sm">
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogHeader>
            <DialogTitle>Regístrate</DialogTitle>
            <DialogDescription>
              Use su cuenta para registrarse en la aplicación.
            </DialogDescription>
          </DialogHeader>

          <FieldGroup className="py-4 flex flex-col gap-4">
            <Field>
              <Label htmlFor="name">Nombre</Label>
              <Input
                id="name"
                placeholder="Lulú"
                {...register("name")}
                className={errors.name ? "border-red-500" : ""}
              />
              {errors.name && (
                <span className="text-xs text-red-500 font-medium">
                  {errors.name.message}
                </span>
              )}
            </Field>

            <Field>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="lulú@ejemplo.com"
                {...register("email")}
                className={errors.email ? "border-red-500" : ""}
              />
              {errors.email && (
                <span className="text-xs text-red-500 font-medium">
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
                <span className="text-xs text-red-500 font-medium">
                  {errors.password.message}
                </span>
              )}
            </Field>
          </FieldGroup>

          <DialogFooter>
            <div className="flex flex-col gap-4 w-full">
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Cargando..." : "Crear cuenta"}
              </Button>

              <div className="relative flex items-center justify-center w-full py-2">
                <Separator className="absolute w-full" />
                <span className="relative z-10 bg-white px-2 text-sm text-muted-foreground">
                  o
                </span>
              </div>

              <Button
                type="button"
                variant="outline"
                className="w-full"
                onClick={async () => {
                  await authClient.signIn.social({
                    provider: "google",
                    callbackURL: "/dashboard",
                  });
                }}
              >
                <GoogleSvg />
                Iniciar sesión con Google
              </Button>
            </div>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
