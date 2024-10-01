export type States = {
  actionType: "disabledAt" | "disabledUntil" | "showAt";
  value: any;
  referenceField: string;
}[];
