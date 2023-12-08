import { Link, useParams } from "react-router-dom";
import React from "react";
import useProductQuery from "../hooks/useProductQuery";
import { IProduct } from "../common/types";

const ProductWithId = () => {
  const { id } = useParams();
  const { data: products } = useProductQuery();

  const itemsWithId = products?.filter(
    (item: IProduct) => item.category.toLowerCase() === id?.toLowerCase()
  );

  return (
    <div>
      {products && (
        <div className="bg-white mt-3">
          <ul className="flex justify-start items-center">
            {itemsWithId?.map((item: IProduct) => {
              return (
                <Link to={`/${item.id}`} key={item.id}>
                  <div className="m-2 border border-gray-500">
                    <div className="">
                      <img
                        src={item.image}
                        alt=""
                        className="w-[200px] h-[250px] object-cover"
                      />
                    </div>
                    <div className="p-2">
                      <p className="text-xl text-gray-700">{item.name}</p>
                      <span className="text-red-400">$ {item.price}</span>
                    </div>
                    <div className=""></div>
                  </div>
                </Link>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProductWithId;
