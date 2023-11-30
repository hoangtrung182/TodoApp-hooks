import { AxiosResponse } from "axios";
import * as config from "../core/config";
import { ITodo } from "../common/types";

const { instance } = config.setInstance("http://localhost:3000");

export const getAllTodos = async (path: string) => {
  try {
    const res: AxiosResponse<ITodo[]> = await instance.get(path);
    return res.data || [];
  } catch (error: any) {
    console.log("FETCH_TODOS_ERROR", error.message);
  }
};

export const addTodo = async (path: string, todo: ITodo) => {
  try {
    await instance.post(path, todo);
  } catch (error: any) {
    console.log("ADD_TODO_ERROR", error);
  }
};

export const deleteTodo = async (path: string, id: number) => {
  try {
    await instance.delete(`${path}/${id}`);
  } catch (error) {
    console.log("DELETE_TODO_ERROR", error);
  }
};
