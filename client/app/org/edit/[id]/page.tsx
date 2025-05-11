import { CreateStaff, OrgCard } from "components/orgs";
import {
  createApolloClient,
  GET_ORG_BY_ID,
  GetOrgByIdQuery,
} from "lib/graphql";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  if (!id) return notFound();
  const orgId = parseInt(id, 10);
  if (isNaN(orgId)) return notFound();

  const client = createApolloClient();
  const { data } = await client.query<GetOrgByIdQuery>({
    query: GET_ORG_BY_ID,
    variables: { id: orgId },
  });

  if (!data?.organizations_by_pk) return notFound();

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center space-y-10 py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex items-center justify-between w-full">
          <h1 className="font-bold text-3xl">Add Staff</h1>
          <Link href="/">Back to Orgs</Link>
        </div>
        <OrgCard org={data?.organizations_by_pk} />
        <CreateStaff orgId={orgId} />
      </main>
    </div>
  );
}
