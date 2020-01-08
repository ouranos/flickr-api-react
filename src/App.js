import React from 'react';
import './App.css';
import 'typeface-roboto';

import NavBar from './components/NavBar';
import PhotoList from './components/PhotoList';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <PhotoList />
      </div>
    );
  }
}

export default App;
