import React from 'react';
import { AppBar, Toolbar, Typography, Badge, IconButton } from '@material-ui/core';
import ListAltIcon from '@material-ui/icons/ListAlt';
import BackspaceIcon from '@material-ui/icons/Backspace';

const Header = props => {
  return (
    <AppBar>
      <Toolbar>
      <Badge badgeContent={props.count} color="primary">
          <ListAltIcon />
        </Badge>
        <Typography>
          React Todo : ({props.count})
        </Typography>
        <IconButton onClick={props.clear}>
          <BackspaceIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}


export default Header;
