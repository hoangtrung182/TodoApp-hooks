import React from "react";
import { IProduct } from "../../common/types";
import { inputStyle } from "../../features/product/ProductForm";

type Props = {
  placeholder: string;
  rest: () => void;
};
const Input = ({ placeholder }) => {
  return (
    <input
      className={inputStyle.inputCl}
      type="text"
      placeholder="Product's quantity"
    />
  );
};

export default Input;
