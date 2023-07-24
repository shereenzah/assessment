import { FunctionComponent, memo, useEffect } from "react";

interface Todo {
  id: number;
  text: string;
  done: boolean;
}
interface FilteredTodosProps {
  header: string;
  todos: Todo[];
  setTodos: Function;
  toggleTodoDone: Function;
  deleteTodo: Function;
}
const FilteredTodos: FunctionComponent<FilteredTodosProps> = memo(
  ({ header, todos, toggleTodoDone, deleteTodo }) => {
    return (
      <div className="filtered-todos">
        <h3>{header}</h3>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <input
                type="checkbox"
                checked={todo.done}
                onChange={() => toggleTodoDone(todo.id)}
              />
              <span>{todo.text}</span>
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
);
export default FilteredTodos;
