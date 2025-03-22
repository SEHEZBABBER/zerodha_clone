import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Order.css";
import GeneralContext from "./GeneralContext";

const Orders = () => {
  const [Order, setOrder] = useState([]);
  const {user_info} = useContext(GeneralContext);
  // Fetch order data from backend
  useEffect(() => {
    if(!user_info)window.location.href = '/error';
    axios.get("http://localhost:3002/allorders",{withCredentials:true}).then((res) => {
      setOrder(res.data);
    });
  },);

  return (
    <div className="orders-container">
      {Order.length === 0 ? (
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
          <Link to={"/"} className="btn btn-primary">
            Get started
          </Link>
        </div>
      ) : (
        <div className="orders-list">
          <h3 className="orders-title">Your Orders ({Order.length})</h3>
          <table className="orders-table">
            <thead>
              <tr>
                <th>Stock</th>
                <th>Type</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {Order.map((order, index) => (
                <tr key={index}>
                  <td>{order.name}</td>
                  <td className={order.mode === "BUY" ? "buy" : "sell"}>
                    {order.mode}
                  </td>
                  <td>{order.qty || "-"}</td>
                  <td>
                    {order.price !== undefined
                      ? order.price.toFixed(2)
                      : "-"}
                  </td>
                  <td>
                    <span className="status completed">Completed</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Orders;
