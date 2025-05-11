import "dotenv/config";
import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: [
    {
      "http://localhost:8080/v1/graphql": {
        headers: {
          "x-hasura-admin-secret":
            process.env.NEXT_PUBLIC_HASURA_ADMIN_SECRET || "",
        },
      },
    },
  ],
  documents: "lib/**/*.ts",
  generates: {
    "lib/graphql/types.ts": {
      plugins: ["typescript", "typescript-operations"],
    },
  },
};

export default config;
