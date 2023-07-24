import { FunctionComponent, useRef, memo } from "react";

interface Todo {
  id: number;
  text: string;
  done: boolean;
}
interface AddTodoProps {
  todos: Todo[];
  setTodos: Function;
}
const AddTodo: FunctionComponent<AddTodoProps> = memo(({ todos, setTodos }) => {
  const toDoRef = useRef<HTMLInputElement>(null);
  const addTodo = () => {
    const todoText = toDoRef?.current?.value || "";
    const todoAlreadyAdded = todos?.find((todo) => todo.text === todoText);
    if (todoText !== "" && !todoAlreadyAdded) {
      const newTodo: Todo = {
        id: Date.now(),
        text: todoText,
        done: false,
      };
      setTodos([...todos, newTodo]);
      resetTodoInput();
    }
  };
  function resetTodoInput() {
    if (toDoRef.current) toDoRef.current.value = "";
  }

  return (
    <div className="add-todo">
      <input
        type="text"
        name="todoText"
        placeholder="Enter a new todo"
        ref={toDoRef}
      />
      <button onClick={addTodo}>Add</button>
    </div>
  );
});
export default AddTodo;
