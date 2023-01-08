import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ProductProvider from "./Contexts/ProductContext";
import SidebarProvider from "./Contexts/SidebarContext";
import CartProvider from "./Contexts/CartContexts";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SidebarProvider>
    <ProductProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ProductProvider>
  </SidebarProvider>
);
