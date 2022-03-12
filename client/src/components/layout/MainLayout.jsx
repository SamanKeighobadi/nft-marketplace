import React from "react";
import AppNavbar from "../AppNavbar";

const MainLayout = ({ children }) => {
  return (
    <div>
      <AppNavbar />
      {children}
    </div>
  );
};

export default MainLayout;
