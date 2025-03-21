import React, { useState } from "react";

import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow"; // ✅ Import Sell Window

const GeneralContext = React.createContext({
  openBuyWindow: (uid) => {},
  closeBuyWindow: () => {},
  openSellWindow: (uid) => {}, // ✅ Add Sell methods to context
  closeSellWindow: () => {},
});

export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [isSellWindowOpen, setIsSellWindowOpen] = useState(false); // ✅ New state for Sell Window
  const [selectedStockUID, setSelectedStockUID] = useState("");
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [user_info,setuser_info] = useState(null);



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
        openSellWindow: handleOpenSellWindow, // ✅ Added Sell to context
        closeSellWindow: handleCloseSellWindow,
        selectedMenu:selectedMenu,
        setSelectedMenu:setSelectedMenu,
        user_info:user_info,
        setuser_info:setuser_info,
      }}
    >
      {props.children}
      {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}
      {isSellWindowOpen && <SellActionWindow uid={selectedStockUID} />}{" "}
      {/* ✅ Render Sell Window */}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
