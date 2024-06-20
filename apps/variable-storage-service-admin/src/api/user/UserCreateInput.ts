import { InputJsonValue } from "../../types";
import { TokenCreateNestedManyWithoutUsersInput } from "./TokenCreateNestedManyWithoutUsersInput";
import { VariableCreateNestedManyWithoutUsersInput } from "./VariableCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  tokens?: TokenCreateNestedManyWithoutUsersInput;
  username: string;
  variables?: VariableCreateNestedManyWithoutUsersInput;
};
