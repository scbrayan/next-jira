import { FC, useReducer } from "react";
import { Entry } from "../../interfaces";
import { entriesReducer } from "./";
import { EntriesContext } from "./EntriesContext";
import { v4 as uuidv4 } from "uuid";
export interface EntriesState {
  entries: Entry[];
}

const ENTRIES_INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id: uuidv4(),
      description: "pending: Descripn n1",
      status: "pending",
      createAt: Date.now(),
    },
    {
      _id: uuidv4(),
      description: "in-progress: Descripn n2",
      status: "in-progress",
      createAt: Date.now() - 1000000,
    },
    {
      _id: uuidv4(),
      description: "finished: Descripn n3",
      status: "finished",
      createAt: Date.now() - 100000,
    },
  ],
};

export const EntriesProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE);

  const addNewEntry = (description: string) => {
    const newEntry: Entry = {
      _id: uuidv4(),
      description,
      createAt: Date.now(),
      status: "pending",
    };
    dispatch({ type: "[Entry] Add-Entry", payload: newEntry });
  };

  const updateEntry = (entry: Entry) => {
    dispatch({ type: "[Entry] Update-Entry", payload: entry });
  };
  return (
    <EntriesContext.Provider
      value={{
        ...state,

        addNewEntry,
        updateEntry,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
