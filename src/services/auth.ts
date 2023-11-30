import { IUser } from "../common/types";
import * as config from "../core/config";

const { instance } = config.setInstance("http://localhost:3000");

export const signIn = async (path: string, user: IUser) => {
  try {
    const res = await instance.post(path, user);
    const data = await res.data;
    return data;
  } catch (error) {
    console.log("POST_USER_ERRO_LOGIN", error);
  }
};

export const signUp = async (path: string, user: IUser) => {
  try {
    const res = await instance.post(path, user);
    return res.data;
  } catch (error) {
    console.log("POST_USER_ERRO", error);
  }
};

export const getUsers = async (path: string) => {
  try {
    const res = await instance.get(path);
    return res.data || [];
  } catch (error) {
    console.log("POST_USER_ERRO", error);
  }
};
