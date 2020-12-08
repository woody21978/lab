import React from 'react';
import './css/App.scss';
import GiphyList from './components/GiphyList/GiphyList';
import Search from './components/Search/Search';

function App() {
  return (
    <div className="container">
      <Search />
      <GiphyList />
    </div>
  );
}

export default App;
