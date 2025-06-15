import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { fetchUser, fetchRepos } from '../fetchData';

function SearchBar({ setUserData, setRepos }) {
  const [username, setUsername] = useState('');

  const handleClick = async () => {
    const user = await fetchUser(username);
    const repos = await fetchRepos(user.repos_url);
    
    setUserData(user);
    setRepos(repos);
  };

  return (
    <div>
      <TextField 
        placeholder="username" 
        value={username}
        onChange={(e) => setUsername(e.target.value)} 
      />
      <Button onClick={handleClick} startIcon={<SearchIcon />} variant="contained">
        Search
      </Button>
    </div>
  );
}

export default SearchBar;