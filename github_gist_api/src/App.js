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
  const [current_file_url, setCurrentFileURL] = useState([]);

  const handleSearch = (e) => {
    setUserInput(e.target.value);
  };

  const handleFile = () => {
    fetch(`${current_file_url}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
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
        console.log(data);
        setGistsArray(data);
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
      />
    </div>
  );
}

export default App;
