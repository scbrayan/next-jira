import { UIState } from ".";

type UIActionType = {
  type:
    | "UI - Open Sidebar"
    | "UI - Close Sidebar"
    | "UI - Is Adding Entry"
    | "UI - Is Draging";
  payload?: any;
};
export const uiReducer = (state: UIState, action: UIActionType): UIState => {
  switch (action.type) {
    case "UI - Open Sidebar":
      return { ...state, sideBarOpen: true };
    case "UI - Close Sidebar":
      return { ...state, sideBarOpen: false };
    case "UI - Is Adding Entry":
      return { ...state, isAddingEntry: action.payload };
    case "UI - Is Draging":
      return { ...state, isDraging: action.payload };
    default:
      return state;
  }
};
