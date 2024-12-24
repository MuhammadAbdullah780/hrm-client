"use client";
import { Button } from "@/components/common/Button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/common/DropdownMenu";
import { Input } from "@/components/common/Input";
import MaxWidth from "@/components/common/MaxWidth";
import SelectControlled from "@/components/common/Select/Controlled";
import { accountStatusOptions } from "@/constants/selectOptions/accountStatus";
import { sortByOptions } from "@/constants/selectOptions/sortBy";
import Link from "next/link";
import UserListingContent from "./content";
import Anchor from "@/components/common/Anchor";

type Props = {};

const UserListingContainer = (props: Props) => {
  return (
    <MaxWidth className="p-5 flex flex-col gap-7">
      <div className="flex gap-3 items-center">
        <h1 className="heading-1 flex-1">Users</h1>
        <Link href="/users/create">
          <Button>Create</Button>
        </Link>
      </div>

      {/* Filter Grid */}
      <div className="flex justify-between gap-4">
        {/* Search Bar */}
        <div className="flex-1 ">
          <Input placeholder="Search By Name..." type="search" />
        </div>
        <Button variant="secondary">Apply Filters</Button>
      </div>

      <div className="flex items-center justify-end">
        {/* Sorting filters and Action button */}
        <div className="flex gap-3">
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

      {/* CONTENT */}
      <UserListingContent />

      {/* PAGINATION STUFF */}
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
    </MaxWidth>
  );
};

export default UserListingContainer;
