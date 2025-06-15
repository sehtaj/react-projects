export const fetchUser = async (username) => {
  const url = `https://api.github.com/users/${username}`;
  const response = await fetch(url);
  const data = await response.json();

  return {
    login: data.login,
    avatar_url: data.avatar_url,
    html_url: data.html_url,
    bio: data.bio,
    followers: data.followers,
    following: data.following,
    repos_url: data.repos_url
  };
};

export const fetchRepos = async (reposUrl) => {
  const response = await fetch(reposUrl);
  const data = await response.json();

  return data.map(repo => ({
    name: repo.name,
    html_url: repo.html_url
  }));
};