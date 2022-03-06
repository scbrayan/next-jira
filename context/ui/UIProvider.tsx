import { FC, useReducer } from "react";
import { uiReducer } from ".";
import { UIContext } from "./UIContext";
export interface UIState {
  sideBarOpen: boolean;
}

const UI_INITIAL_STATE: UIState = {
  sideBarOpen: false,
};

export const UIProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);
  const openSideBar = () => dispatch({ type: "UI - Open Sidebar" });
  const closeSideBar = () => dispatch({ type: "UI - Close Sidebar" });
  return (
    <UIContext.Provider
      value={{
        ...state,

        closeSideBar,
        openSideBar,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
