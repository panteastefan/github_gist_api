import React, { useState, useEffect } from "react";
import "./App.css";
import GitHubSearch from "./components/GitHubSearch";
import CardComponent from "./components/CardComponent";

function App() {
  const [user_input, setUserInput] = useState("");

  const [user_git, setUserGit] = useState([]);
  const [gists_array, setGistsArray] = useState([]);
  const [gist_forks, setGistForks] = useState({});

  const handleSearch = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = () => {
    fetch(`https://api.github.com/users/${user_input}`)
      .then((res) => res.json())
      .then((data) => {
        setUserGit(data);
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

  return (
    <div className="App">
      <GitHubSearch handleSearch={handleSearch} handleSubmit={handleSubmit} />
      <CardComponent
        user_git={user_git}
        gists_array={gists_array}
        gist_forks={gist_forks}
      />
    </div>
  );
}

export default App;
