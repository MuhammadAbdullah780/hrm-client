import RoundIconWrap from "@/components/common/RoundIconWrap";
import { DescriptionListBlocks } from "@/types/descriptionList";
import { RiPencilLine } from "@remixicon/react";
import FieldEditModal from "../FieldEditModal";

export const profileDescriptionBlocks: DescriptionListBlocks = [
  {
    title: "Basic Information",
    items: [
      {
        title: "First Name",
        content: "Muhammad Abdullah",
        allowEdit: true,
        editComp: <FieldEditModal />,
      },
      {
        title: "Email",
        content: "email@email.com",
        allowEdit: false,
      },
      {
        title: "Birth Date",
        content: "2003-04-25",
        allowEdit: false,
      },
      {
        title: "Gender",
        content: "Male",
        allowEdit: false,
      },
      {
        title: "Phone",
        content: "+92 3353975358",
        allowEdit: false,
      },
      {
        title: "Address",
        content: "742 Evergreen Terrace, Springfield, IL 62704, United States",
        allowEdit: true,
        editComp: <RoundIconWrap icon={RiPencilLine} />,
      },
      {
        title: "Education",
        content: "B.Sc. Computer Science",
        allowEdit: true,
        editComp: <RoundIconWrap icon={RiPencilLine} />,
      },
    ],
  },
  {
    title: "Organizational Information",
    items: [
      {
        title: "Job Title",
        content: "Sr. Software Engineer",
        allowEdit: false,
      },
      {
        title: "Role",
        content: "Admin",
        allowEdit: false,
      },
      {
        title: "Hire Date",
        content: "2003-04-25",
        allowEdit: false,
      },
      {
        title: "Work Hours",
        content: "8 Hours",
        allowEdit: false,
      },
      {
        title: "Work Days",
        content: "Monday, Tuesday, Wednesday, Thursday, Friday",
        allowEdit: false,
      },
      {
        title: "Work Mode",
        content: "Remote",
        allowEdit: false,
      },
      {
        title: "Emp. Type",
        content: "Permenant",
        allowEdit: false,
      },
      {
        title: "Emp. Status",
        content: "Full Time",
        allowEdit: false,
      },
      {
        title: "Salary",
        content: "Rs 90,000",
        allowEdit: false,
      },
      {
        title: "Total Experience",
        content: "2 Years, 6 Months",
        allowEdit: false,
      },
    ],
  },
];
