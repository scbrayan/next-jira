import { createContext } from "react";

interface ContextProps {
  closeSideBar: () => void;
  openSideBar: () => void;
  sideBarOpen: boolean;
}
export const UIContext = createContext({} as ContextProps);
