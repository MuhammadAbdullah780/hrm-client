"use client";
import { Divider } from "@/components/common/Divider";
import MaxWidth from "@/components/common/MaxWidth";
import StaticTable from "@/components/common/StaticTable";
import { adminListingTableColumns } from "./data/columns";
import { adminsListingMockData } from "./data/mock";
import CreateAdminModal from "./modals/Create";
import { useRouter } from "next/navigation";
import { Button } from "@/components/common/Button";

type Props = {};

const AdminListingContainer = (props: Props) => {
  const router = useRouter();

  return (
    <MaxWidth className="p-5 flex flex-col gap-4">
      <div className="flex gap-3 items-center">
        <h1 className="heading-1 flex-1">Admins</h1>
        {/* <CreateAdminModal /> */}
        <Button onClick={() => router?.push("/admins/create")}>Create</Button>
      </div>
      <Divider includeGap={false} />
      <StaticTable
        columns={adminListingTableColumns}
        data={adminsListingMockData}
      />
    </MaxWidth>
  );
};

export default AdminListingContainer;
