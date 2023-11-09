import { createContext, useReducer } from "react";
import { ITodo } from "../components/ListTodo";

export const TodoContext = createContext([] as any);

const initialState = {
    todos: []
};

export const GET_TODOS = 'get_todos';
export const ADD_TODO = 'add_todo';
export const REMOVE_TODO = 'remove_todo';
export const TOGGLE_ALL = 'toggle_all';
export const TOGGLE_ONE = 'toggle_one';


const reducer = (state: any, action: any) => {
    switch(action.type) {
        case GET_TODOS: 
            return {
                ...state,
                todos: action.payload
            }
        case ADD_TODO: 
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter((todo: ITodo) => todo.id !== action.payload)
            }
        case TOGGLE_ALL: 
            return {
                ...state,
                todos: action.payload
            }
        case TOGGLE_ONE: 
            return {
                ...state,
                todos: action.payload
            }
        default: 
            return state
    }
}

const TodosContextProvider = ({ children }: any) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const value = {
        state, dispatch
    };

    return (
        <TodoContext.Provider value={value}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodosContextProvider;