import { createContext } from "react";

interface ContextProps {
  closeSideBar: () => void;
  openSideBar: () => void;
  sideBarOpen: boolean;
  isAddingEntry: boolean;
  isDraging: boolean;
  setIsAddingEntry: (state: boolean) => void;
  setIsDraging: (state: boolean) => void;
}
export const UIContext = createContext({} as ContextProps);
