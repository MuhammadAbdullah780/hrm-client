import SignInContainer from "@/containers/SignIn";
import { auth } from "@/lib/auth";

const page = async () => {
  const a = await auth();

  console.log(a, "AUTH____");

  return <SignInContainer />;
};

export default page;
