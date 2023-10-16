import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <div className=" flex mt-8 text-white text-2xl content-center justify-center">
        Todos
      </div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-6 py-2 px-3 flex bg-black justify-between items-center rounded"
            key={todo.id}
          >
            <div className="text-white text-lg ">{todo.text}</div>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="text-white bg-red-600 border-0 py-1 px-4 focus:outline-none
            hover:bg-red-700 rounded text-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="28"
                viewBox="0 -960 960 960"
                width="24"
              >
                <path d="M261-120q-24.75 0-42.375-17.625T201-180v-570h-41v-60h188v-30h264v30h188v60h-41v570q0 24-18 42t-42 18H261Zm438-630H261v570h438v-570ZM367-266h60v-399h-60v399Zm166 0h60v-399h-60v399ZM261-750v570-570Z" />
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Todos;
