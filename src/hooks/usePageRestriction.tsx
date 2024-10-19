import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

type Args = {
  /**
   * Specifies page with respect to their type
   * 1. `auth` - for login signup pages
   * 2. `protected` for pages that requires user to be logged in
   */
  pageType: "auth" | "protected";
};

export const usePageRestriction = async ({ pageType }: Args) => {
  const session = await auth();

  /**
   * Conditions for auth pages
   */
  if (pageType === "auth" && session) {
    return redirect("/");
  }

  /**
   * Conditions for protected pages
   */
  if (pageType === "protected") {
    if (!session) {
      redirect("/sign-in");
    }
  }

  console.log(session, "_________SESSION______________");
};
