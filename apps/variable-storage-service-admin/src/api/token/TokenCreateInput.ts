import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TokenCreateInput = {
  expiresAt?: Date | null;
  token?: string | null;
  user?: UserWhereUniqueInput | null;
};
