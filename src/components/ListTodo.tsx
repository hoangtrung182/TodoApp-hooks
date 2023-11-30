import { useContext, useEffect, useState } from "react";
import "../assets/style.css";
import {
  ADD_TODO,
  DELETE_COMPLETE,
  GET_TODOS,
  REMOVE_TODO,
  TOGGLE_ALL,
  TOGGLE_ONE,
  TodoContext,
} from "../context/todo";
import axios from "axios";
import { useQuery } from "react-query";
import { addTodo, deleteTodo, getAllTodos } from "../services/todos";
import { ITodo } from "../common/types";

const ListTodo = () => {
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { state, dispatch } = useContext(TodoContext);

  const query = useQuery({
    queryKey: ["getTodos"],
    queryFn: async () => {
      setLoading(true);
      const res = await getAllTodos("/todos");
      dispatch({ type: GET_TODOS, payload: res });
      setLoading(false);
      return res;
    },
  });

  const remaining = state.todos.filter((todo: ITodo) => {
    return todo.isComplete === false;
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const newTodo = {
      id: Date.now(),
      title,
      isComplete: false,
    };

    try {
      await addTodo("/todos/", newTodo);
      dispatch({ type: ADD_TODO, payload: newTodo });
      setTitle("");
    } catch (error: any) {
      setError(error.message);
    }
  };

  const removeItem = async (id: number) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this item?"
    );
    if (!confirm) return;
    try {
      await deleteTodo("/todos", id);
      dispatch({ type: REMOVE_TODO, payload: id });
    } catch (error: any) {
      setError(error.message);
    }
  };

  const changeState = async (id: number, isComplete: boolean) => {
    const changedState = state.todos.map((todo: ITodo) => {
      return todo.id === id
        ? { ...todo, isComplete: !isComplete }
        : { ...todo };
    });
    const thisItem = state.todos.find((todo: ITodo) => {
      return todo.id === id;
    });

    const newState = { ...thisItem, isComplete: !isComplete };
    try {
      await axios.put(`http://localhost:3000/todos/${id}`, newState);
      dispatch({ type: TOGGLE_ONE, payload: changedState });
    } catch (error: any) {
      setError(error.message);
    }
  };

  const toggleAll = async (e: any) => {
    const newArr = state.todos.map((todo: ITodo) => ({
      ...todo,
      isComplete: e.target.checked,
    }));
    dispatch({ type: TOGGLE_ALL, payload: newArr });
  };

  const removeCompleted = () => {
    const newArr = state.todos.filter((todo: ITodo) => {
      return todo.isComplete !== true;
    });
    dispatch({ type: DELETE_COMPLETE, payload: newArr });
  };

  if (loading) {
    return <div className="">{loading && <h1>Loading....</h1>}</div>;
  }
  return (
    <div className="todoapp">
      {error.length > 0 && <p>{error}</p>}
      <header className="header">
        <h1>Todos</h1>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Add todo for ..."
            className="new-todo"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </form>
      </header>
      <section className="main">
        <input
          type="checkbox"
          id="toggle-all"
          checked={remaining.length === 0}
          onChange={toggleAll}
          className="toggle-all"
        />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {state.todos.map((todo: ITodo) => (
            <li className="todo" key={todo.id}>
              <div className="view">
                <input
                  type="checkbox"
                  onChange={() => changeState(todo.id, todo.isComplete)}
                  checked={todo.isComplete}
                  className="toggle"
                />
                <label htmlFor="">{todo.title}</label>
                <button
                  className="destroy"
                  onClick={() => removeItem(todo.id)}
                ></button>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <footer className="footer">
        <span className="todo-count">
          <strong>{remaining.length}</strong>
          <span>{remaining.length <= 1 ? " item" : " items"}</span>
        </span>
        <ul className="filters">
          <li>
            <a href="#/all">All</a>
          </li>
          <li>
            <a href="#/active">Active</a>
          </li>
          <li>
            <a href="#/completed">Completed</a>
          </li>
        </ul>
        {state.todos.length > remaining.length && (
          <button className="clear-completed" onClick={removeCompleted}>
            Clear complete
          </button>
        )}
      </footer>
    </div>
  );
};

export default ListTodo;
