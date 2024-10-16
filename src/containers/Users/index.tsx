"use client";
import { Divider } from "@/components/common/Divider";
import MaxWidth from "@/components/common/MaxWidth";
import StaticTable from "@/components/common/StaticTable";
import { userListingTableColumns } from "./data/columns";
import { userListingData } from "./data/listingData";
import { Button } from "@/components/common/Button";
import { useRouter } from "next/navigation";

type Props = {};

const UserListingContainer = (props: Props) => {
  const router = useRouter();

  return (
    <MaxWidth className="p-5">
      <div className="flex gap-3 items-center">
        <h1 className="heading-1 flex-1">Users</h1>
        {/* <CreateAdminModal /> */}
        <Button onClick={() => router?.push("/users/create")}>Create</Button>
      </div>
      <Divider />
      <StaticTable columns={userListingTableColumns} data={userListingData} />
    </MaxWidth>
  );
};

export default UserListingContainer;
