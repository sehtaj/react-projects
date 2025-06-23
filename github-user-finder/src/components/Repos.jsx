import './Repos.css';

function Repos({ repos }) {
  return (
    <div className="repos">
      <h3>Repositories:</h3>
      <ul>
        {repos.map((repo) => (
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer" key={repo.id}>
            <li>{repo.name}</li>
          </a>
        ))}
      </ul>
    </div>
  );
}

export default Repos;