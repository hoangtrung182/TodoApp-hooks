import { useQuery } from "react-query";
import { getProduct, getProducts, searchProducts } from "../services/product";

const useProductQuery = (productId?: number, productSearch?: string) => {
  const { data, ...rest } = useQuery({
    queryKey: productId
      ? ["PRODUCTS_KEY", productId]
      : productSearch
      ? ["PRODUCTS_KEY", productSearch]
      : ["PRODUCTS_KEY"],
    queryFn: async () =>
      productId
        ? await getProduct("/products", productId)
        : productSearch
        ? await searchProducts("/products", productSearch)
        : await getProducts("/products"),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
  });
  return { data, ...rest };
};

export default useProductQuery;
