import React from 'react';

import { GridList } from '@material-ui/core';
import PhotoTile from '../PhotoTile';

const PhotoList = (props) => {
  return(
    <div>
      { props.photos ? (
        <div>
          <GridList cellHeight={200} cols={4} spacing={1} style={{padding: 10}}>
            { props.photos.map(photo => (
              <PhotoTile photo={photo} key={photo.link}/>
            ))}
          </GridList>
        </div>
      ) : "No photos found"}
    </div>
  );
}

export default PhotoList;
