import { createAuthClient } from "better-auth/react";
import { lastLoginMethodClient } from "better-auth/client/plugins";

export const authClient = createAuthClient({
  baseURL:
    (process.env.NEXT_PUBLIC_SITE_URL as string) || "http://localhost:3000",
  plugins: [lastLoginMethodClient()],
});
