export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "organizations" */
  delete_organizations?: Maybe<Organizations_Mutation_Response>;
  /** delete single row from the table: "organizations" */
  delete_organizations_by_pk?: Maybe<Organizations>;
  /** delete data from the table: "staff" */
  delete_staff?: Maybe<Staff_Mutation_Response>;
  /** delete single row from the table: "staff" */
  delete_staff_by_pk?: Maybe<Staff>;
  /** insert data into the table: "organizations" */
  insert_organizations?: Maybe<Organizations_Mutation_Response>;
  /** insert a single row into the table: "organizations" */
  insert_organizations_one?: Maybe<Organizations>;
  /** insert data into the table: "staff" */
  insert_staff?: Maybe<Staff_Mutation_Response>;
  /** insert a single row into the table: "staff" */
  insert_staff_one?: Maybe<Staff>;
  /** update data of the table: "organizations" */
  update_organizations?: Maybe<Organizations_Mutation_Response>;
  /** update single row of the table: "organizations" */
  update_organizations_by_pk?: Maybe<Organizations>;
  /** update multiples rows of table: "organizations" */
  update_organizations_many?: Maybe<Array<Maybe<Organizations_Mutation_Response>>>;
  /** update data of the table: "staff" */
  update_staff?: Maybe<Staff_Mutation_Response>;
  /** update single row of the table: "staff" */
  update_staff_by_pk?: Maybe<Staff>;
  /** update multiples rows of table: "staff" */
  update_staff_many?: Maybe<Array<Maybe<Staff_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_OrganizationsArgs = {
  where: Organizations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Organizations_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_StaffArgs = {
  where: Staff_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Staff_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootInsert_OrganizationsArgs = {
  objects: Array<Organizations_Insert_Input>;
  on_conflict?: InputMaybe<Organizations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Organizations_OneArgs = {
  object: Organizations_Insert_Input;
  on_conflict?: InputMaybe<Organizations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_StaffArgs = {
  objects: Array<Staff_Insert_Input>;
  on_conflict?: InputMaybe<Staff_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Staff_OneArgs = {
  object: Staff_Insert_Input;
  on_conflict?: InputMaybe<Staff_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_OrganizationsArgs = {
  _inc?: InputMaybe<Organizations_Inc_Input>;
  _set?: InputMaybe<Organizations_Set_Input>;
  where: Organizations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Organizations_By_PkArgs = {
  _inc?: InputMaybe<Organizations_Inc_Input>;
  _set?: InputMaybe<Organizations_Set_Input>;
  pk_columns: Organizations_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Organizations_ManyArgs = {
  updates: Array<Organizations_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_StaffArgs = {
  _inc?: InputMaybe<Staff_Inc_Input>;
  _set?: InputMaybe<Staff_Set_Input>;
  where: Staff_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Staff_By_PkArgs = {
  _inc?: InputMaybe<Staff_Inc_Input>;
  _set?: InputMaybe<Staff_Set_Input>;
  pk_columns: Staff_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Staff_ManyArgs = {
  updates: Array<Staff_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "organizations" */
export type Organizations = {
  __typename?: 'organizations';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  /** An array relationship */
  staffs: Array<Staff>;
  /** An aggregate relationship */
  staffs_aggregate: Staff_Aggregate;
};


/** columns and relationships of "organizations" */
export type OrganizationsStaffsArgs = {
  distinct_on?: InputMaybe<Array<Staff_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Staff_Order_By>>;
  where?: InputMaybe<Staff_Bool_Exp>;
};


/** columns and relationships of "organizations" */
export type OrganizationsStaffs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Staff_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Staff_Order_By>>;
  where?: InputMaybe<Staff_Bool_Exp>;
};

/** aggregated selection of "organizations" */
export type Organizations_Aggregate = {
  __typename?: 'organizations_aggregate';
  aggregate?: Maybe<Organizations_Aggregate_Fields>;
  nodes: Array<Organizations>;
};

/** aggregate fields of "organizations" */
export type Organizations_Aggregate_Fields = {
  __typename?: 'organizations_aggregate_fields';
  avg?: Maybe<Organizations_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Organizations_Max_Fields>;
  min?: Maybe<Organizations_Min_Fields>;
  stddev?: Maybe<Organizations_Stddev_Fields>;
  stddev_pop?: Maybe<Organizations_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Organizations_Stddev_Samp_Fields>;
  sum?: Maybe<Organizations_Sum_Fields>;
  var_pop?: Maybe<Organizations_Var_Pop_Fields>;
  var_samp?: Maybe<Organizations_Var_Samp_Fields>;
  variance?: Maybe<Organizations_Variance_Fields>;
};


/** aggregate fields of "organizations" */
export type Organizations_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Organizations_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Organizations_Avg_Fields = {
  __typename?: 'organizations_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "organizations". All fields are combined with a logical 'AND'. */
export type Organizations_Bool_Exp = {
  _and?: InputMaybe<Array<Organizations_Bool_Exp>>;
  _not?: InputMaybe<Organizations_Bool_Exp>;
  _or?: InputMaybe<Array<Organizations_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  staffs?: InputMaybe<Staff_Bool_Exp>;
  staffs_aggregate?: InputMaybe<Staff_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "organizations" */
export enum Organizations_Constraint {
  /** unique or primary key constraint on columns "id" */
  OrganizationsPkey = 'organizations_pkey'
}

/** input type for incrementing numeric columns in table "organizations" */
export type Organizations_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "organizations" */
export type Organizations_Insert_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  staffs?: InputMaybe<Staff_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Organizations_Max_Fields = {
  __typename?: 'organizations_max_fields';
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Organizations_Min_Fields = {
  __typename?: 'organizations_min_fields';
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "organizations" */
export type Organizations_Mutation_Response = {
  __typename?: 'organizations_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Organizations>;
};

/** input type for inserting object relation for remote table "organizations" */
export type Organizations_Obj_Rel_Insert_Input = {
  data: Organizations_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Organizations_On_Conflict>;
};

/** on_conflict condition type for table "organizations" */
export type Organizations_On_Conflict = {
  constraint: Organizations_Constraint;
  update_columns?: Array<Organizations_Update_Column>;
  where?: InputMaybe<Organizations_Bool_Exp>;
};

/** Ordering options when selecting data from "organizations". */
export type Organizations_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  staffs_aggregate?: InputMaybe<Staff_Aggregate_Order_By>;
};

/** primary key columns input for table: organizations */
export type Organizations_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "organizations" */
export enum Organizations_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "organizations" */
export type Organizations_Set_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Organizations_Stddev_Fields = {
  __typename?: 'organizations_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Organizations_Stddev_Pop_Fields = {
  __typename?: 'organizations_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Organizations_Stddev_Samp_Fields = {
  __typename?: 'organizations_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "organizations" */
export type Organizations_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Organizations_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Organizations_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Organizations_Sum_Fields = {
  __typename?: 'organizations_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "organizations" */
export enum Organizations_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

export type Organizations_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Organizations_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Organizations_Set_Input>;
  /** filter the rows which have to be updated */
  where: Organizations_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Organizations_Var_Pop_Fields = {
  __typename?: 'organizations_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Organizations_Var_Samp_Fields = {
  __typename?: 'organizations_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Organizations_Variance_Fields = {
  __typename?: 'organizations_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "organizations" */
  organizations: Array<Organizations>;
  /** fetch aggregated fields from the table: "organizations" */
  organizations_aggregate: Organizations_Aggregate;
  /** fetch data from the table: "organizations" using primary key columns */
  organizations_by_pk?: Maybe<Organizations>;
  /** fetch data from the table: "staff" */
  staff: Array<Staff>;
  /** fetch aggregated fields from the table: "staff" */
  staff_aggregate: Staff_Aggregate;
  /** fetch data from the table: "staff" using primary key columns */
  staff_by_pk?: Maybe<Staff>;
};


export type Query_RootOrganizationsArgs = {
  distinct_on?: InputMaybe<Array<Organizations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organizations_Order_By>>;
  where?: InputMaybe<Organizations_Bool_Exp>;
};


export type Query_RootOrganizations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Organizations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organizations_Order_By>>;
  where?: InputMaybe<Organizations_Bool_Exp>;
};


export type Query_RootOrganizations_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootStaffArgs = {
  distinct_on?: InputMaybe<Array<Staff_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Staff_Order_By>>;
  where?: InputMaybe<Staff_Bool_Exp>;
};


export type Query_RootStaff_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Staff_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Staff_Order_By>>;
  where?: InputMaybe<Staff_Bool_Exp>;
};


export type Query_RootStaff_By_PkArgs = {
  id: Scalars['Int']['input'];
};

/** columns and relationships of "staff" */
export type Staff = {
  __typename?: 'staff';
  contact_number: Scalars['String']['output'];
  first_name: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  last_name: Scalars['String']['output'];
  /** An object relationship */
  organization: Organizations;
  organization_id: Scalars['Int']['output'];
  specialty?: Maybe<Scalars['String']['output']>;
  timezone: Scalars['String']['output'];
};

/** aggregated selection of "staff" */
export type Staff_Aggregate = {
  __typename?: 'staff_aggregate';
  aggregate?: Maybe<Staff_Aggregate_Fields>;
  nodes: Array<Staff>;
};

export type Staff_Aggregate_Bool_Exp = {
  count?: InputMaybe<Staff_Aggregate_Bool_Exp_Count>;
};

export type Staff_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Staff_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Staff_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "staff" */
export type Staff_Aggregate_Fields = {
  __typename?: 'staff_aggregate_fields';
  avg?: Maybe<Staff_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Staff_Max_Fields>;
  min?: Maybe<Staff_Min_Fields>;
  stddev?: Maybe<Staff_Stddev_Fields>;
  stddev_pop?: Maybe<Staff_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Staff_Stddev_Samp_Fields>;
  sum?: Maybe<Staff_Sum_Fields>;
  var_pop?: Maybe<Staff_Var_Pop_Fields>;
  var_samp?: Maybe<Staff_Var_Samp_Fields>;
  variance?: Maybe<Staff_Variance_Fields>;
};


/** aggregate fields of "staff" */
export type Staff_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Staff_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "staff" */
export type Staff_Aggregate_Order_By = {
  avg?: InputMaybe<Staff_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Staff_Max_Order_By>;
  min?: InputMaybe<Staff_Min_Order_By>;
  stddev?: InputMaybe<Staff_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Staff_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Staff_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Staff_Sum_Order_By>;
  var_pop?: InputMaybe<Staff_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Staff_Var_Samp_Order_By>;
  variance?: InputMaybe<Staff_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "staff" */
export type Staff_Arr_Rel_Insert_Input = {
  data: Array<Staff_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Staff_On_Conflict>;
};

/** aggregate avg on columns */
export type Staff_Avg_Fields = {
  __typename?: 'staff_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  organization_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "staff" */
export type Staff_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  organization_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "staff". All fields are combined with a logical 'AND'. */
export type Staff_Bool_Exp = {
  _and?: InputMaybe<Array<Staff_Bool_Exp>>;
  _not?: InputMaybe<Staff_Bool_Exp>;
  _or?: InputMaybe<Array<Staff_Bool_Exp>>;
  contact_number?: InputMaybe<String_Comparison_Exp>;
  first_name?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  last_name?: InputMaybe<String_Comparison_Exp>;
  organization?: InputMaybe<Organizations_Bool_Exp>;
  organization_id?: InputMaybe<Int_Comparison_Exp>;
  specialty?: InputMaybe<String_Comparison_Exp>;
  timezone?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "staff" */
export enum Staff_Constraint {
  /** unique or primary key constraint on columns "id" */
  StaffPkey = 'staff_pkey'
}

/** input type for incrementing numeric columns in table "staff" */
export type Staff_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  organization_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "staff" */
export type Staff_Insert_Input = {
  contact_number?: InputMaybe<Scalars['String']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  organization?: InputMaybe<Organizations_Obj_Rel_Insert_Input>;
  organization_id?: InputMaybe<Scalars['Int']['input']>;
  specialty?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Staff_Max_Fields = {
  __typename?: 'staff_max_fields';
  contact_number?: Maybe<Scalars['String']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
  organization_id?: Maybe<Scalars['Int']['output']>;
  specialty?: Maybe<Scalars['String']['output']>;
  timezone?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "staff" */
export type Staff_Max_Order_By = {
  contact_number?: InputMaybe<Order_By>;
  first_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_name?: InputMaybe<Order_By>;
  organization_id?: InputMaybe<Order_By>;
  specialty?: InputMaybe<Order_By>;
  timezone?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Staff_Min_Fields = {
  __typename?: 'staff_min_fields';
  contact_number?: Maybe<Scalars['String']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
  organization_id?: Maybe<Scalars['Int']['output']>;
  specialty?: Maybe<Scalars['String']['output']>;
  timezone?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "staff" */
export type Staff_Min_Order_By = {
  contact_number?: InputMaybe<Order_By>;
  first_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_name?: InputMaybe<Order_By>;
  organization_id?: InputMaybe<Order_By>;
  specialty?: InputMaybe<Order_By>;
  timezone?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "staff" */
export type Staff_Mutation_Response = {
  __typename?: 'staff_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Staff>;
};

/** on_conflict condition type for table "staff" */
export type Staff_On_Conflict = {
  constraint: Staff_Constraint;
  update_columns?: Array<Staff_Update_Column>;
  where?: InputMaybe<Staff_Bool_Exp>;
};

/** Ordering options when selecting data from "staff". */
export type Staff_Order_By = {
  contact_number?: InputMaybe<Order_By>;
  first_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_name?: InputMaybe<Order_By>;
  organization?: InputMaybe<Organizations_Order_By>;
  organization_id?: InputMaybe<Order_By>;
  specialty?: InputMaybe<Order_By>;
  timezone?: InputMaybe<Order_By>;
};

/** primary key columns input for table: staff */
export type Staff_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "staff" */
export enum Staff_Select_Column {
  /** column name */
  ContactNumber = 'contact_number',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name',
  /** column name */
  OrganizationId = 'organization_id',
  /** column name */
  Specialty = 'specialty',
  /** column name */
  Timezone = 'timezone'
}

/** input type for updating data in table "staff" */
export type Staff_Set_Input = {
  contact_number?: InputMaybe<Scalars['String']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  organization_id?: InputMaybe<Scalars['Int']['input']>;
  specialty?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Staff_Stddev_Fields = {
  __typename?: 'staff_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  organization_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "staff" */
export type Staff_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  organization_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Staff_Stddev_Pop_Fields = {
  __typename?: 'staff_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  organization_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "staff" */
export type Staff_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  organization_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Staff_Stddev_Samp_Fields = {
  __typename?: 'staff_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  organization_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "staff" */
export type Staff_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  organization_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "staff" */
export type Staff_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Staff_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Staff_Stream_Cursor_Value_Input = {
  contact_number?: InputMaybe<Scalars['String']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  organization_id?: InputMaybe<Scalars['Int']['input']>;
  specialty?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Staff_Sum_Fields = {
  __typename?: 'staff_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  organization_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "staff" */
export type Staff_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  organization_id?: InputMaybe<Order_By>;
};

/** update columns of table "staff" */
export enum Staff_Update_Column {
  /** column name */
  ContactNumber = 'contact_number',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name',
  /** column name */
  OrganizationId = 'organization_id',
  /** column name */
  Specialty = 'specialty',
  /** column name */
  Timezone = 'timezone'
}

export type Staff_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Staff_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Staff_Set_Input>;
  /** filter the rows which have to be updated */
  where: Staff_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Staff_Var_Pop_Fields = {
  __typename?: 'staff_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  organization_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "staff" */
export type Staff_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  organization_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Staff_Var_Samp_Fields = {
  __typename?: 'staff_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  organization_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "staff" */
export type Staff_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  organization_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Staff_Variance_Fields = {
  __typename?: 'staff_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  organization_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "staff" */
export type Staff_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  organization_id?: InputMaybe<Order_By>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "organizations" */
  organizations: Array<Organizations>;
  /** fetch aggregated fields from the table: "organizations" */
  organizations_aggregate: Organizations_Aggregate;
  /** fetch data from the table: "organizations" using primary key columns */
  organizations_by_pk?: Maybe<Organizations>;
  /** fetch data from the table in a streaming manner: "organizations" */
  organizations_stream: Array<Organizations>;
  /** fetch data from the table: "staff" */
  staff: Array<Staff>;
  /** fetch aggregated fields from the table: "staff" */
  staff_aggregate: Staff_Aggregate;
  /** fetch data from the table: "staff" using primary key columns */
  staff_by_pk?: Maybe<Staff>;
  /** fetch data from the table in a streaming manner: "staff" */
  staff_stream: Array<Staff>;
};


export type Subscription_RootOrganizationsArgs = {
  distinct_on?: InputMaybe<Array<Organizations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organizations_Order_By>>;
  where?: InputMaybe<Organizations_Bool_Exp>;
};


export type Subscription_RootOrganizations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Organizations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organizations_Order_By>>;
  where?: InputMaybe<Organizations_Bool_Exp>;
};


export type Subscription_RootOrganizations_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootOrganizations_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Organizations_Stream_Cursor_Input>>;
  where?: InputMaybe<Organizations_Bool_Exp>;
};


export type Subscription_RootStaffArgs = {
  distinct_on?: InputMaybe<Array<Staff_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Staff_Order_By>>;
  where?: InputMaybe<Staff_Bool_Exp>;
};


export type Subscription_RootStaff_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Staff_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Staff_Order_By>>;
  where?: InputMaybe<Staff_Bool_Exp>;
};


export type Subscription_RootStaff_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootStaff_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Staff_Stream_Cursor_Input>>;
  where?: InputMaybe<Staff_Bool_Exp>;
};

export type AddOrgMutationVariables = Exact<{
  object: Organizations_Insert_Input;
}>;


export type AddOrgMutation = { __typename?: 'mutation_root', insert_organizations_one?: { __typename?: 'organizations', id: number, name: string } | null };

export type AddStaffMutationVariables = Exact<{
  object: Staff_Insert_Input;
}>;


export type AddStaffMutation = { __typename?: 'mutation_root', insert_staff_one?: { __typename?: 'staff', id: number, first_name: string, last_name: string } | null };

export type GetOrgsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetOrgsQuery = { __typename?: 'query_root', organizations: Array<{ __typename?: 'organizations', id: number, name: string, staffs: Array<{ __typename?: 'staff', id: number, first_name: string, last_name: string, specialty?: string | null }> }> };

export type GetOrgByIdQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetOrgByIdQuery = { __typename?: 'query_root', organizations_by_pk?: { __typename?: 'organizations', id: number, name: string, staffs: Array<{ __typename?: 'staff', id: number, first_name: string, last_name: string }> } | null };
