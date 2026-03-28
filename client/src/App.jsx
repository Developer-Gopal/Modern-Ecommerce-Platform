import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import HomePage from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";

export default function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);

      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const handleRemove = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const handleQuantityChange = (id, qty) => {
    if (qty < 1) return;

    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: qty } : item)),
    );
  };

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route
        path="/product/:id"
        element={<ProductDetail onAddToCart={handleAddToCart} />}
      />
      <Route path="/products" element={<Products />} />

      <Route
        path="/cart"
        element={
          <Cart
            cart={cart}
            onRemove={handleRemove}
            onQuantityChange={handleQuantityChange}
          />
        }
      />
    </Routes>
  );
}
