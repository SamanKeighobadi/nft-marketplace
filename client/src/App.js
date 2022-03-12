import React from "react";
// MainLayout
import MainLayout from "./components/layout/MainLayout";
// React Router DOM
import { Routes, Route } from "react-router-dom";
// Custom Components
import Home from "./pages/Home";
import CreateNFT from "./pages/CreateNFT";
import Purchases from "./pages/Purchases/Purchases";
import Lists from "./pages/nft-lists/Lists";

const App = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateNFT />} />
        <Route path="/purchases" element={<Purchases />} />
        <Route path="/items-list" element={<Lists />} />
        
      </Routes>
    </MainLayout>
  );
};

export default App;
