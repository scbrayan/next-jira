import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { FC, useContext } from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { UIContext } from "../../context/ui";
interface NabvarProps {}

export const Nabvar: FC<NabvarProps> = () => {
  const { openSideBar } = useContext(UIContext);
  return (
    <AppBar position="sticky" elevation={0}>
      <Toolbar>
        <IconButton size="large" edge={"start"} onClick={openSideBar}>
          <MenuOutlinedIcon />
        </IconButton>
        <Typography variant="h6">OpenJira</Typography>
      </Toolbar>
    </AppBar>
  );
};
