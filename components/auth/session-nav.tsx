import { session } from "@/lib/auth-server";
import SignInDialog from "./sign-in";
import SignUpDialog from "./sign-up";
import { UserDropdown } from "./user-dropdown";

export default function SessionNav() {
  const user = session;
  console.log("session", user);

  if (user?.session) {
    return <UserDropdown email={user.user.email as string} />;
  }
  return (
    <div className="flex items-center gap-5">
      <SignInDialog />
      <SignUpDialog />
    </div>
  );
}
