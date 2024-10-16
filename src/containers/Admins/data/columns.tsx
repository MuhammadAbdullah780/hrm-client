import { StaticTableColumns } from "@/components/common/StaticTable";
import { ChevronRight } from "lucide-react";
import { adminsListingMockData } from "./mock";
import { RiDeleteBin6Line, RiEyeLine, RiPencilLine } from "@remixicon/react";

export const adminListingTableColumns: StaticTableColumns<
  (typeof adminsListingMockData)[0]
> = [
  {
    dataIndex: "name",
    title: "Name",
  },
  {
    dataIndex: "gender",
    title: "Gender",
  },
  {
    dataIndex: "phone_number",
    title: "Phone No.",
  },
  {
    dataIndex: "account_status",
    title: "Acc. Status",
    width: 150,
  },
  {
    dataIndex: "birth_date",
    title: "Birth Date",
    width: 150,
  },
  {
    dataIndex: "created_by.name",
    title: "Created By",
  },
  {
    dataIndex: "_id",
    title: "Actions",
    render() {
      return (
        <div className="flex items-center gap-2">
          <RiEyeLine className="w-4 h-4 text-gray-500 cursor-pointer" />
          <RiPencilLine className="w-4 h-4 fill-blue-500 cursor-pointer" />
          <RiDeleteBin6Line className="w-4 h-4 cursor-pointer fill-red-600" />
        </div>
      );
    },
  },
];
