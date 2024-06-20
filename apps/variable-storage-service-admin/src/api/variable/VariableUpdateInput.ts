import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type VariableUpdateInput = {
  key?: string | null;
  user?: UserWhereUniqueInput | null;
  value?: InputJsonValue;
};
