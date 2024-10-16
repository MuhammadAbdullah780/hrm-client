"use client";
import Anchor from "@/components/common/Anchor";
import MaxWidth from "@/components/common/MaxWidth";
import Image from "next/image";
import { profileDescriptionBlocks } from "./data/descriptionBlocks";
import DescriptionListMapper from "./DescriptionListMapper";
import { useRouter } from "next/navigation";

type Props = {};

const ProfileContainer = (props: Props) => {
  const router = useRouter();

  return (
    <div className="flex flex-col w-full h-full">
      <div className="h-28">
        <MaxWidth className="p-5">
          <Anchor
            onClick={() => router?.back()}
            as="button"
            text="<-  Back"
            variant="grey"
          />
        </MaxWidth>
      </div>
      <div className="bg-white flex-1">
        <MaxWidth width={1200} className="p-5 flex flex-col gap-7">
          {/* SHORT INFO */}
          <div className="flex gap-4">
            <div className="relative w-40 h-40 rounded-lg border-[4px] border-white -mt-16">
              <Image
                alt="$"
                src="/demo-img.png"
                className="rounded-lg object-cover"
                fill
              />
            </div>
            <div className="flex flex-col">
              <h2 className="text-gray-950 font-bold text-xl italic w-[250px] truncate">
                Muhammad Abdullah
              </h2>
              <Anchor variant="grey" as="button" text="ma0401431@gmail.com" />
            </div>
          </div>
          {/*  */}
          <DescriptionListMapper config={profileDescriptionBlocks} />
        </MaxWidth>
      </div>
    </div>
  );
};

export default ProfileContainer;
