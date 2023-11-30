import React from "react";
import { IProduct } from "../../common/types";
import { style } from "../../pages/manager/product/AdProductPage";
import Button from "../../components/ui/Button";

type Props = {
  product: IProduct;
  index: number;
  handleDelete: (product: IProduct) => void;
};

const ProductItem = ({ product, index, handleDelete }: Props) => {
  return (
    <tr key={product.id} className="odd:bg-white even:bg-slate-100">
      <td className={style.tdClassName}>{index + 1}</td>
      <td className={style.tdClassName}>{product.name}</td>
      <td className={style.tdClassName}>{product.price}</td>
      <td className={style.tdClassName}>{product.quantity}</td>
      <td className={style.tdClassName}>{product.category}</td>
      <td>
        <div className="" onClick={() => handleDelete(product)}>
          <Button name="Remove" />
        </div>
      </td>
    </tr>
  );
};

export default ProductItem;
