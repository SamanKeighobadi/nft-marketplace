import React, { useState, useEffect } from "react";
// MainLayout
import MainLayout from "./components/layout/MainLayout";
// React Router DOM
import { Routes, Route } from "react-router-dom";
// Custom Components
import Home from "./pages/Home";
import CreateNFT from "./pages/CreateNFT";
import Purchases from "./pages/Purchases/Purchases";
import Lists from "./pages/nft-lists/Lists";
// Sweet alert2
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
// load web3.js and blockchain 
import Web3 from "web3";
import MarketPlace from "./abis/MarketPlace.json";
import NFT from './abis/NFT.json'

const App = () => {
  const [account, setAccount] = useState("");
  const [loading, setLoading] = useState(true);
  const [nft, setNft] = useState({});
  const [marketplace, setMarketplace] = useState({});

  const Alert = withReactContent(Swal);



  const loadWeb3 = async () => {
    try {
      if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
      } else if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider);
      } else {
        setLoading(true);
        Alert.fire({
          icon:'info',
          title:"Install metamask"
        })
      }
    } catch (err) {
      console.log(err);
    }
  };

  

  const loadBlockchain = async () => {
    try {
      const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
      const accounts = await web3.eth.getAccounts();
      setAccount(accounts[0]);

      const networkId = await web3.eth.net.getId();
      const networkData = await MarketPlace.networks[networkId];

      const marketplace = new web3.eth.Contract(MarketPlace.abi,networkData.address)
      const nft = new web3.eth.Contract(NFT.abi,NFT.networks[networkId])
    
      setMarketplace(marketplace)
      setNft(nft);

      const saman = await marketplace.methods.itemCount().call();
      console.log(saman);



      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };


  useEffect(() => {
    loadWeb3();
    loadBlockchain();
  }, []);

  return (
    <MainLayout account={account}>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateNFT />} />
          <Route path="/purchases" element={<Purchases />} />
          <Route path="/items-list" element={<Lists />} />
        </Routes>
      )}
    </MainLayout>
  );
};

export default App;
