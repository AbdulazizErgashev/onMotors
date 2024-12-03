import { createContext } from "react";

export const ShopContext = createContext();

export const ShopContextProvider = ({ children }) => {
  return <ShopContext.Provider value={{}}>{children}</ShopContext.Provider>;
};
