import React from 'react';

import { fetchPhotos } from '../services/FlickrFeed'
import { GridList, GridListTile, GridListTileBar } from '@material-ui/core';

class PhotoList extends React.Component {

  state = {
    photos: [],
    searchString: ''
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

  handleSearchInputChange = (event) => {
    this.setState({
      searchString: event.target.value
    }, () => {
      this.getPhotos();
    });
  }

  render() {
    return(
      <div>
        { this.state.photos ? (
          <div>
            <TextField style={{padding: 24}}
              id="searchInput"
              placeholder="Search pictures"
              onChange={this.handleSearchInputChange}
            />
            <GridList cellHeight={200} cols={4} spacing={1}>
              { this.state.photos.map(photo => (
                <GridListTile key={photo.link}>
                  <img src={photo.media.m} alt={photo.title} />
                  <GridListTileBar
                    title={photo.title}
                    subtitle={<span>by: {photo.author}</span>}
                  />
                </GridListTile>
              ))}
            </GridList>
          </div>
        ) : "No photos found"}
      </div>
    );
  }

}

export default PhotoList;
