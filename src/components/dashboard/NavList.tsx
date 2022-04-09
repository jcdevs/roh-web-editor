import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import { Assignment, AutoAwesome, BusinessCenter, MeetingRoom, PersonAdd } from '@mui/icons-material';
import { Divider, List } from '@mui/material';

const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <MeetingRoom />
      </ListItemIcon>
      <ListItemText primary="Rooms" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <BusinessCenter />
      </ListItemIcon>
      <ListItemText primary="Objects" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <PersonAdd />
      </ListItemIcon>
      <ListItemText primary="Monsters" />
    </ListItemButton>
    <a href="/quests">
      <ListItemButton>
        <ListItemIcon>
          <Assignment />
        </ListItemIcon>
        <ListItemText primary="Quests" />
      </ListItemButton>
    </a>
    
  </React.Fragment>
);

const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Other Tools
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AutoAwesome />
      </ListItemIcon>
      <ListItemText primary="Cool Thing" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AutoAwesome />
      </ListItemIcon>
      <ListItemText primary="Awesome Thing" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AutoAwesome />
      </ListItemIcon>
      <ListItemText primary="Even Better" />
    </ListItemButton>
  </React.Fragment>
);

interface NavListProps {}

export const NavList = (props: NavListProps) => {
  return (
    <List component="nav">
      {mainListItems}
      <Divider sx={{ my: 1 }} />
      {secondaryListItems}
    </List>
  );
}