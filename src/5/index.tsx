import { FunctionComponent, useState } from "react";

// Components
import Input from "./components/Input";
import List from "./components/List";
  const Task4: FunctionComponent = () => {
    const items = [
      { id: 1, name: 'The Godfather' },
      { id: 2, name: 'Interstellar' },
      { id: 3, name: 'Inception' },
      { id: 4, name: 'Gladiator' },
      { id: 5, name: 'Fight Club' },
      { id: 6, name: 'The Usual Suspects' },
      { id: 7, name: 'The Green Mile' },
      { id: 8, name: 'Saving Private Ryan' },
      { id: 9, name: 'The Matrix' },
      { id: 10, name: 'Goodfellas' },
      { id: 11, name: 'The Silence of the Lambs' },
      { id: 12, name: 'Forrest Gump' },
      { id: 13, name: 'Schindler List' },
      { id: 14, name: 'The Lord of the Rings' },
      { id: 15, name: 'Star Wars' },
      { id: 16, name: 'The Godfather Part II' },
      { id: 17, name: 'Pulp Fiction' },
      { id: 18, name: 'The Dark Knight' },
      { id: 19, name: 'The Shawshank Redemption' },
      { id: 20, name: 'Joker' }
    ];
    const [searchTerm, setSearchTerm] = useState('');
  
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(event.target.value);
    };
  
    const filteredItems = items.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    return (
      <div>
        <Input onSearch={handleSearch} />
        <List items={filteredItems} />
      </div>
    );
  }
  
  
export default Task4;
