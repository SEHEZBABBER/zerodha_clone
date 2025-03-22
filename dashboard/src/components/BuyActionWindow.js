import React, { useState, useEffect, useContext } from "react";
import GeneralContext from "./GeneralContext";
import axios from "axios";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const { user_info, closeBuyWindow } = useContext(GeneralContext);

  // ✅ Check for authentication
  useEffect(() => {
    if (!user_info) {
      window.location.href = "/error"; // Redirect to error page if not authorized
    }
  }, [user_info]);

  if (!user_info) {
    return null; // Stop rendering if not authorized
  }

  // ✅ Handle buy click to post order
  const handleBuyClick = async () => {
    try {
      const newOrder = {
        user : user_info._id,
        name: uid,
        qty: stockQuantity,
        price: stockPrice,
        mode: "BUY",
      };

      // ✅ Post order with axios
      const res = await axios.post("http://localhost:3002/addorder", newOrder, {
        withCredentials: true,
      });

      if (res.status === 200 || res.status === 201) {
        alert("Order placed successfully!");
        closeBuyWindow(); // ✅ Close buy window after successful order
      }
    } catch (err) {
      console.error("Error placing order:", err);
      alert("Failed to place order. Please try again.");
    }
  };

  // ✅ Handle cancel click to close window
  const handleCancelClick = () => {
    closeBuyWindow(); // Close the buy window
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      {/* Header - Zerodha Style */}
      <div className="header">
        <h3>Buy Order</h3>
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
          <button className="btn btn-blue" onClick={handleBuyClick}>
            Buy
          </button>
          <button className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
