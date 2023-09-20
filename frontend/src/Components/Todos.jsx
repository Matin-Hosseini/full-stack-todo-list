import React, { useContext } from "react";

import SingleTodo from "./SingleTodo";
import todosContext from "../contexts/todoContext";

const Todos = () => {
  const contextData = useContext(todosContext);

  return (
    <div className="container py-5 rounded-xl ">
      <h2 className="text-violet-600 font-semibold text-xl mb-4">
        Here is all your todos
      </h2>

      <ul>
        {contextData.todos.map((todo) => (
          <SingleTodo key={todo._id} {...todo} />
        ))}
      </ul>
    </div>
  );
};

export default Todos;
