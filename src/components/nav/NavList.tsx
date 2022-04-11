import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Assignment, BusinessCenter, MeetingRoom, Pets } from '@mui/icons-material';
import { Divider, List } from '@mui/material';

interface NavItem {
  text: string;
  href: string;
  icon: JSX.Element;
}

const mapNavListItem = (item: NavItem, idx: number) => {
  return (
    <ListItemButton component="a" href={item.href} key={`${idx}`}>
      <ListItemIcon>
        {item.icon}
      </ListItemIcon>
      <ListItemText primary={item.text} />
    </ListItemButton>
  );
}

const mainNavItems: NavItem[] = [
  { text: 'Rooms', href: '/rooms', icon: <MeetingRoom /> },
  { text: 'Objects', href: '/objects', icon: <BusinessCenter /> },
  { text: 'Creatures', href: '/creatures', icon: <Pets /> },
  { text: 'Quests', href: '/quests', icon: <Assignment /> },
];
const mainNavList = mainNavItems.map(mapNavListItem);

// const secondaryNavItems: NavItem[] = [
//   { text: 'a', href: '', icon: <AutoAwesome /> },
//   { text: 'a', href: '', icon: <AutoAwesome /> },
//   { text: 'a', href: '', icon: <AutoAwesome /> },
// ];
// const secondaryNavList = secondaryNavItems.map(mapNavListItem);

interface NavListProps {}

export const NavList = (props: NavListProps) => {
  return (
    <List component="nav">
      {mainNavList}
      <Divider sx={{ my: 1 }} />
      {/* {secondaryNavList} */}
    </List>
  );
}