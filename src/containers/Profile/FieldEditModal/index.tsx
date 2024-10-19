"use client";
import { Button } from "@/components/common/Button";
import { Callout } from "@/components/common/Callout";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/common/Dialog";
import RoundIconWrap from "@/components/common/RoundIconWrap";
import RhfInput from "@/components/RhfFields/Input";
import { stringToObjectNotation } from "@/functions/stringToObject";
import { useToggleBoolean } from "@/hooks/useToggleBoolean";
import { RiPencilLine } from "@remixicon/react";
import { FieldError, FormProvider, useForm } from "react-hook-form";

type Props = {};

const FieldEditModal = (props: Props) => {
  const { handleChange, isOpen } = useToggleBoolean(false);

  const handleClose = () => {
    handleChange?.(false);
  };

  const form = useForm({
    defaultValues: {
      name: "Muhammad Abdullah",
    },
    mode: "onChange",
  });

  const { formState } = form;

  const errors = stringToObjectNotation(
    "name",
    formState?.errors,
  ) as FieldError;

  return (
    <Dialog modal open={isOpen}>
      <DialogTrigger asChild>
        <RoundIconWrap
          onClick={() => handleChange?.(true)}
          icon={RiPencilLine}
        />
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        {/* HEADER */}
        <DialogHeader>
          <DialogTitle>Edit Modal</DialogTitle>
        </DialogHeader>
        {/* CONTENT */}
        <section className="my-4 flex flex-col gap-3">
          {errors?.root?.message && (
            <Callout variant="error" title="Error Variant">
              {errors?.root?.message}
            </Callout>
          )}

          <FormProvider {...form}>
            <form id="update-modal">
              <RhfInput
                id="name"
                fieldProps={{ label: "", orientation: "vertical" }}
              />
            </form>
          </FormProvider>
        </section>
        {/* FOOTER */}
        <DialogFooter className="mt-5">
          <DialogClose asChild>
            <Button
              className="mt-2 w-full sm:mt-0 sm:w-fit"
              onClick={handleClose}
              variant="secondary">
              Cancel
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button className="w-full sm:w-fit">Update</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default FieldEditModal;
