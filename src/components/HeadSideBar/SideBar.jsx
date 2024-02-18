import React from "react";
import { IconButton, Toolbar } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Drawer, MainListItems } from "./Common";

export default function Sidebar({ open, toggleDrawer }) {
  return (
    <Drawer variant="permanent" open={open}>
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          px: [1],
        }}
      >
        {open && "Info Tech"}
        <IconButton onClick={toggleDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <MainListItems />
    </Drawer>
  );
}
