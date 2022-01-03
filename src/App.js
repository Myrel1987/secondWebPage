import React from "react";

import { useState } from "react";
import Sidebar from "./Components/Siderbar/Sidebar";
import MainContentStyled from "./Components/MainContentStyled";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage.component";
import AboutPage from "./Pages/AboutPage/AboutPage.component";
import ResumePage from "./Pages/ResumePage/ResumePage.component";
import ContactPage from "./Pages/ContactPage/ContactPage.component";
import { IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

function App() {
  const [navToggle, setNavToggle] = useState(false);

  return (
    <div className="App">
      <div className="ham-burger-menu">
        <IconButton onClick={() => setNavToggle(!navToggle)}>
          <MenuIcon />
        </IconButton>
      </div>

      <Sidebar navToggle={navToggle} />
      <div></div>
      <MainContentStyled>
        <Routes>
          <Route path="*" element={<HomePage />} />

          <Route path="/about" element={<AboutPage />} />

          <Route path="/resume" element={<ResumePage />} />

          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </MainContentStyled>
    </div>
  );
}

export default App;
