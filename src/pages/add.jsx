import React, { useState, useEffect } from "react";
import axios from "axios";


const Add = ({fetchTodos}) => {
  const [newTodo, setNewTodo] = useState({
    todo: ""
  });
  // const [todos, setTodos] = useState([]);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setNewTodo((prev) => ({ ...prev, todo: e.target.value }));
  };

  const handleClick = async () => {
    try {
      const response = await axios.post("http://localhost:8000/todo/create_todo/", newTodo);
      fetchTodos()
      // setTodos((prev) => [...prev, response.data]);
      setNewTodo({ todo: "" });
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <label>
        <input
          type="text"
          placeholder="Add new todo"
          className="area1"
          value={newTodo.todo}
          onChange={handleChange}
        />
      </label>

      <button className="button" onClick={handleClick}>
     ADD
      </button>

      {error && <div className="alert alert-error"></div>}

    
    </div>
  );
};

export default Add;