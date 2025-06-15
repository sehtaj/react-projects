function Repos({ repos }) {
  return (
    <div>
      <h3>Repositories:</h3>
      <ul>
        {repos.map((repo) => (
            <a href={repo.html_url}> 
            <li>{repo.name}</li>
            </a>
        ))}
      </ul>
    </div>
  );
}

export default Repos;