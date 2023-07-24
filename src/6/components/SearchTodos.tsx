import { ChangeEvent, FunctionComponent, memo, useState } from "react";

interface SearchTodoProps {
  searchText: string;
  onSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const SearchTodos: FunctionComponent<SearchTodoProps> = memo(
  ({ searchText, onSearch }) => {
    return (
      <div className="search-todo">
        <label htmlFor="search">Search for To-Do:</label>
        <input
          type="text"
          id="search"
          placeholder="Search pending todos"
          value={searchText}
          onChange={onSearch}
        />
      </div>
    );
  }
);
export default SearchTodos;
