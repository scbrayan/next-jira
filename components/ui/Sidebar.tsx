import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { FC, useContext } from "react";
import { Box } from "@mui/system";
import MarkEmailReadOutlinedIcon from "@mui/icons-material/MarkEmailReadOutlined";
import { UIContext } from "../../context/ui";
interface Props {}

const menuItems: string[] = ["Inbox", "Stared"];
export const Sidebar: FC<Props> = () => {
  const { sideBarOpen, closeSideBar } = useContext(UIContext);
  return (
    <Drawer anchor="left" open={sideBarOpen} onClose={closeSideBar}>
      <Box sx={{ width: 250 }}>
        <Box sx={{ padding: "5px 10px" }}>
          <Typography variant="h4">Menu</Typography>
        </Box>
        <List>
          {menuItems.map((item, index) => (
            <ListItem button key={item}>
              <ListItemIcon>
                <MarkEmailReadOutlinedIcon />
              </ListItemIcon>
              <ListItemText>{item}</ListItemText>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {menuItems.map((item, index) => (
            <ListItem button key={item}>
              <ListItemIcon>
                <MarkEmailReadOutlinedIcon />
              </ListItemIcon>
              <ListItemText>{item}</ListItemText>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};
