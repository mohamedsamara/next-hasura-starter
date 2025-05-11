"use client";

import { useState } from "react";
import { ADD_STAFF } from "lib/graphql";
import { useMutation } from "@apollo/client/react";
import { useRouter } from "next/navigation";
import { Button, Input } from "components/ui";

export const CreateStaff = ({ orgId }: { orgId: number }) => {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [addStaff] = useMutation(ADD_STAFF);

  const isDisabled = !firstName || !lastName || !contactNumber;

  const submit = async () => {
    if (isDisabled) return;

    await addStaff({
      variables: {
        object: {
          first_name: firstName,
          last_name: lastName,
          contact_number: contactNumber,
          organization_id: orgId,
        },
      },
    });
    setFirstName("");
    setLastName("");
    setContactNumber("");
    router.refresh();
  };

  return (
    <div className="w-full flex flex-col border border-slate-300 p-4 rounded-lg space-y-6">
      <Input
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="First Name"
      />
      <Input
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        placeholder="Last Name"
      />
      <Input
        value={contactNumber}
        onChange={(e) => setContactNumber(e.target.value)}
        placeholder="Contact Number"
      />
      <Button disabled={isDisabled} onClick={submit}>
        Add Staff
      </Button>
    </div>
  );
};
