import { createContext, useContext } from "react";
import useShow from "./useShow";

const MenuContext = createContext();
export function MenuProvide(props) {
  const { show, hanldeToggle } = useShow();
  const values = { show, hanldeToggle };
  return (
    <MenuContext.Provider value={values} {...props}></MenuContext.Provider>
  );
}

export function useToggle() {
  const context = useContext(MenuContext);
  if (typeof context === "undefined") throw new Error("loi");
  return context;
}
