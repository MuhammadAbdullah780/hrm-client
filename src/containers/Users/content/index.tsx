"use client";
import { Divider } from "@/components/common/Divider";
import StaticTable from "@/components/common/StaticTable";
import { useQuery } from "@tanstack/react-query";
import { userListingTableColumns } from "../data/columns";
import { userListingData } from "../data/listingData";

type Props = {};

const UserListingContent = (props: Props) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["asas"],
    queryFn: () => {
      console.log("HI_______");
    },
  });

  return (
    <>
      <Divider />
      <StaticTable columns={userListingTableColumns} data={userListingData} />
    </>
  );
};

export default UserListingContent;
