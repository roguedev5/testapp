import { Badge, Box, IconButton, Toolbar } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import { AppBar } from "./Common";

export default function Header({ open, toggleDrawer }) {
  return (
    <AppBar position="absolute" open={open}>
      <Toolbar
        sx={{
          pr: "24px",
          width: "100%",
          display: "flex",
          justifyContent: open ? "flex-end" : "space-between",
        }}
      >
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={() => toggleDrawer()}
          sx={{
            marginRight: "36px",
            ...(open && { display: "none" }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Box
          sx={{
            display: "flex",
            gap: "20px",
          }}
        >
          <IconButton color="inherit">
            <Badge badgeContent={2} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <Avatar alt="Info Tech" src="" />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
