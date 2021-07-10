import React, {useState, useEffect} from 'react';
import './App.css';
import GitHubSearch from './components/GitHubSearch'
import CardComponent from './components/CardComponent'


function App() {
  const [name, setName] = useState('');
  const [user_name, setUsername] = useState('');
  const [gists_url, setGists] = useState('');
  const [avatar, setAvatar] = useState('');
  const [followers, setFollowers] = useState('');
  const [repos, setRepos] = useState('');
  const [public_repos, setPublicRepos] = useState('');
  const [public_gists, setPublicGists] = useState('');

  useEffect(() => {
    fetch('https://api.github.com/users/example')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setData(data)
      });
  }, []);

  const setData = ({name, login, gists_url, avatar_url, followers, repos,
                    public_repos, public_gists}) => {
    setName(name)
    setUsername(login)
    setGists(gists_url)
    setAvatar(avatar_url)
    setFollowers(followers)
    setRepos(repos)
    setPublicRepos(public_repos)
    setPublicGists(public_gists)
  }
  

  return (
    <div className="App">
      <GitHubSearch/>
      <CardComponent avatar={avatar} name={name} gists_url={gists_url} user_name={user_name}
                     followers={followers} repos={repos} public_repos={public_repos}
                     public_gists={public_gists}/>
    </div>
  );
}

export default App;
