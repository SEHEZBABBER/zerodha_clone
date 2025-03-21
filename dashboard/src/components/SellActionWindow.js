import React, { useState, useEffect, useContext } from "react";
import GeneralContext from "./GeneralContext";
import axios from "axios";
import "./BuyActionWindow.css"; // ✅ Reuse same CSS as BuyActionWindow

const SellActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const { user_info, closeSellWindow } = useContext(GeneralContext);

  // ✅ Check for authentication
  useEffect(() => {
    if (!user_info) {
      window.location.href = "/error"; // Redirect to error page if not authorized
    }
  }, [user_info]);

  if (!user_info) {
    return null; // Stop rendering if not authorized
  }

  // ✅ Handle sell click to post order
  const handleSellClick = async () => {
    try {
      const newOrder = {
        name: uid,
        qty: stockQuantity,
        price: stockPrice,
        mode: "SELL",
      };

      // ✅ Post order with axios
      const res = await axios.post("http://localhost:3002/addorder", newOrder, {
        withCredentials: true,
      });

      if (res.status === 200 || res.status === 201) {
        alert("Order placed successfully!");
        closeSellWindow(); // ✅ Close sell window after successful order
      }
    } catch (err) {
      console.error("Error placing order:", err);
      alert("Failed to place order. Please try again.");
    }
  };

  // ✅ Handle cancel click to close window
  const handleCancelClick = () => {
    closeSellWindow(); // Close the sell window
  };

  return (
    <div className="container" id="sell-window" draggable="true">
      {/* Header - Zerodha Style with RED for Sell */}
      <div className="header sell-header">
        <h3>Sell Order</h3>
        <button onClick={handleCancelClick}>✕</button>
      </div>

      {/* Order Form */}
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(parseInt(e.target.value))}
              value={stockQuantity}
              min="1"
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(parseFloat(e.target.value))}
              value={stockPrice}
              min="0.01"
            />
          </fieldset>
        </div>
      </div>

      {/* Buttons and Margin Info */}
      <div className="buttons">
        <span>Margin required: ₹{(stockQuantity * stockPrice).toFixed(2)}</span>
        <div className="btn-group">
          <button className="btn btn-red" onClick={handleSellClick}>
            Sell
          </button>
          <button className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;
