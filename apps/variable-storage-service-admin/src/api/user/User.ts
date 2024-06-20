import { JsonValue } from "type-fest";
import { Token } from "../token/Token";
import { Variable } from "../variable/Variable";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  tokens?: Array<Token>;
  updatedAt: Date;
  username: string;
  variables?: Array<Variable>;
};
