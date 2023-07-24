import React, { useState } from "react";
import AddTodo from "./components/AddTodo";
import FilteredTodos from "./components/FilteredTodos";
import SearchTodos from "./components/SearchTodos";
import "./index.scss";
interface Todo {
  id: number;
  text: string;
  done: boolean;
}
const Task6: React.FunctionComponent = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [searchText, setSearchText] = useState<string>("");
  function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchText(event.target.value);
  }
  const doneTodos = todos.filter((todo) => todo.done);

  const filteredUndoneTodos = todos.filter(
    (todo) =>
      todo.text.toLowerCase().includes(searchText.toLowerCase()) && !todo.done
  );

  const toggleTodoDone = (id: number) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, done: !todo.done };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const deleteTodo = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <div id="task-6">
      <h1>ToDo App</h1>
      <SearchTodos onSearch={handleSearch} searchText={searchText} />
      <AddTodo setTodos={setTodos} todos={todos} />
      <FilteredTodos
        header="Pending Todos:"
        setTodos={setTodos}
        todos={filteredUndoneTodos}
        toggleTodoDone={toggleTodoDone}
        deleteTodo={deleteTodo}
      />
      
      <FilteredTodos
        header="Done Todos:"
        setTodos={setTodos}
        todos={doneTodos}
        toggleTodoDone={toggleTodoDone}
        deleteTodo={deleteTodo}
      />
      
    </div>
  );
};

export default Task6;
