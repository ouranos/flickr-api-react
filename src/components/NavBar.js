import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, Typography } from '@material-ui/core';

// Use a function as only rendering code
const NavBar = () => {
  return(
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          Flickr Feed
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
