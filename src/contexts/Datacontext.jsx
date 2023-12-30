import React, { useContext, createContext, useState } from "react";

const CustomContext = createContext();

export const CustomUseContext = () => useContext(CustomContext);

export const ContextProvider = ({ children }) => {
  const [load, setLoad] = useState(false);
  const [loadmsg, setLoadmsg] = useState("Loading...");

  return (
    <CustomContext.Provider value={{ setLoad, setLoadmsg, load, loadmsg }}>
      {children}
    </CustomContext.Provider>
  );
};
