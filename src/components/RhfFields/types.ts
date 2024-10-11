export type States = {
  actionType: "disabledAt" | "disabledUntil" | "showAt";
  value: any;
  referenceField: string;
}[];

export type MutationStates = {
  referenceField: string;
  referenceValue: string;
  mutationValue: string;
}[];
