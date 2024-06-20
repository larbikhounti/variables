import { User } from "../user/User";
import { JsonValue } from "type-fest";

export type Variable = {
  createdAt: Date;
  id: string;
  key: string | null;
  updatedAt: Date;
  user?: User | null;
  value: JsonValue;
};
