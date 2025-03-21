import { createContext, useContext, useState } from "react";
const UserContext = createContext();
export const UserProvider = ({ children }) => {
   let [CurrPath,setCurrPath] = useState("/");

  return (
    <UserContext.Provider value={{ CurrPath, setCurrPath }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
