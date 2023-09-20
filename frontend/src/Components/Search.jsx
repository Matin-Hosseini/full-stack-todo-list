import React, { useContext, useState } from "react";
import todosContext from "../contexts/todoContext";

const Search = () => {
  const contextData = useContext(todosContext);

  const addNewTodo = async (e) => {
    e.preventDefault();
    if (!contextData.newTodoTitle) return;
    contextData.addNewTodo()
  };

  return (
    <div>
      <h1 className="text-center font-bold text-3xl my-5">TODO LIST</h1>
      <div className="flex justify-center items-center">
        <form action="" onSubmit={addNewTodo}>
          <input
            type="text"
            placeholder="What have you planned to do?"
            className="focus:outline-none text-gray-500 w-52"
            value={contextData.newTodoTitle}
            onChange={(e) => contextData.setNewTodoTitle(e.target.value)}
          />
          <button className="bg-blue-50 text-blue-700  py-1 px-5 rounded-md hover:text-blue-500 transition">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
