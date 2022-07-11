import { createContext, useContext, useState } from "react";

const Context = createContext();

export function ProfileProvider({ children }) {
  const [profile, setProfile] = useState({});
  return (
    <Context.Provider value={[profile, setProfile]}>{children}</Context.Provider>
  );
}

export function useProfileContext() {
  return useContext(Context);
}