import { GetOrgsQuery } from "./graphql";

export type Org = GetOrgsQuery["organizations"][number];
