import React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import style from "./style";
import Icons from "../../../assets/icons/Icons";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${theme.palette.secondary.main}`,
  backgroundColor: "transparent",
  marginRight: theme.spacing(2),
  marginLeft: theme.spacing(3),
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  },
}));

const Topbar = () => {
  return (
    <AppBar sx={style.wrapper}>
      <Toolbar>
        <IconButton disableRipple sx={style.toggleBtn}>
          <Icons.MenuIcon />
        </IconButton>
        <Search>
          <SearchIconWrapper>
            <Icons.SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase />
        </Search>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <IconButton
            size="large"
            aria-label="show new mails"
            color="inherit"
            disableRipple
            sx={style.actionButtonStyle}
          >
            <Badge>
              <Icons.GitHubIcon />
            </Badge>
          </IconButton>
          <IconButton
            size="large"
            color="inherit"
            disableRipple
            sx={style.actionButtonStyle}
          >
            <Badge badgeContent={17} color="error" sx={style.notificationBadge}>
              <Icons.NotificationsNoneOutlinedIcon />
            </Badge>
          </IconButton>
          <Button color="inherit" disableRipple sx={style.profileBtn}>
            <Avatar src="https://images.pexels.com/photos/2341350/pexels-photo-2341350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            john Doe
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
