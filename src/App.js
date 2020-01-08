import React from 'react';
import './App.css';
import 'typeface-roboto';

import NavBar from './components/NavBar';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
      </div>
    );
  }
}

export default App;
