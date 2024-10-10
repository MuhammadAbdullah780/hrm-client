"use client";
import { Divider } from "@/components/common/Divider";
import MaxWidth from "@/components/common/MaxWidth";
import StaticTable from "@/components/common/StaticTable";
import { userListingTableColumns } from "./data/columns";
import { userListingData } from "./data/listingData";

type Props = {};

const UserListingContainer = (props: Props) => {
  return (
    <MaxWidth className="p-5">
      <h1 className="heading-1">Users</h1>
      <Divider />
      <StaticTable columns={userListingTableColumns} data={userListingData} />
    </MaxWidth>
  );
};

export default UserListingContainer;
