import { Assignment, BusinessCenter, MeetingRoom, Pets } from '@mui/icons-material';
import { Divider, FormControl, InputLabel, List, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Box } from '@mui/system';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

interface NavItem {
  text: string;
  path: string;
  icon: JSX.Element;
}

const mainNavItems: NavItem[] = [
  { text: 'Rooms', path: 'rooms', icon: <MeetingRoom /> },
  { text: 'Items', path: 'items', icon: <BusinessCenter /> },
  { text: 'Creatures', path: 'creatures', icon: <Pets /> },
  { text: 'Quests', path: 'quests', icon: <Assignment /> },
];

interface NavListProps {}

export const NavList = (props: NavListProps) => {
  const nav = useNavigate();
  const urlParams = useParams();
  const [area, setArea] = useState(urlParams.area || 'all');

  useEffect(() => {
    setArea(urlParams.area || 'all');
  }, [urlParams.area]);

  const changeArea = useCallback((event: SelectChangeEvent) => {
    const { value } = event.target;
    const objPath = urlParams.objectType ? `/${urlParams.objectType}` : '';
    const idPath = urlParams.id ? `/${urlParams.id}` : '';
    const newPath = `/${value}${objPath}${idPath}`;
    setArea(value);
    nav(newPath);
  }, [nav, urlParams]);

  const areaSelector = useMemo(() => {
    return (
      <Box style={{ padding: "0px 10px" }}>
        <FormControl fullWidth margin="dense">
          <InputLabel>Area</InputLabel>
          <Select
            defaultValue='all'
            value={area}
            label="Age"
            onChange={changeArea}
          >
            <MenuItem value='all'>All</MenuItem>
            <MenuItem value='test'>Test</MenuItem>
            <MenuItem value='build'>Build</MenuItem>
            <MenuItem value='highport'>Highport</MenuItem>
          </Select>
        </FormControl>
      </Box>
    );
  }, [area, changeArea]);

  const mainNavList = useMemo(() => {
    return mainNavItems.map(item => {
      return (
        <ListItemButton onClick={() => nav(`${area}/${item.path}`)} key={item.path}>
          <ListItemIcon>
            {item.icon}
          </ListItemIcon>
          <ListItemText primary={item.text} />
        </ListItemButton>
      );
    });
  }, [area, nav]);

  return (
    <List component="nav">
      {areaSelector}
      <Divider sx={{ my: 1 }} />
      {area && mainNavList}
    </List>
  );
}