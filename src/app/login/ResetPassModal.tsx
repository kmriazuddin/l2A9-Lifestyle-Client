import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Modalbox } from "@/components/ui_component/common/modal/Modalbox";
import { useResetPass } from "@/hooks/auth.hook";
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
    <Modalbox variant="link" title="Reset Password" btnText="Forgot password?">
      <Input
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button
        disabled={isPending}
        onClick={() => {
          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
          !isPending && handleSend();
        }}
      >
        Send
      </Button>
    </Modalbox>
  );
};
