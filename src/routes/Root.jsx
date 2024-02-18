import { Outlet } from "react-router-dom";
import { Box, Toolbar } from "@mui/material";
import Main from "../components/HeadSideBar/MainBar";

export default function Root() {
  return (
    <Box sx={{ display: "flex" }}>
      <Main />
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}
