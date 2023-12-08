import Button from "../../components/ui/Button";
import { ICategory, IProduct } from "../../common/types";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { getCategories } from "../../services/category";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useProductMutations } from "../../hooks/useProductMutations";
import Error from "../../components/Error";
import { inputStyle } from "../../common/style";

const ProductEdit = () => {
  const navigate = useNavigate();

  const { data: categoies } = useQuery({
    queryKey: ["CATEGORY_KEY"],
    queryFn: () => getCategories("category"),
  });

  const {
    onSubmit,
    form: {
      handleSubmit,
      register,
      formState: { errors },
    },
  } = useProductMutations({
    action: "EDIT",
    onSuccess: () => {
      toast.success("Added successfully", {
        autoClose: 3000,
        pauseOnHover: true,
        theme: "colored",
      });
    },
  });

  const onHanleSubmit = (data: IProduct) => {
    onSubmit(data);
    navigate("/admin/products");
  };

  return (
    <div className="mt-3 relative mx-10">
      <form onSubmit={handleSubmit(onHanleSubmit)}>
        <div className="max-w-[80%] ">
          <label className={inputStyle.labelCl}>Name</label>
          <input
            className={`${inputStyle.inputCl} ${
              errors.name && "border border-red-700"
            }`}
            type="text"
            placeholder="Enter your username"
            {...register("name")}
          />
          {errors.name && <Error error={errors.name.message!} />}
        </div>
        <div className="max-w-[80%] mt-3">
          <label className={inputStyle.labelCl}>Price</label>
          <input
            className={`${inputStyle.inputCl} ${
              errors.price && "border border-red-700"
            }`}
            type="number"
            placeholder="Product's price"
            {...register("price")}
          />
          {errors.price && <Error error={errors.price.message!} />}
        </div>
        <div className="max-w-[80%]  mt-3">
          <label className={inputStyle.labelCl}>Quantity</label>
          <input
            className={`${inputStyle.inputCl} ${
              errors.quantity && "border border-red-700"
            }`}
            type="number"
            placeholder="Product's quantity"
            {...register("quantity")}
          />
          {errors.quantity && <Error error={errors.quantity.message!} />}
        </div>
        <div className="max-w-[80%]  mt-3">
          <label className={inputStyle.labelCl}>Category</label>
          <select
            className={`${inputStyle.inputCl} ${
              errors.category && "border border-red-700"
            }`}
            {...register("category")}
          >
            <option value="" hidden>
              --Please choose a category---
            </option>
            {categoies?.map((c: ICategory) => (
              <option key={c.id} value={c.name}>
                {c.name}
              </option>
            ))}
          </select>
          {errors.category && <Error error={errors.category.message!} />}
        </div>
        <div className="mt-3">
          <Button name="Save" />
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default ProductEdit;
