import React from "react";
import { deleteCategory, getCategories } from "../../services/category";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { style } from "../../pages/manager/product/AdProductPage";
import Button from "../../components/ui/Button";
import { ToastContainer, toast } from "react-toastify";
import { ICategory } from "../../common/types";
import CategoryItem from "./CategoryItem";

const CategoryList = () => {
  const { isLoading, data: categoies } = useQuery({
    queryKey: ["CATEGORY_KEY"],
    queryFn: () => getCategories("/category"),
  });

  const queryClient = useQueryClient();
  const deleteCategoryMutation = useMutation({
    mutationFn: (id: number) => deleteCategory("/category", id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["CATEGORY_KEY"] });
    },
  });

  const handleDelete = (id: number) => {
    const confirm = window.confirm("Are you sure you want to delete");
    if (!confirm) return;
    deleteCategoryMutation.mutate(id);
    toast.error("Deleted successfully", {
      autoClose: 4000,
      pauseOnHover: true,
      theme: "colored",
    });
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
            <th className={style.thClassName}></th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {categoies?.map((category: ICategory, index: any) => (
            <CategoryItem
              key={index}
              category={category}
              index={index}
              handleDelete={handleDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryList;
