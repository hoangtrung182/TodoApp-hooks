import React from "react";
import { useLocalStorage } from "../hooks/useStotage";
import { IProduct } from "../common/types";
import { ToastContainer, toast } from "react-toastify";
import { style } from "./manager/product/AdProductPage";
import CategoryItem from "../features/category/CategoryItem";
import { Link } from "react-router-dom";

const CartPage = () => {
  const [cart, setCart] = useLocalStorage("cart", []);

  const getTotalPrice = cart
    .map((item: IProduct) => item.price * item.quantity)
    .reduce((total: number, num: number) => total + num, 0);

  const removeToCart = (id: number) => {
    const index = cart.findIndex((item: IProduct) => item.id === id);

    if (index !== -1) {
      const updatedCart = [...cart];

      const cartItem = updatedCart[index];
      if (cartItem.quantity > 1) {
        cartItem.quantity--;
        toast.error("Decreased a quantity " + cartItem.quantity);
      } else {
        const confirm = window.confirm("Are you sure you want to remove");
        if (confirm) {
          updatedCart.splice(index, 1);
          toast.error("Removed an item");
        }
      }
      setCart(updatedCart);
    }
  };

  return (
    <div className="max-w-[1000px] mx-auto bg-white rounded-md h-screen">
      <h1 className="text-center text-5xl font-bold">Cart of yours</h1>
      <div className="w-[700px] bg-gray-200 rounded mx-auto mt-5 overflow-y-scroll">
        {cart.length > 0 ? (
          <div>
            <div className="">
              {cart.map((c: IProduct) => {
                return (
                  <li
                    key={c.id}
                    className="flex justify-between text-red-800 mt-3 p-2 mx-3 text-xl"
                  >
                    <span className="w-[400px]">{c.name}</span>
                    <span>{c.price}</span>
                    <span>x {c.quantity}</span>
                    <button
                      onClick={() => removeToCart(c.id!)}
                      className="px-3 py-1 w-[60px] rounded-md bg-red-400 hover:bg-red-200 text-black"
                    >
                      -
                    </button>
                  </li>
                );
              })}
              <p className="flex justify-between text-green-600 mt-3 p-2 mx-3 text-2xl">
                Total:
                <span className="mr-4"> $ {getTotalPrice}</span>
              </p>
            </div>
            <div className="flex justify-between mx-4 my-2">
              <span className="">{cart.length} items in the bag</span>

              <button
                onClick={() => setCart([])}
                className="bg-blue-500 text-white px-6 py-2 rounded"
              >
                Checkout
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center">
            <p className="text-3xl flex justify-center italic items-center">
              :(( Nothing here
            </p>
            <button className="bg-blue-500 w-[120px] text-white px-6 mt-4 py-2 rounded">
              <Link to="/">Go Home</Link>
            </button>
          </div>
        )}
        <ToastContainer />
      </div>
    </div>
  );
};

export default CartPage;
