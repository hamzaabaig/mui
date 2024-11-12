import React from "react";
import Box from "@mui/material/Box";
import Sidebar from "../common/sidebar/Sidebar";
import Topbar from "../common/topbar/Topbar";
import Dashboard from "../../pages/dashboard/Dashboard";

const Layout = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Topbar />
      <Sidebar />
      <Dashboard />
    </Box>
  );
};

export default Layout;
