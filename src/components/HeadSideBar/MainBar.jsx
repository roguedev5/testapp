import React, { useState } from "react";
import Header from "./HeadBar";
import Sidebar from "./SideBar";

export default function MainBar() {
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <React.Fragment>
      <Header toggleDrawer={toggleDrawer} open={open} />
      <Sidebar toggleDrawer={toggleDrawer} open={open} />
    </React.Fragment>
  );
}
