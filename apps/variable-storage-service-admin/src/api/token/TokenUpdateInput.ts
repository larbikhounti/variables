import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TokenUpdateInput = {
  expiresAt?: Date | null;
  token?: string | null;
  user?: UserWhereUniqueInput | null;
};
