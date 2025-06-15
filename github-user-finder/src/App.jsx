import { useState } from 'react';
import SearchBar from './components/SearchBar';
import UserData from './components/UserData';
import Repos from './components/Repos';

function App() {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);

  return (
    <div>
      <h2>GitHub User Finder</h2>
      <SearchBar setUserData={setUser} setRepos={setRepos} />
      {user && (
        <div>
          <UserData user={user}/>
          <Repos repos={repos}/>
        </div>
      )}
    </div>
  );
}

export default App;