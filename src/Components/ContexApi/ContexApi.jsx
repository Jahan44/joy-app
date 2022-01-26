import React from "react";
import { createContext } from "react";
import useAuth from "./../Datas/FireDatas";
export const Context = createContext();
const ContexApi = ({ children }) => {
  const alldatas = useAuth();

  return <Context.Provider value={alldatas}>{children}</Context.Provider>;
};

export default ContexApi;
