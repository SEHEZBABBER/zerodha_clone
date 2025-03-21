import { createContext, useContext, useState } from "react";
const UserContext = createContext();
export const UserProvider = ({ children }) => {
   let [CurrPath,setCurrPath] = useState("/");
   let [user_info ,setuser_info] = useState(null);
  return (
    <UserContext.Provider value={{ CurrPath, setCurrPath ,user_info , setuser_info}}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
