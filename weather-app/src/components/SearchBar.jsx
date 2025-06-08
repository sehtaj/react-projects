import { useState } from 'react';
import './SearchBar.css';

export default function SearchBar({ setFindCity }) {
  const [inputValue, setInputValue] = useState('');

  const handleClick = () => {
    if (inputValue !== '') {
      setFindCity(inputValue);
      setInputValue('');
    }
  };
  
  return (
  <div className="search-bar">
    <input
      type="text"
      placeholder="Search city..."
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
    />
    <button onClick={handleClick}>Search</button>
  </div>
  );
}


