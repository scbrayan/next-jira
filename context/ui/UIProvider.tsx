import { FC, useReducer } from "react";
import { uiReducer } from ".";
import { UIContext } from "./UIContext";
export interface UIState {
  sideBarOpen: boolean;
  isAddingEntry: boolean;
  isDraging: boolean;
}

const UI_INITIAL_STATE: UIState = {
  sideBarOpen: false,
  isAddingEntry: false,
  isDraging: false,
};
export const UIProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);
  const openSideBar = () => dispatch({ type: "UI - Open Sidebar" });
  const closeSideBar = () => dispatch({ type: "UI - Close Sidebar" });
  const setIsAddingEntry = (state: boolean) => {
    dispatch({ type: "UI - Is Adding Entry", payload: state });
  };
  const setIsDraging = (state: boolean) => {
    dispatch({ type: "UI - Is Draging", payload: state });
  };
  return (
    <UIContext.Provider
      value={{
        ...state,

        closeSideBar,
        openSideBar,
        setIsAddingEntry,
        setIsDraging
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
