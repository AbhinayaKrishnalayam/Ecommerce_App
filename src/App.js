import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";
import Home from "./pages/Home";
import SideBar from "./Components/SideBar";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </div>
      <SideBar />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
