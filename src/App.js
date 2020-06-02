import React from 'react';
import './App.css';

import Header from './components/Header/Header'
import Jokes from './containers/Jokes/Jokes'
import List from './containers/List/List'

function App() {
  return (
    <div className="App">
      <Header />
      <Jokes />
      <List />
    </div>
  );
}

export default App;
