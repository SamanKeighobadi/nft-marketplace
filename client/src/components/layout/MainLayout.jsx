import React from "react";
import AppNavbar from "../AppNavbar";

const MainLayout = ({ children,account }) => {
  return (
    <div>
      <AppNavbar account={account} />
      {children}
    </div>
  );
};

export default MainLayout;
