export interface ITodo {
  id: number;
  title: string;
  isComplete: boolean;
}

export interface ICategory {
  id?: number;
  name: string;
}

export interface IUser {
  id?: number;
  email: string;
  password: string;
  username?: string;
  roles?: string;
  permission?: Array<string>;
  status?: string;
}

export interface IProduct {
  id?: number;
  name: string;
  price: number;
  quantity: number;
  category: string;
  image?: string;
  description?: string;
}
