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
  const [user_input, setUserInput] = useState('');

  const [gists_array, setGistsArray] = useState([]);
  const [description, setDescription] = useState([]);
  const[files, setFiles] = useState([]);
  const[badges, setBadges] = useState([]);
  const [url, setUrls] = useState([]);
  const [forks_url, setForksUrl] = useState([]);

  const handleSearch = (e) => {
    setUserInput(e.target.value)
  }

  const handleSubmit = () => {
    fetch(`https://api.github.com/users/${user_input}`)
      .then(res => res.json())
      .then(data => {
        setData(data)
      })
    
    fetch(`https://api.github.com/users/${user_input}/gists`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setGistsArray(data);

        let descriptions = []
        let badges_list = []
        let files_url = []

        for (const {url: u, description: d, forks_url: f, files: t} of data){
          
          descriptions.push(d)
          for (const [key, value] of Object.entries(t)) {
            const arr = value['type'].split("/");
            const badge = arr[arr.length - 1];

            const file_url = value['raw_url'];

            files_url.push(file_url);
            badges_list.push(badge);
          }
        }
        setDescription(descriptions)
        setBadges(badges_list)
        setFiles(files_url)
      })
  }


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
      <GitHubSearch handleSearch={handleSearch} handleSubmit={handleSubmit}/>
      <CardComponent avatar={avatar} name={name} gists_url={gists_url} user_name={user_name}
                     followers={followers} repos={repos} public_repos={public_repos}
                     public_gists={public_gists} url={url} description={description}
                     forks_url={forks_url} gists_array={gists_array} files={files}
                     badges={badges}/>
    </div>
  );
}

export default App;
