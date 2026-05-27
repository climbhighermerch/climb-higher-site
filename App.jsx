import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingBag, Menu, Flame } from "lucide-react";

export default function App() {
  const storeLink = "https://etees.co.uk/climb-higher";

  const products = [
    {
      name: "Signature Heavyweight Hoodie",
      price: "£50",
      tag: "Premium Unisex",
    },
    {
      name: "Heavyweight T-Shirt",
      price: "£20",
      tag: "Everyday Essential",
    },
    {
      name: "Higher State Cap",
      price: "£19.99",
      tag: "Streetwear Fit",
    },
  ];

  return (
    <div style={{ background: "black", color: "white", minHeight: "100vh", fontFamily: "Arial" }}>

      <div style={{ display: "flex", justifyContent: "space-between", padding: 20, borderBottom: "1px solid #222" }}>
        <h1>CLIMB HIGHER</h1>
        <ShoppingBag />
      </div>

      <div style={{ textAlign: "center", padding: 60 }}>
        <div style={{ color: "red" }}>
          <Flame /> Drop Live Now
        </div>

        <h2 style={{ fontSize: 50 }}>Climb Higher</h2>

        <p>Premium streetwear built for those who refuse to stay grounded.</p>

        <button
          onClick={() => window.open(storeLink, "_blank")}
          style={{ marginTop: 20, padding: 15, background: "white", color: "black", border: "none", cursor: "pointer" }}
        >
          Shop Drop
        </button>
      </div>

      <div style={{ display: "grid", gap: 20, gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", padding: 20 }}>
        {products.map((p, i) => (
          <div key={i} style={{ border: "1px solid #333", padding: 20 }}>
            <h3>{p.name}</h3>
            <p>{p.tag}</p>
            <strong>{p.price}</strong>
            <br /><br />
            <button onClick={() => window.open(storeLink, "_blank")}>
              Secure Checkout
            </button>
          </div>
        ))}
      </div>

      <div style={{ textAlign: "center", padding: 20, color: "#666" }}>
        © {new Date().getFullYear()} Climb Higher
      </div>
    </div>
  );
}
