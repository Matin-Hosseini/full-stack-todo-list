import React, { useEffect, useState } from "react";

import Search from "./Components/Search";
import Todos from "./Components/Todos";

import "./App.css";

import todosContext from "./contexts/todoContext";
import Loader from "./Components/Loader/Loader";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodoTitle, setNewTodoTitle] = useState("");
  const [showLoader, setShowLoader] = useState(false);

  const getAllTodos = async () => {
    setShowLoader(true);
    await fetch("http://localhost:8000/api/allTodos")
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
      });
    setShowLoader(false);
  };

  useEffect(() => {
    setShowLoader(true);
    getAllTodos();
    setShowLoader(false);
  }, []);

  const addNewTodo = async () => {
    setShowLoader(true);
    await fetch("http://localhost:8000/api/create", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ title: newTodoTitle }),
    });
    getAllTodos();
    setNewTodoTitle("");
    setShowLoader(false);
  };

  const editTodo = async (todoId, newTitle) => {
    setShowLoader(true);
    await fetch(`http://localhost:8000/api/changeTodo/${todoId}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ title: newTitle }),
    });
    getAllTodos;
    setShowLoader(false);
  };

  const removeTodo = async (todoId) => {
    setShowLoader(true);
    await fetch(`http://localhost:8000/api/deleteTodo/${todoId}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });
    getAllTodos();
    setShowLoader(false);
  };

  return (
    <div className="font-roboto">
      <todosContext.Provider
        value={{
          todos,
          setTodos,
          newTodoTitle,
          setNewTodoTitle,
          addNewTodo,
          showLoader,
          setShowLoader,
          editTodo,
          removeTodo,
        }}>
        <Search />
        <Todos />

        {showLoader && <Loader />}
      </todosContext.Provider>
    </div>
  );
}

export default App;
