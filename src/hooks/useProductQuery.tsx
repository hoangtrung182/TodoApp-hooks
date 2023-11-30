import { useQuery } from "react-query";
import { getProduct, getProducts } from "../services/product";

const useProductQuery = (productId?: number) => {
  const { data, ...rest } = useQuery({
    queryKey: productId ? ["PRODUCTS_KEY", productId] : ["PRODUCTS_KEY"],
    queryFn: async () =>
      productId
        ? await getProduct("/products", productId)
        : await getProducts("/products"),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
  });
  return { data, ...rest };
};

export default useProductQuery;
