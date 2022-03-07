import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { DragEvent, FC, useContext } from "react";
import { UIContext } from "../../context/ui";
import { Entry } from "../../interfaces";
interface Props {
  entry: Entry;
}
export const EntryItem: FC<Props> = ({ entry }) => {
  const { setIsDraging } = useContext(UIContext);

  const onDragStart = (event: DragEvent<HTMLDivElement>) => {
    setIsDraging(true);
    event.dataTransfer.setData("_id", entry._id);
  };

  const onDragEnd = (event: DragEvent<HTMLDivElement>) => {
    setIsDraging(false);
  };
  return (
    <div>
      <Card
        sx={{
          marginBottom: 1,
        }}
        draggable
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
      >
        <CardActionArea>
          <CardContent>
            <Typography sx={{ whiteSpace: "pre-line" }}>
              {entry.description}
            </Typography>
          </CardContent>
          <CardActions
            sx={{ display: "flex", justifyContent: "end", padding: 2 }}
          >
            <Typography variant="body2" sx={{ whiteSpace: "pre-line" }}>
              {entry.createAt}
            </Typography>
          </CardActions>
        </CardActionArea>
      </Card>
    </div>
  );
};
