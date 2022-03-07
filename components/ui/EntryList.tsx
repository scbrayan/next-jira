import { List, Paper } from "@mui/material";
import { DragEvent, FC, useContext, useMemo } from "react";
import { EntryItem } from ".";
import { EntryStatus } from "../../interfaces";
import { EntriesContext } from "../../context/entries";
import { UIContext } from "../../context/ui";
import styles from "./EntryList.module.css";
interface Props {
  status: EntryStatus;
}

export const EntryList: FC<Props> = ({ status }) => {
  const { entries, updateEntry } = useContext(EntriesContext);
  const { isDraging, setIsDraging } = useContext(UIContext);
  const entriesByStatus = useMemo(
    () => entries.filter((entry) => entry.status === status),
    [entries]
  );

  const allowDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const onDopEntry = (event: DragEvent<HTMLDivElement>) => {
    const id = event.dataTransfer.getData("_id");

    const entry = entries.find((x) => x._id === id)!;
    entry.status = status;
    updateEntry(entry);
    setIsDraging(false);
  };

  return (
    <div
      onDrop={onDopEntry}
      onDragOver={allowDrop}
      className={isDraging ? styles.dragging : ""}
    >
      <Paper
        sx={{
          height: "calc(100vh - 100px)",
          //   overflow: "scroll",
          width: "100%",
          backgroundColor: "transparent",
          padding: "1px 5px",
        }}
      >
        {/* Cambios drag */}
        <List sx={{ opacity: isDraging ? 0.2 : 1, transition: "all 0.3" }}>
          {entriesByStatus.map((entry) => (
            <EntryItem key={entry._id} entry={entry}></EntryItem>
          ))}
        </List>
      </Paper>
    </div>
  );
};
