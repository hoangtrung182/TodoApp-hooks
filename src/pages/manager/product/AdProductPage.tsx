import { Link, Outlet } from "react-router-dom";
import Button from "../../../components/ui/Button";
import { IProduct } from "../../../common/types";
import useProductQuery from "../../../hooks/useProductQuery";
import { useState } from "react";
import ProductForm from "../../../features/product/ProductForm";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useProductMutations } from "../../../hooks/useProductMutations";

export const style = {
  thClassName:
    "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
  tdClassName: "px-6 py-4 whitespace-nowrap",
};

const AdProductPage = () => {
  return (
    <div className="relative bg-white h-full">
      <h1 className="text-center text-5xl font-bold text-blue-700 mb-4 shadow-sm">
        Management Product
      </h1>
      <div className="absolute top-[80px] right-[200px]">
        <Link to="/admin/products/add">
          <Button name="ADD" />
        </Link>
      </div>
      <div className="mt-[5rem] mx-20">
        <Outlet />
      </div>
    </div>
  );
};

export default AdProductPage;
