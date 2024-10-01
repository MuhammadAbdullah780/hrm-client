"use client";
import { Divider } from "@/components/common/Divider";
import MaxWidth from "@/components/common/MaxWidth";
import StaticTable from "@/components/common/StaticTable";
import React from "react";
import { employeeListingTableColumns } from "./data/columns";
import { employeeListingData } from "./data/listingData";

type Props = {};

const EmployeeContainer = (props: Props) => {
  return (
    <MaxWidth className="p-5">
      <h1 className="heading-1">Employees</h1>
      <Divider />
      <StaticTable
        columns={employeeListingTableColumns}
        data={employeeListingData}
      />
    </MaxWidth>
  );
};

export default EmployeeContainer;
