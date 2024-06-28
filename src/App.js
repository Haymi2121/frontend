import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Add from './pages/add';
import  Demo from './pages/dark';
import { IconSearch } from "@tabler/icons-react";
import { MantineProvider } from '@mantine/core';
import { confirmAlert } from 'react-confirm-alert'; // Import the confirmAlert function
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import the styles

function App() {
  const [todos, setTodos] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  

  const fetchTodos = () => {
    axios.get('http://localhost:8000/todo/get_all_todo')
      .then(response => {
        setTodos(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }

  useEffect(() => {
    fetchTodos();
  }, []);

  const mark_as_completed = (todo) => {
    const updated_todos = todos.map(_todo => {
      if (_todo.id === todo.id) {
        return { ..._todo, completed: !todo.completed };
      }
      return _todo;
    });

    setTodos(updated_todos);

    // Send the updated todo to the backend
    axios.put(`http://localhost:8000/todo/${todo.id}/updatte_todo`, { completed: !todo.completed })
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const deleteTodo = (todoId) => {
    confirmAlert({ 
      
      title: 'Confirm to delete',
      message: 'Are you sure you want to delete this todo?',
      buttons: [
        {
          label: 'Delete',
          onClick: () => {
            axios.delete(`http://localhost:8000/todo/${todoId}/delete_todo`)
              .then(response => {
                // Filter out the deleted todo from the state
                setTodos(todos.filter(todo => todo.id !== todoId));
              })
              .catch(error => {
                console.error(error);
              });
          }
        },
        {
          label: 'No'
        }
      ]
    
    });
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredTodos = todos.filter(todo =>
    todo.todo.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="App">
      <h2>TODO LISTS</h2>
      <div>
        <div className='container'>
          <div className="search">
            <IconSearch />
           
          
    
           
            <input
              type="search"
              placeholder="Search todos..."
              className='area'
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
          <Add fetchTodos={fetchTodos} />
          <div className='b2'>
         
          </div>
        </div>
        <div>
          <br></br>
        </div>
      </div>
      <div className="App1">
        {filteredTodos.map((todo) => (
          <div key={todo.id} className="todo-item">
            <label>
              <input
                type="checkbox"
                name="ch1"
                checked={todo.completed}
                onChange={() => mark_as_completed(todo)}
              />
              {todo.completed ? <s>{todo.todo}</s> : todo.todo}
            </label>
            <button className="delete" onClick={() => deleteTodo(todo.id)}>
              Delete
            </button>
          </div>
        ))}  
      </div>
      <div> <MantineProvider>
      <Demo/> </MantineProvider> 
       </div>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

export default App;
