import Button from "../../components/ui/Button";
import { ICategory, IProduct } from "../../common/types";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";
import { ToastContainer, toast } from "react-toastify";
import { addCategory } from "../../services/category";
import { schemaCategory } from "../../common/schema";
import { useState } from "react";
import Error from "../../components/Error";
import { inputStyle } from "../product/ProductForm";

const CategoryForm = () => {
  const [error, setError] = useState<string>("");
  const { handleSubmit, register } = useForm<IProduct>();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const createProduct = useMutation({
    mutationFn: (data: ICategory) => addCategory("/category", data),
    onSuccess: () => {
      queryClient.invalidateQueries(["CATEGORY_KEY"]);
      toast.success("Added successfully", {
        autoClose: 4000,
        theme: "colored",
      });
    },
  });

  const onSubmit = (data: ICategory) => {
    const { value, error } = schemaCategory.validate(data);
    if (error) {
      setError(error.message);
      return;
    }
    createProduct.mutate(value);
    navigate("/admin/category");
  };

  return (
    <div className="mt-3 relative mx-14">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={`max-w-[80%] ${error && "mb-5"} `}>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <input
            className={`${inputStyle.inputCl} ${
              error && "border border-red-700"
            }`}
            type="text"
            placeholder="Enter your username"
            {...register("name")}
          />
          {error && <Error error={error} />}
        </div>
        <div className="">
          <Button name="Save" />
        </div>
        <ToastContainer />
      </form>
    </div>
  );
};

export default CategoryForm;
