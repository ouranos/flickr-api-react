import React from 'react';
import './App.css';
import 'typeface-roboto';

import { fetchPhotos } from './services/FlickrFeed'
import NavBar from './components/NavBar';
import PhotoList from './components/PhotoList';

class App extends React.Component {
  state = {
    photos: [],
    searchString: '',
  }

  constructor() {
    super();
    this.getPhotos();
  }

  getPhotos = () => {
    // Allow to search multiple tags separated by spaces
    const tags = this.state.searchString.replace(' ', ',');
    fetchPhotos(tags)
    .then((response) => {
      this.setState({photos: response})
    })
    .catch((error) => {
      console.log("Error occured while fetch Photos")
      console.error(error)
    })
  }

  handleSearchChange = (event) => {
    this.setState({
      searchString: event.target.value
    }, () => {
      this.getPhotos();
    });
  }

  render() {
    return (
      <div className="App">
        <NavBar onSearchChange={(e) => this.handleSearchChange(e)}/>
        <PhotoList photos={this.state.photos}/>
      </div>
    );
  }
}

export default App;
