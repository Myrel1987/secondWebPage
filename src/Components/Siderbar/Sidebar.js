import React from "react";
import { SidebarStyled } from "./Sidebar.style";
import Navigation from "../Navigation/Navigation";

function Sidebar({ navToggle }) {
  return (
    <SidebarStyled className={`${navToggle ? "nav-toggle" : ""}`}>
      <Navigation />
    </SidebarStyled>
  );
}

export default Sidebar;
