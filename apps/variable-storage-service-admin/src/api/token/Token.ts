import { User } from "../user/User";

export type Token = {
  createdAt: Date;
  expiresAt: Date | null;
  id: string;
  token: string | null;
  updatedAt: Date;
  user?: User | null;
};
