import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductPage from "../../pages/ProductPage";

const ProductRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<div>HomePage </div>} />
        <Route path="products" element={<ProductPage />} />
      </Routes>
    </div>
  );
};

export default ProductRouter;
