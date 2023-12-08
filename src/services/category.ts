import { ICategory, IProduct } from "../common/types";
import * as config from "../core/config";

const { instance } = config.setInstance("http://localhost:3000/");

export const getCategories = async (path: string) => {
  try {
    const res = await instance.get(path);
    return res.data || [];
  } catch (error) {
    console.log("FETCH_PRODUCTS_ERRO", error);
  }
};

export const getCategory = async (path: string, id: string) => {
  try {
    const res = await instance.get(`${path}/${id}`);
    return res.data || {};
  } catch (error) {
    console.log("FETCH_PRODUCT_ERRO", error);
  }
};
export const addCategory = async (path: string, category: ICategory) => {
  try {
    await instance.post(path, category);
  } catch (error) {
    console.log("FETCH_PRODUCTS_ERRO", error);
  }
};

export const updateCategory = async (path: string, category: ICategory) => {
  try {
    await instance.patch(`${path}/${category.id}`, category);
  } catch (error) {
    console.log("FETCH_PRODUCTS_ERRO", error);
  }
};

export const deleteCategory = async (path: string, id: number) => {
  try {
    await instance.delete(`${path}/${id}`);
  } catch (error) {
    console.log("FETCH_PRODUCTS", error);
  }
};
