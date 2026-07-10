// Orders list view - shows buy/sell orders fetched from backend

import { useState, useEffect } from "react";

import axios from "axios";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/orders")
      .then((res) => setOrders(res.data || []))
      .catch((err) => console.error("Error fetching orders", err));
  }, []);

  return (
    <>
      <h3 className="title">Orders ({orders.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Type</th>
            <th>Qty.</th>
            <th>Price</th>
          </tr>

          {orders.map((o, idx) => (
            <tr key={o._id || idx}>
              <td>{o.name}</td>
              <td className={o.mode === "BUY" ? "profit" : "loss"}>{o.mode}</td>
              <td>{o.qty}</td>
              <td>₹{Number(o.price).toFixed(2)}</td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
}