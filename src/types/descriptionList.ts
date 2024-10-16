export type DescriptionListBlocks = {
  title: string;
  items: DescriptionListItem[];
}[];

type DescriptionListItem = {
  title: string;
  content: string | React.ReactNode;
  allowEdit: boolean;
} & ( //
  | {
      allowEdit: true;
      editComp: React.ReactNode;
    }
  | { allowEdit: false }
);
