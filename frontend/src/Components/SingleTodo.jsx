import React, { useContext, useRef, useState } from "react";

import { AiFillEdit } from "react-icons/ai";
import { GoTrash } from "react-icons/go";
import { BsCheckLg } from "react-icons/bs";

import todosContext from "../contexts/todoContext";

const SingleTodo = ({ title, isComplete, _id, onEdit, onRemove }) => {
  const [todoTitle, setTodoTitle] = useState(title);
  const [todoEditable, setTodoEditable] = useState(false);
  const todoInupt = useRef();

  const contextData = useContext(todosContext);

  const editTitleHandler = () => {
    setTodoEditable((prevState) => !prevState);
    todoInupt.current.focus();
  };

  const editTodoHandler = () => {
    const targetTodo = contextData.todos.find((todo) => todo._id === _id);
    setTodoEditable(false);

    if (targetTodo.title === todoTitle) return;
    contextData.editTodo(_id, todoTitle);
  };

  const removeHandler = () => {
    contextData.removeTodo(_id);
  };

  return (
    <div className="flex justify-between items-center py-2 px-3 rounded-md bg-violet-50 mb-2 fade-animation">
      <input
        type="text"
        value={todoTitle}
        className="bg-transparent text-indigo-500 text-sm focus:outline-none flex-1"
        readOnly={!todoEditable}
        onChange={(e) => setTodoTitle(e.target.value)}
        ref={todoInupt}
      />
      <div className="flex gap-4 items-center">
        <div className="text-yellow-600 text-xl cursor-pointer">
          {!todoEditable ? (
            <AiFillEdit onClick={editTitleHandler} />
          ) : (
            <BsCheckLg onClick={editTodoHandler} />
          )}
        </div>

        <GoTrash
          className="text-red-500 text-xl cursor-pointer"
          onClick={removeHandler}
        />
      </div>
    </div>
  );
};

export default SingleTodo;
