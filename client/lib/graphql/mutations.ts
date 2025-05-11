import { gql } from "@apollo/client";

export const ADD_ORG = gql`
  mutation AddOrg($object: organizations_insert_input!) {
    insert_organizations_one(object: $object) {
      id
      name
    }
  }
`;

export const ADD_STAFF = gql`
  mutation AddStaff($object: staff_insert_input!) {
    insert_staff_one(object: $object) {
      id
      first_name
      last_name
      contact_number
      organization_id
    }
  }
`;
