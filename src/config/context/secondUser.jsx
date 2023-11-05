import { createContext, useContext, useState } from "react";

export const secondUserContext = createContext();

export const SecondUserProvider = ({ children }) => {
  const [secondUser, setSecondUser] = useState({});

  return (
    <secondUserContext.Provider value={{ secondUser, setSecondUser }}>
      {children}
    </secondUserContext.Provider>
  );
};

export const useSecondUser = () => useContext(secondUserContext);
