import { IProduct } from "../common/types";
import * as config from "../core/config";

const { instance } = config.setInstance("http://localhost:3000/");

export const getProducts = async (path: string) => {
  try {
    const res = await instance.get(path);
    return res.data || [];
  } catch (error) {
    console.log("FETCH_PRODUCTS_ERRO", error);
  }
};

export const getProduct = async (path: string, id: number) => {
  try {
    const res = await instance.get(`${path}/${id}`);
    return res.data || {};
  } catch (error) {
    console.log("FETCH_PRODUCT_ERRO", error);
  }
};
export const addProduct = async (path: string, product: IProduct) => {
  try {
    await instance.post(path, product);
  } catch (error) {
    console.log("FETCH_PRODUCTS_ERRO", error);
  }
};

export const deleteProduct = async (path: string, id: number) => {
  try {
    await instance.delete(`${path}/${id}`);
  } catch (error) {
    console.log("FETCH_PRODUCTS", error);
  }
};
