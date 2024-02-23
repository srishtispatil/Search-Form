import React, { useState } from 'react';
import axios from 'axios';
import TodoList from './TodoList';
import SearchForm from './SearchForm';



const App = () => {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);

  const fetchTodos = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
      setTodos(response.data);
      setFilteredTodos(response.data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  const handleSearch = query => {
    const filtered = todos.filter(todo =>
      todo.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredTodos(filtered);
  };

  return (
    <div>
      <h1>Todo App</h1>
      <SearchForm onSearch={handleSearch} />
      {filteredTodos.length === 0 ? (
        <p>No results found</p>
      ) : (
        <TodoList todos={filteredTodos} />
      )}
    </div>
  );
};

export default App;
