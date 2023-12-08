import React, { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import { getCategory, updateCategory } from "../../services/category";
import { ToastContainer, toast } from "react-toastify";
import Button from "../../components/ui/Button";
import { useNavigate } from "react-router-dom";
import { ICategory, IProduct } from "../../common/types";
import { useForm } from "react-hook-form";
import { schemaCategory } from "../../common/schema";
import { inputStyle } from "../../common/style";
import Error from "../../components/Error";

const CategoryEdit = () => {
  const { id } = useParams();
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const { handleSubmit, register, setValue } = useForm<ICategory>();
  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: ["CATEGORY_KEY"],
    queryFn: () => getCategory("category", id!),
  });

  const editProduct = useMutation({
    mutationFn: (data: ICategory) => updateCategory("category", data),
    onSuccess: () => {
      queryClient.invalidateQueries(["CATEGORY_KEY"]);
      toast.success("Edited successfully", {
        autoClose: 3000,
        theme: "colored",
      });
    },
  });

  //   console.log(data);

  useEffect(() => {
    if (data) {
      setValue("name", data.name);
    }
  }, [data]);

  const onSubmit = (values: ICategory) => {
    const { value, error } = schemaCategory.validate(values);
    if (error) {
      setError(error.message);
      return;
    }
    const newData = { id: +id!, ...value };
    editProduct.mutate(newData);
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

export default CategoryEdit;
