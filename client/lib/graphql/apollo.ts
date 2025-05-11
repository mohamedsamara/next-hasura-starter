import { InMemoryCache, HttpLink, ApolloClient } from "@apollo/client";

export function createApolloClient() {
  return new ApolloClient({
    ssrMode: true,
    link: new HttpLink({
      uri: process.env.NEXT_PUBLIC_HASURA_URL,
      headers: {
        "x-hasura-admin-secret":
          process.env.NEXT_PUBLIC_HASURA_ADMIN_SECRET || "",
      },
      fetchOptions: {
        cache: "no-store",
      },
    }),
    cache: new InMemoryCache(),
    defaultOptions: {
      query: {
        fetchPolicy: "network-only",
      },
    },
  });
}

export const apolloClient = createApolloClient();
