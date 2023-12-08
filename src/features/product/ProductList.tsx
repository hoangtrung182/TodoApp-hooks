import React from "react";
import { style } from "../../pages/manager/product/AdProductPage";
import { IProduct } from "../../common/types";
import useProductQuery from "../../hooks/useProductQuery";
import { ToastContainer, toast } from "react-toastify";
import ProductItem from "./ProductItem";
import { useProductMutations } from "../../hooks/useProductMutations";

const ProductList = () => {
  const { isLoading, data: products } = useProductQuery();
  const { onRemove } = useProductMutations({
    action: "DELETE",
    onSuccess: () => {
      toast.error("Deleted successfully", {
        autoClose: 4000,
        draggable: true,
        theme: "colored",
        pauseOnHover: true,
      });
    },
  });

  const handleDelete = (product: IProduct) => {
    const confirm = window.confirm("Are you sure you want to delete");
    if (confirm) {
      onRemove(product);
    }
  };
  return (
    <div>
      <table className="min-w-full divide-y divide-gray-200 mt-10 relative">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className={style.thClassName}>
              #
            </th>
            <th scope="col" className={style.thClassName}>
              Name
            </th>
            <th scope="col" className={style.thClassName}>
              Price
            </th>
            <th scope="col" className={style.thClassName}>
              Quantity
            </th>
            <th scope="col" className={style.thClassName}>
              Category
            </th>
            <th className={style.thClassName}></th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {products?.map((product: IProduct, index: any) => (
            <ProductItem
              key={index}
              product={product}
              index={index}
              handleDelete={handleDelete}
            />
          ))}
        </tbody>
      </table>
      <ToastContainer />
    </div>
  );
};

export default ProductList;
