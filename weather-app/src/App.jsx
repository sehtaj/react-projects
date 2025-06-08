import './App.css';
import SearchBar from './components/searchBar';
import Weather from './components/Weather';
import { useState } from "react";

function App() {

    const [findCity,setFindCity] = useState()

  return (
    <div className="app">
      <div className="header-box">
        <h1 className="header-title">Weather App</h1>
      <SearchBar setFindCity={setFindCity} />
      {findCity && <Weather findCity={findCity} />}
        </div>
    </div>
  );
}

export default App;