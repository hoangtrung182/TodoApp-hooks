import { Link, useLocation, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useQuery, useQueryClient } from "react-query";
import { searchProducts } from "../services/product";
import { ICategory, IProduct } from "../common/types";
import SearchBar from "../components/SearchBar";
import { getCategories } from "../services/category";
import SortBar from "../components/SortBar";

const ProductPage = () => {
  const location = useLocation();
  const initalValue = new URLSearchParams(location.search).get("q");
  const { id } = useParams();
  const queryClient = useQueryClient();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const { data: products, refetch } = useQuery({
    queryKey: ["PRODUCTS_KEY"],
    queryFn: () => searchProducts("/products", initalValue!),
    // staleTime: 30000,
  });

  const { data: categories } = useQuery({
    queryKey: ["CATEGORY_KEY"],
    queryFn: () => getCategories("category"),
  });

  useEffect(() => {
    return () => {
      queryClient.removeQueries("PRODUCTS_KEY");
    };
  }, [queryClient]);

  useEffect(() => {
    refetch();
  }, [initalValue, refetch]);

  const handleItemClick = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      <SearchBar />
      <div className="w-full flex py-3">
        <div className="w-1/5 bg-white mr-2 px-4">
          <div className="">
            <h2 className="text-xl font-bold my-3 border-b border-gray-300 py-2">
              <i className="fa-solid fa-bars text-md"></i> Tất cả danh mục
            </h2>
            <ul className="mx-5 space-y-3">
              {categories?.map((cate: ICategory, index: number) => (
                <li key={cate.id}>
                  <Link
                    className={`text-md text-black ${
                      activeIndex === index && "text-red-600"
                    } hover:text-red-600`}
                    to={`/products/${cate.name}`}
                    onClick={() => handleItemClick(index)}
                  >
                    {activeIndex === index ? (
                      <div className="ml-[-20px]">
                        <i className="fa-solid fa-caret-right"></i>
                        <span className="mx-2">{cate.name}</span>
                      </div>
                    ) : (
                      cate.name
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="border-b border-gray-300 my-5 py-4">
            <h2 className="text-xl font-bold my-3 border-b border-gray-300 py-2">
              <i className="fa-solid fa-filter text-md"></i> Bộ lọc tìm kiếm
            </h2>
            <div className="border-b border-gray-300 pb-4">
              <h3 className="text-md font-medium py-2">Nơi bán</h3>
              <ul className="mx-5 space-y-3">
                <li>
                  <input type="checkbox" /> Hà Nội
                </li>
                <li>
                  <input type="checkbox" /> Hồ Chí Minh
                </li>
                <li>
                  <input type="checkbox" /> Đà Nẵng
                </li>
                <span className="m-2 block">
                  Thêm <i className="fa-solid fa-caret-down"></i>
                </span>
              </ul>
            </div>
            <div className="border-b border-gray-300 pb-4">
              <h3 className="text-md font-medium my-3">Đơn vị Vận chuyển</h3>
              <ul className="mx-5 space-y-3">
                <li>
                  <input type="checkbox" /> Nhanh
                </li>
                <li>
                  <input type="checkbox" /> Hoả tốc
                </li>
                <li>
                  <input type="checkbox" /> Tiết kiệm
                </li>
              </ul>
            </div>
            <div className="border-b border-gray-300 pb-4">
              <h3 className="text-md font-medium my-3">Dịch vụ & khuyến mãi</h3>
              <ul className="mx-5 space-y-3">
                <li>
                  <input type="checkbox" /> Voucher extra
                </li>
                <li>
                  <input type="checkbox" /> Đang giảm giá
                </li>
                <li>
                  <input type="checkbox" /> Gì cũng rẻ
                </li>
                <li>
                  <input type="checkbox" /> Hàng có sẵn
                </li>
                <span className="m-2 block">
                  Thêm <i className="fa-solid fa-caret-down"></i>
                </span>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-4/5 bg-white">
          <SortBar />
          <Outlet />
          {initalValue ? (
            <div className="flex flex-wrap justify-start items-center bg-white mt-3 px-4 rounded ">
              {products?.map((product: IProduct) => {
                return (
                  <Link to={`/${product.id}`} key={product.id}>
                    <div className="m-2 border border-gray-500 mx-2">
                      <div className="">
                        <img
                          src={product.image}
                          alt=""
                          className="w-[200px] h-[250px] object-cover"
                        />
                      </div>
                      <div className="p-2">
                        <p className="text-xl text-gray-700">{product.name}</p>
                        <span className="text-red-400">$ {product.price}</span>
                      </div>
                      <div className=""></div>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
