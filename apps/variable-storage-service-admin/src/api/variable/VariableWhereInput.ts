import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { JsonFilter } from "../../util/JsonFilter";

export type VariableWhereInput = {
  id?: StringFilter;
  key?: StringNullableFilter;
  user?: UserWhereUniqueInput;
  value?: JsonFilter;
};
