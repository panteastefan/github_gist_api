import React, {useState, useEffect} from 'react';
import './App.css';
import GitHubSearch from './components/GitHubSearch'

function App() {
  const [userName, setUsername] = useState('');
  const [gists, setGists] = useState('');
  const [avatar, setAvatar] = useState('');
  const [userInput, setUserInput] = useState('');
  

  return (
    <div className="App">
      <GitHubSearch/>
    </div>
  );
}

export default App;
