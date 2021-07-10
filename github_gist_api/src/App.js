import React, { useState, useEffect } from "react";
import "./App.css";
import GitHubSearch from "./components/GitHubSearch";
import CardComponent from "./components/CardComponent";

function App() {
  const [name, setName] = useState("");
  const [user_name, setUsername] = useState("");
  const [gists_url, setGists] = useState("");
  const [avatar, setAvatar] = useState("");
  const [followers, setFollowers] = useState("");
  const [repos, setRepos] = useState("");
  const [public_repos, setPublicRepos] = useState("");
  const [public_gists, setPublicGists] = useState("");
  const [user_input, setUserInput] = useState("");

  const [gists_array, setGistsArray] = useState([]);
  const [gist_forks, setGistForks] = useState({});

  const handleSearch = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = () => {
    fetch(`https://api.github.com/users/${user_input}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });

    fetch(`https://api.github.com/users/${user_input}/gists`)
      .then((res) => res.json())
      .then((data) => {
        setGistsArray(data);

        data.forEach((gist) => {
          fetch(gist.forks_url)
            .then((res) => res.json())
            .then((forks) => {
              const gist_forks_copy = gist_forks;
              gist_forks_copy[gist.id] = forks;
              setGistForks(gist_forks_copy);
            });
        });
      });
  };

  const setData = ({
    name,
    login,
    gists_url,
    avatar_url,
    followers,
    repos,
    public_repos,
    public_gists,
  }) => {
    setName(name);
    setUsername(login);
    setGists(gists_url);
    setAvatar(avatar_url);
    setFollowers(followers);
    setRepos(repos);
    setPublicRepos(public_repos);
    setPublicGists(public_gists);
  };

  return (
    <div className="App">
      <GitHubSearch handleSearch={handleSearch} handleSubmit={handleSubmit} />
      <CardComponent
        avatar={avatar}
        name={name}
        gists_url={gists_url}
        user_name={user_name}
        followers={followers}
        repos={repos}
        public_repos={public_repos}
        public_gists={public_gists}
        gists_array={gists_array}
        gist_forks={gist_forks}
      />
    </div>
  );
}

export default App;
