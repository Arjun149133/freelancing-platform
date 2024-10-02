import { atom } from "recoil";

export interface User {
  email: string;
  first_name?: string;
  last_name?: string;
  // Add more fields as necessary
}

export const userState = atom<User | null>({
  key: "userState",
  default: null,
});
