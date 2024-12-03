"use client";
import Image from "next/image";
import SignInForm from "./Form";

const SignInContainer = () => {
  return (
    <div className="lg:h-screen w-screen flex lg:flex-row flex-col-reverse">
      {/* form */}
      <div className="w-full lg:max-w-[500px] flex items-center lg:items-start lg:justify-center p-10 flex-col gap-5">
        <h1 className="text-gray-900 font-extrabold text-3xl">
          Sign in to your account
        </h1>
        <SignInForm />
      </div>
      {/* img */}
      <div className="relative h-96 w-full lg:h-full lg:flex-1">
        <Image
          src="/login-image.avif"
          className="object-cover"
          alt="askas"
          fill
        />
      </div>
    </div>
  );
};

export default SignInContainer;
