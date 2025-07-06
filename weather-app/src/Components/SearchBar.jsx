
import { useState } from 'react';

function SearchBar({ city, setCity }) {
  const [input, setInput] = useState(city);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(input.trim() !== '') {
      setCity(input.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="Searchbar">
      <input
        type="text"
        id="search"
        value={input}
        placeholder="Search for the city..."
        onChange={(e) => setInput(e.target.value)}
      />
    </form>
  );
}

export default SearchBar;
