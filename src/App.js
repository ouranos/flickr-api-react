import React from 'react';
import './App.css';
import 'typeface-roboto';

import FlickrFeed from './services/FlickrFeed';
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
    FlickrFeed.publicPhotos(tags)
    .then((response) => {
      this.setState({photos: response})
    })
    .catch((error) => {
      console.log("Error occured while fetch Photos")
      console.error(error)
    })
  }

  handleSearch = (search) => {
    this.setState({
      searchString: search
    }, () => {
      this.getPhotos();
    });
  }

  render() {
    return (
      <div className="App">
        <NavBar onSearch={(e) => this.handleSearch(e)}/>
        <PhotoList photos={this.state.photos}/>
      </div>
    );
  }
}

export default App;
