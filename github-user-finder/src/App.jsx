import { useState } from 'react';
import SearchBar from './components/SearchBar';
import UserData from './components/UserData';
import Repos from './components/Repos';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);

  return (
    <div className="app-container">
      <h2>GitHub User Finder</h2>
      <SearchBar setUserData={setUser} setRepos={setRepos} />
      {user && (
        <>
          <UserData user={user} />
          <Repos repos={repos} />
        </>
      )}
    </div>
  );
}

export default App;