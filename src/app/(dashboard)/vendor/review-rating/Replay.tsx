import CButton from "@/src/components/ui_component/common/Form/CButton";
import CForm from "@/src/components/ui_component/common/Form/CForm";
import CInput from "@/src/components/ui_component/common/Form/CInput";
import { ModalBox } from "@/src/components/ui_component/common/modal/ModalBox";
import { useReplyRating } from "@/src/hooks/rating.hook";
import React from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const Reply = ({ id }: { id: string }) => {
  const { mutate, isPending } = useReplyRating();
  const onFormSubmit = async (data: FieldValues) => {
    mutate(
      { id, vendorReply: data.vendorReply },
      {
        onSuccess: () => {
          toast.success("Reply added successfully.");
        },
        onError: () => {
          toast.error("Something went wrong! Try again.");
        },
      }
    );
  };
  return (
    <div>
      <ModalBox title="Reply to Customer" btnText="Reply">
        <CForm onFromSubmit={onFormSubmit}>
          <div className="grid gap-2">
            <CInput name="vendorReply" label="Reply"></CInput>
            <CButton type="submit" isPending={isPending} text="Reply"></CButton>
          </div>
        </CForm>
      </ModalBox>
    </div>
  );
};

export default Reply;
