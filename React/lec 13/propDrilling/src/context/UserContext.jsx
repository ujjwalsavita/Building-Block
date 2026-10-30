import { createContext } from "react";

export const UserContext = createContext();
// const name = "Coding Seekho";

export default function AppContext({ children }) {
  return (
    <UserContext.Provider value="Coding Seekho">
      {children}
    </UserContext.Provider>
  );
}