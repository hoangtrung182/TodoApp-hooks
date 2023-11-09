import { useState } from "react";
import axios from 'axios';
import { ITodo } from "../components/ListTodo";

export const useFetch = (url: string) => {
    const [data, setData] = useState<ITodo[]>([]);
    const [error, setError] = useState<string>('');

    const getData = async () => {
        try {
            const res = await axios.get(url);
            setData(res.data);
        } catch (error: any) {
            setError(error.message)
        }
    }
    getData();

    return {
        data, error, getData
    }
}