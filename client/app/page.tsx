import { OrgCard } from "components/orgs";
import { createApolloClient, GET_ORGS, GetOrgsQuery } from "lib/graphql";
import Link from "next/link";

export default async function Home() {
  const client = createApolloClient();
  const { data } = await client.query<GetOrgsQuery>({
    query: GET_ORGS,
  });

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center space-y-10 py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex items-center justify-between w-full">
          <h1 className="font-bold text-3xl">Next Hasura Starter</h1>
          <Link href="org/new">New Org</Link>
        </div>
        {(data?.organizations || []).map((org) => (
          <OrgCard key={org.id} org={org} isLink />
        ))}
      </main>
    </div>
  );
}
