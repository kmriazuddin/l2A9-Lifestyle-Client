import React from "react";
import CForm from "../Form/CForm";
import CInput from "../Form/CInput";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { ModalBox } from "../modal/ModalBox";
import { CRating } from "../Form/CRating";
import { DialogClose } from "@/src/components/ui/dialog";
import { useAddRating } from "@/src/hooks/rating.hook";

const ReviewAction = ({
  productId,
  orderItemId,
}: {
  orderItemId: string;
  productId: string;
}) => {
  const { mutate, isPending } = useAddRating();
  const onFromSubmit = async (data: FieldValues) => {
    mutate(
      { ...data, orderItemId, productId },
      {
        onSuccess: () => {
          toast.success("Review added.");
        },
        onError: () => {
          toast.error("Something went wrong!");
        },
      }
    );
  };

  return (
    <ModalBox title="Give Review" btnText="Give Review">
      <CForm onFromSubmit={onFromSubmit}>
        <div className="grid gap-4">
          <CInput name="comment" label="Comment"></CInput>
          <CRating label="Rating"></CRating>
          <DialogClose
            disabled={isPending}
            type="submit"
            className="bg-zinc-950 text-white hover:bg-zinc-900 p-2 rounded-lg"
          >
            Add Review
          </DialogClose>
        </div>
      </CForm>
    </ModalBox>
  );
};

export default ReviewAction;
