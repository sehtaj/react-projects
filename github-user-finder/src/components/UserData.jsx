import './UserData.css';

function UserData({ user }) {
  return (
    <div className="user-data">
      <img src={user.avatar_url} alt="avatar" />
      <div className="user-info">
        <h2>{user.login}</h2>
        <p>Bio: {user.bio}</p>
        <p>Followers: {user.followers}</p>
        <p>Following: {user.following}</p>
        <a href={user.html_url} target="_blank" rel="noopener noreferrer">GitHub Profile</a>
      </div>
    </div>
  );
}

export default UserData;