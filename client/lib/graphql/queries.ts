import { gql } from "@apollo/client";

export const GET_ORGS = gql`
  query GetOrgs {
    organizations {
      id
      name
      staffs {
        id
        first_name
        last_name
        specialty
      }
    }
  }
`;

export const GET_ORG_BY_ID = gql`
  query GetOrgById($id: Int!) {
    organizations_by_pk(id: $id) {
      id
      name
      staffs {
        id
        first_name
        last_name
      }
    }
  }
`;
