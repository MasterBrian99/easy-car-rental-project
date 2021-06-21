import { createContext } from "react";

interface Prop {
  user: "";
  setUser: "";
}
export const UserContext = createContext<Prop | null>({
  user: "",
  setUser: "",
});
