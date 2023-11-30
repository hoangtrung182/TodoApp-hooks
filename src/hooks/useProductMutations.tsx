import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { addProduct, deleteProduct } from "../services/product";
import { IProduct } from "../common/types";
import { joiResolver } from "@hookform/resolvers/joi";
import { schemaProduct } from "../common/schema";

type formInputType = {
  id?: number;
  name: string;
  price: number;
  quantity: number;
  category: string;
};

type useProductMutationProps = {
  action: "ADD" | "DELETE";
  defaultValues?: IProduct;
  onSuccess?: () => void;
};

export const useProductMutations = ({
  action,
  defaultValues = { name: "", price: 0, quantity: 0, category: "" },
  onSuccess,
}: useProductMutationProps) => {
  const queryClient = useQueryClient();
  const { mutate, ...rest } = useMutation({
    mutationFn: async (product: IProduct) => {
      switch (action) {
        case "ADD":
          return await addProduct("/products", product);
        case "DELETE":
          return await deleteProduct("/products/", product.id!);
        default:
          return null;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries("PRODUCTS_KEY");
      onSuccess && onSuccess();
    },
  });

  const form = useForm<formInputType>({
    resolver: joiResolver(schemaProduct),
    defaultValues,
  });
  const onSubmit: SubmitHandler<formInputType> = (values) => {
    mutate(values);
  };

  const onRemove = (product: IProduct) => {
    mutate(product);
  };
  return {
    form,
    onSubmit,
    onRemove,
    ...rest,
  };
};
