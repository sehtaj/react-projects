function UserData({ user }) {
  return (
    <div>
      <img src={user.avatar_url} width="100" />
      <h2>{user.login}</h2>
      <p> Bio : {user.bio }</p>
      <p>Followers: {user.followers}</p>
      <p>Following: {user.following}</p>
      <a href={user.html_url}> GitHub Profile </a>
    </div>
  );
}

export default UserData;