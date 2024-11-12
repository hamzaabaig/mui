import React from "react";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import data from "./data";
import style from "./style";

const Sidebar = () => {
  return (
    <Drawer sx={style.wrapper} variant="permanent">
      <Toolbar sx={{ paddingLeft: "16px !important" }}>
        <Typography variant="h6" sx={style.logo}>
          <span>M</span>ergestack
        </Typography>
      </Toolbar>

      {data.map((section) => (
        <>
          <Typography variant="subtitle1" sx={{ paddingLeft: "16px" }}>
            {section.heading}
          </Typography>
          <List>
            {section.items.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton
                  sx={{
                    "&:hover": {
                      backgroundColor: "primary.light",
                    },
                  }}
                >
                  <ListItemIcon sx={{ color: "inherit" }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </>
      ))}
    </Drawer>
  );
};

export default Sidebar;
