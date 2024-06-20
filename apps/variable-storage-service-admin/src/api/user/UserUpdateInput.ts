import { InputJsonValue } from "../../types";
import { TokenUpdateManyWithoutUsersInput } from "./TokenUpdateManyWithoutUsersInput";
import { VariableUpdateManyWithoutUsersInput } from "./VariableUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  tokens?: TokenUpdateManyWithoutUsersInput;
  username?: string;
  variables?: VariableUpdateManyWithoutUsersInput;
};
