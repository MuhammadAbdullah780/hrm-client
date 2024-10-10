import { StaticTableColumns } from "@/components/common/StaticTable";
import { userListingData } from "./listingData";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import Anchor from "@/components/common/Anchor";

export const userListingTableColumns: StaticTableColumns<
  (typeof userListingData)[number]
> = [
  {
    dataIndex: "name",
    title: "Name",
  },
  {
    dataIndex: "email",
    title: "Email",
  },
  {
    dataIndex: "dateOfBirth",
    title: "Date Of Birth",
    width: 200,
  },
  {
    dataIndex: "hireDate",
    title: "Hire Date",
    width: 150,
  },
  {
    dataIndex: "phoneNumber",
    title: "Phone",
  },
  {
    dataIndex: "gender",
    title: "Gender",
  },
  {
    dataIndex: "address.city",
    title: "City",
  },
  {
    dataIndex: "address.country",
    title: "Country",
  },
  {
    dataIndex: "role",
    title: "Role",
  },
  {
    dataIndex: "jobTitle",
    title: "Job Title",
  },
  {
    dataIndex: "employmentStatus.current",
    title: "Emp. Status",
    width: 150,
  },
  {
    dataIndex: "employmentType.current",
    title: "Emp. Type",
    width: 150,
  },
  {
    dataIndex: "workingHours",
    title: "Work Hours",
    width: 150,
  },
  {
    dataIndex: "workMode",
    title: "Work Mode",
    width: 150,
  },
  {
    dataIndex: "salary.formatted",
    title: "Salary",
    width: 150,
  },
  {
    dataIndex: "timeZone",
    title: "",
    render() {
      return <Anchor text="Delete" as="button" />;
    },
  },
  {
    dataIndex: "timeZone",
    title: "",
    align: "end",
    render(p) {
      const router = useRouter();

      return (
        <ChevronRight
          className="w-4 h-4 text-gray-500 cursor-pointer"
          onClick={() => router?.push(`/users/${p?.id}`)}
        />
      );
    },
  },
];
