import React from 'react';
import { Button, Dialog, DialogTitle, GridListTile, GridListTileBar, IconButton, DialogContent, Chip, List, ListItem, ListItemIcon, ListItemText, DialogActions } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import TodayIcon from '@material-ui/icons/Today';
import PersonIcon from '@material-ui/icons/Person';
import LaunchIcon from '@material-ui/icons/Launch';
import { withStyles } from '@material-ui/core/styles';

const useStyles = theme => ({
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  tagList: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  }
});

class PhotoTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }

  handleInfo() {
    this.setState({open: true})
  }

  handleClose() {
    this.setState({open: false})
  }

  renderTags(tags) {
    const { classes } = this.props;

    return (
      <div className={classes.tagList}>
        { tags !== "" ? (
          (tags.split(' ') || []).map(tag => (
            <Chip label={tag} key={tag}/>
          ))
        ) : "No tags" }
      </div>
    )
  }

  render() {
    const { classes } = this.props;

    let photo = this.props.photo;

    // Handle blank title
    let title;
    if (photo.title.trim() !== "") {
      title = photo.title
    }

    return(
      <GridListTile style={{...this.props.style}}>
        <img src={photo.media.m} alt={photo.title || 'Unknown'} />
        <GridListTileBar
          title={title || 'Unknown'}
          subtitle={<span>by: {photo.author}</span>}
          actionIcon={
            <IconButton
              aria-label={`info about {photo.title}`}
              className={classes.icon}
              onClick={() => this.handleInfo()}
            >
              <InfoIcon />
            </IconButton>
          }
        />
        <Dialog onClose={() => this.handleClose()} open={this.state.open}>
          <DialogTitle>{title || 'Unknown'}</DialogTitle>
          <DialogContent>
            <List>
              <ListItem>
                <ListItemIcon>
                  <TodayIcon/>
                </ListItemIcon>
                <ListItemText primary={
                  new Intl.DateTimeFormat('en-AU', {
                    year: 'numeric',
                    month: 'long',
                    day: '2-digit',
                  }).format(new Date(photo.published))
                } />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText primary={photo.author} />
              </ListItem>
            </List>

            {this.renderTags(photo.tags)}
          </DialogContent>
          <DialogActions>
            <Button onClick={() => this.handleClose()}>Close</Button>
            <Button
              aria-label="go to picture"
              color="primary"
              href={photo.link}
              target="_blank"
              endIcon={<LaunchIcon />}
            >
              Open
            </Button>
          </DialogActions>
        </Dialog>
      </GridListTile>
    )
  }
}

export default withStyles(useStyles)(PhotoTile);
