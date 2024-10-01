type Args = {
  /**
   * 1. showOnlyOn means to render a field on a specific value of target field
   * 2. showExcept means to render a field other than the target value foe target field
   */
  type: "showOnlyOn" | "showExcept";
  value: any;
  referenceFieldId: string;
};

export const useRhfFieldView = () => {};
