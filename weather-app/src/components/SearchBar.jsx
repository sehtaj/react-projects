import { useState } from 'react';
import './SearchBar.css';

export default function SearchBar({ setFindCity }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = () => {
    if (inputValue !== '') {
      setFindCity(inputValue);
      setInputValue('');
    }
  };
  

  return (
    <form className="search-bar"
          onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search city..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="button" onClick={handleSubmit}>
        Search
      </button>
    </form>
    
  );
}


