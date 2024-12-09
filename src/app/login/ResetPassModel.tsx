import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { ModalBox } from "@/src/components/ui_component/common/modal/ModalBox";
import { useResetPass } from "@/src/hooks/auth.hook";
import React, { useState } from "react";
import { toast } from "sonner";

export const ResetPassModal = () => {
  const { mutate: resetPassword, isPending } = useResetPass();
  const [email, setEmail] = useState("");

  const handleSend = () => {
    resetPassword(
      { email: email },
      {
        onSuccess: () => {
          toast.success("Reset link sent to email.");
        },
        onError: () => {
          toast.error("Something went wrong.");
        },
      }
    );
    setEmail("");
  };

  return (
    <ModalBox variant="link" title="Reset Password" btnText="Forgot password?">
      <Input
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button
        disabled={isPending}
        onClick={() => {
          !isPending && handleSend();
        }}
      >
        Send
      </Button>
    </ModalBox>
  );
};
