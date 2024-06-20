import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type VariableCreateInput = {
  key?: string | null;
  user?: UserWhereUniqueInput | null;
  value?: InputJsonValue;
};
