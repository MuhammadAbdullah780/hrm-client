"use client";
import { Button } from "@/components/common/Button";
import { Divider } from "@/components/common/Divider";
import MaxWidth from "@/components/common/MaxWidth";
import StaticTable from "@/components/common/StaticTable";
import { useRouter } from "next/navigation";
import { adminListingTableColumns } from "./data/columns";
import { adminsListingMockData } from "./data/mock";
import { Input } from "@/components/common/Input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/common/Select";
import { accountStatusOptions } from "@/constants/selectOptions/accountStatus";
import SelectControlled from "@/components/common/Select/Controlled";
import { sortByOptions } from "@/constants/selectOptions/sortBy";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/common/DropdownMenu";

const AdminListingContainer = () => {
  const router = useRouter();

  return (
    <MaxWidth className="p-5 flex flex-col gap-7">
      <div className="flex gap-3 items-center">
        <h1 className="heading-1 flex-1">Admins</h1>
        <Button onClick={() => router?.push("/admins/create")}>Create</Button>
      </div>
      <div className="flex justify-between gap-4">
        {/* Search Bar */}
        <div className="flex-1 max-w-[500px]">
          <Input placeholder="Search By Name..." type="search" />
        </div>

        {/* Sorting filters and Action button */}
        <div className="flex gap-3">
          <SelectControlled
            options={accountStatusOptions}
            placeholder="Status"
          />
          <SelectControlled options={sortByOptions} placeholder="Sort By" />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary">Action</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Delete</DropdownMenuItem>
              <DropdownMenuItem>Assign Job Title</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* <Divider includeGap={false} /> */}

      <div className="flex flex-col gap-7">
        <StaticTable
          columns={adminListingTableColumns}
          data={adminsListingMockData}
        />

        <Divider includeGap={false} />

        <div className="flex items-center justify-between">
          <p className="flex-1 paragraph">Showing 1 to 10 of 100 items</p>

          <div className="flex gap-3">
            <SelectControlled
              placeholder="Limit Per Page"
              options={[
                {
                  label: "10 Per Page",
                  value: "10",
                },
                {
                  label: "15 Per Page",
                  value: "15",
                },
                {
                  label: "20 Per Page",
                  value: "20",
                },
                {
                  label: "25 Per Page",
                  value: "25",
                },
                {
                  label: "30 Per Page",
                  value: "30",
                },
              ]}
            />
            <Button variant="secondary">Previous</Button>
            <Button variant="secondary">Next</Button>
          </div>
        </div>
      </div>
    </MaxWidth>
  );
};

export default AdminListingContainer;
