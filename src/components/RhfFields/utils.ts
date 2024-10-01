import { States } from "./types";

export const isRhfFieldDisable = ({
  states,
  disabled,
  watch,
}: {
  states: States;
  disabled: boolean;
  watch: any;
}) => {
  if (disabled) {
    return disabled;
  }

  if (!states?.length || !states) {
    return false;
  }

  const possibilities = new Set(["disabledUntil", "disabledAt"]);

  const arrayOfBooleans = states?.map((item) => {
    if (!possibilities?.has(item?.actionType)) {
      return false;
    }

    switch (item?.actionType) {
      case "disabledAt":
        return watch(item?.referenceField) === item?.value ? true : false;

      case "disabledUntil":
        console.log(
          watch(item?.referenceField) === item?.value ? false : true,
          "HI__________",
        );
        return watch(item?.referenceField) === item?.value ? false : true;
    }
  });

  return arrayOfBooleans?.includes(true) ? true : false;
};

export const shouldFieldShow = ({
  states,
  watch,
}: {
  watch: any;
  states: States;
}) => {
  const possibilities = new Set(["showAt"]);

  if (!states || !states?.length) {
    return true;
  }

  const booleans = states?.map((item) => {
    if (!possibilities?.has(item?.actionType)) {
      return true;
    }

    switch (item?.actionType) {
      case "showAt":
        return watch(item?.referenceField) === item?.value ? true : false;
    }
  });

  return booleans?.includes(false) ? false : true;
};
