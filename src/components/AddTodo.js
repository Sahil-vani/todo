import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();

    dispatch(addTodo(input));
    setInput("");
  };
  return (
    <form onSubmit={addTodoHandler} className="content-center justify-center">
      <input
        type="text"
        className="bg-slate-900 caret-white py-1 px-2  mr-3 h-10 w-72 rounded text-white"
        placeholder="Enter Todo ..."
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button
        type="submit"
        className="rounded text-white bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none 
        focus:ring focus:ring-violet-300 h-10 w-28"
      >
        Add Todo
      </button>
    </form>
  );
};

export default AddTodo;
