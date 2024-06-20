import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TokenListRelationFilter } from "../token/TokenListRelationFilter";
import { VariableListRelationFilter } from "../variable/VariableListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  tokens?: TokenListRelationFilter;
  username?: StringFilter;
  variables?: VariableListRelationFilter;
};
