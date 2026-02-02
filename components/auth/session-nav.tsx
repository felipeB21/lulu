import { session } from "@/lib/auth-server";
import SignInDialog from "./sign-in";
import SignUpDialog from "./sign-up";
import { UserDropdown } from "./user-dropdown";

export default async function SessionNav() {
  const user = (await session)?.user;

  if (user) {
    return <UserDropdown email={user.email} />;
  }
  return (
    <div className="flex items-center gap-5">
      <SignInDialog />
      <SignUpDialog />
    </div>
  );
}
