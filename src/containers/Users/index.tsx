"use client";
import { Button } from "@/components/common/Button";

import MaxWidth from "@/components/common/MaxWidth";
import Link from "next/link";
import UserListingContent from "./content";
import WithClientFetch from "@/components/HOCs/WithClientFetch";

type Props = {};

const UserListingContainer = (props: Props) => {
  return (
    <MaxWidth className="p-5">
      <div className="flex gap-3 items-center">
        <h1 className="heading-1 flex-1">Users</h1>
        <Link href="/users/create">
          <Button>Create</Button>
        </Link>
      </div>
      <UserListingContent />
    </MaxWidth>
  );
};

export default UserListingContainer;
