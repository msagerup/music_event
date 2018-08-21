import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = props => {
  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={() => props.onClose(false)}
    >
      <List component="nav">
        <ListItem button onClick={() => console.log('item')}>
          Event starts in
        </ListItem>
        <ListItem button onClick={() => console.log('item')}>
          Venue Info
        </ListItem>
        <ListItem button onClick={() => console.log('item')}>
          High Lights
        </ListItem>
        <ListItem button onClick={() => console.log('item')}>
          Pricing
        </ListItem>
        <ListItem button onClick={() => console.log('item')}>
          Location
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideDrawer;
