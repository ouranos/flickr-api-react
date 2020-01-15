import React, { useCallback } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, Typography, InputBase } from '@material-ui/core';
import { makeStyles, fade } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { debounce } from "lodash";

const useStyles = makeStyles(theme => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
}));

const NavBar = ({onSearch}) => {
  const classes = useStyles();

  const debounceCallback = useCallback(
    debounce(value => onSearch(value), 300),
    []
  );

  const onInputChangeHandler = ({ target: { value } }) => {
    debounceCallback(value);
  };

  return(
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          Flickr Feed
        </Typography>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search pictures..."
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
            onChange={onInputChangeHandler}
          />
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar;
