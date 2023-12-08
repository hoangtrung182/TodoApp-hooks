import React, { useState } from "react";
import { useLocalStorage } from "../hooks/useStotage";
import { IProduct } from "../common/types";
import { Link, useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [cart, setCart] = useLocalStorage("cart", []);
  const [searchValue, setSearchValue] = useState("");

  const navigate = useNavigate();
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    navigate(`/products?q=${searchValue}`);
  };
  return (
    <div className="flex justify-center items-center bg-white rounded mb-2 p-4">
      <div className="max-w-[1000px] w-full">
        <form
          onSubmit={handleSubmit}
          className="flex items-center justify-center border border-black rounded-md ml-5"
        >
          <input
            type="text"
            placeholder="Look up for something..."
            className="w-full outline-none px-2"
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button className="flex  items-center px-3 py-2  my-[2px] mr-2 rounded bg-orange-900 hover:bg-orange-700 text-white">
            <i className="fa-solid fa-magnifying-glass"></i>
            <span className="mx-2">Search</span>
          </button>
        </form>
      </div>
      <div className="ml-5">
        <h3 className="relative py-3 text-center w-[100px] border border-none text-white  bg-orange-900 rounded cursor-pointer hover:bg-orange-700">
          <span className="absolute top-0 right-[-10px] border border-black leading-[28px] bg-white text-black w-7 h-7 rounded-[50%]">
            {cart.length}
          </span>
          <Link to="/cart">
            <i className="fa-solid fa-cart-shopping"></i>
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default SearchBar;
