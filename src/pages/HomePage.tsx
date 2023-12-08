import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ICategory, IProduct } from "../common/types";
import { useQuery } from "react-query";
import { getCategories } from "../services/category";
import SearchBar from "../components/SearchBar";

const HomePage = () => {
  const extraServices = [
    { id: 1, name: "Khung giờ săn sale" },
    { id: 2, name: "Miễn phí ship - Có shoppee" },
    { id: 3, name: "Voucher giảm Đến 500000Đ" },
    { id: 4, name: "Shoppee siêu rẻ" },
    { id: 5, name: "Mã giảm giá" },
    { id: 6, name: "Hàng hiệu Outlet Giảm giá" },
    { id: 7, name: "Nạp thẻ, dịch vụ" },
    { id: 8, name: "Hàng quốc tế" },
    { id: 9, name: "Bắt trend - Giá sốc" },
  ];
  const { data: categories } = useQuery({
    queryKey: ["CATEGORY_KEY"],
    queryFn: () => getCategories("category"),
  });

  return (
    <div className="min-w-full h-screen relative">
      <SearchBar />
      <div className="bg-white rounded">
        <div className="flex justify-evenly text-center">
          {extraServices.map((item) => {
            return (
              <Link to="/" key={item.id}>
                <div className="w-[100px] mt-10 text-center flex flex-col items-center">
                  <div className="">
                    <img
                      src="http://picsum.photos/50/50"
                      className="rounded-md"
                      alt=""
                    />
                  </div>
                  <p className="mt-3">{item.name}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="bg-white rounded my-3 py-4">
        <h1 className="ml-10 font-bold text-xl text-gray-400">Danh mục</h1>
        <div className="flex justify-center text-center mt-3">
          {categories?.map((cate: ICategory) => {
            return (
              <Link
                key={cate.id}
                to={`/products/${cate.name}`}
                className="border border-gray-400 w-[170px] h-[200px]"
              >
                <div className="my-5 text-center flex flex-col items-center  ">
                  <img
                    src="http://picsum.photos/100/100"
                    className="rounded-[10%]"
                    alt=""
                  />
                </div>
                <p className="mt-3">{cate.name}</p>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="flash-sale bg-white rounded my-3 py-4">
        <h1>Flash sale</h1>
      </div>
    </div>
  );
};

export default HomePage;
