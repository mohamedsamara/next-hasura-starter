"use client";

import { useState } from "react";
import { ADD_ORG } from "lib/graphql";
import { useMutation } from "@apollo/client/react";
import Link from "next/link";
import { Button, Input } from "components/ui";

export default function Page() {
  const [name, setName] = useState("");
  const [addOrg] = useMutation(ADD_ORG);

  const submit = async () => {
    await addOrg({
      variables: {
        object: {
          name,
        },
      },
    });
    setName("");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center space-y-10 py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex items-center justify-between w-full">
          <h1 className="font-bold text-3xl">Add Org</h1>
          <Link href="/">Back to Orgs</Link>
        </div>
        <div className="w-full flex flex-col border border-slate-300 p-4 rounded-lg space-y-6">
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Org Name"
          />
          <Button disabled={name.length <= 0} onClick={submit}>
            Add Org
          </Button>
        </div>
      </main>
    </div>
  );
}
