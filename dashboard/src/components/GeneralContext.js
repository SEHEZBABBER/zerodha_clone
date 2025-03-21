import React, { useState, useEffect } from "react";
import axios from "axios";
import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow"; // ✅ Import Sell Window

const GeneralContext = React.createContext({
  openBuyWindow: (uid) => {},
  closeBuyWindow: () => {},
  openSellWindow: (uid) => {},
  closeSellWindow: () => {},
  selectedMenu: 0,
  setSelectedMenu: () => {},
  user_info: null,
  setuser_info: () => {},
});

export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [isSellWindowOpen, setIsSellWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [user_info, setuser_info] = useState(null);

  // ✅ Fetch user data on page load/refresh
  useEffect(() => {
    axios
      .get("http://localhost:3002/userdata", { withCredentials: true })
      .then((res) => {
        setuser_info(res.data); // ✅ Set user info after fetching
      })
      .catch((err) => {
        console.error("Error fetching user data:", err);
        setuser_info(null); // Reset if error or not authorized
      });
  }, []); // ✅ Only run on page load

  // ✅ Handle opening Buy Window
  const handleOpenBuyWindow = (uid) => {
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);
  };

  // ✅ Handle closing Buy Window
  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
  };

  // ✅ Handle opening Sell Window
  const handleOpenSellWindow = (uid) => {
    setIsSellWindowOpen(true);
    setSelectedStockUID(uid);
  };

  // ✅ Handle closing Sell Window
  const handleCloseSellWindow = () => {
    setIsSellWindowOpen(false);
    setSelectedStockUID("");
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
        openSellWindow: handleOpenSellWindow,
        closeSellWindow: handleCloseSellWindow,
        selectedMenu: selectedMenu,
        setSelectedMenu: setSelectedMenu,
        user_info: user_info,
        setuser_info: setuser_info,
      }}
    >
      {props.children}
      {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}
      {isSellWindowOpen && <SellActionWindow uid={selectedStockUID} />}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
