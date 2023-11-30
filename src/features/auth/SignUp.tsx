import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer } from "react-toastify";
import { IUser } from "../../common/types";
import { useMutation } from "react-query";
import { signUp } from "../../services/auth";
import { Link } from "react-router-dom";

const SignUp = () => {
  const { handleSubmit, register } = useForm<IUser>();

  const createUser = useMutation({
    mutationFn: (data: IUser) => signUp("/register", data),
  });

  const onHandleSubmit = (value: IUser) => {
    createUser.mutate(value);
  };

  return (
    <form
      onSubmit={handleSubmit(onHandleSubmit)}
      className=" bg-slate-400 shadow-md w-[50%] rounded px-8 pt-6 pb-8 mb-4"
    >
      <h1 className="text-center text-4xl italic text-shadow font-bold text-white">
        Đăng ký
      </h1>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="text"
          placeholder="Enter your email"
          {...register("email")}
        />
      </div>
      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="Enter your password"
          {...register("password")}
        />
      </div>
      <Link to="/auth/login" className="my-3">
        Đăng nhập{" "}
        <span className="text-red-600 underline cursor-pointer">tại đây</span>
      </Link>
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Sign Up
        </button>
      </div>
      <ToastContainer />
    </form>
  );
};

export default SignUp;
