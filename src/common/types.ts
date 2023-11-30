export interface ITodo {
  id: number;
  title: string;
  isComplete: boolean;
}

export interface IProduct {
  id?: number;
  name: string;
  price: number;
  quantity: number;
  category: string;
}

export interface ICategory {
  id?: number;
  name: string;
}

export interface IUser {
  id?: number;
  email: string;
  // username: string;
  password: string;
  // status?: string;
  // role?: string;
}
