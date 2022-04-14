import { Add, Delete } from "@mui/icons-material";
import { Box, Fab, IconButton, List, ListItem, ListItemButton, ListItemText, Paper, Typography } from "@mui/material";
import React, { useCallback, useMemo } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { getMockQuestArray, Quest } from "../../data/interfaces/Quest";
import { getListKey } from "../../utils/MudObjects";

type QuestRowProps = Quest & {
  onClick: React.MouseEventHandler<HTMLDivElement>;
};

const QuestRow = (props: QuestRowProps) => {
  return (
    <React.Fragment>
      <ListItem
        secondaryAction={
          <IconButton edge="end" aria-label="delete">
            <Delete />
          </IconButton>
        }
        divider
      >
        <ListItemButton onClick={props.onClick}>
          <ListItemText
            primary={
              <React.Fragment>
                <Typography component="div" variant="caption" color="text.secondary">
                  {`${props.id.area}.${props.id.id}`}
                </Typography>
                <Typography component="span" variant="h6">
                  {props.name}
                </Typography>
              </React.Fragment>
            }
            secondary={props.description}
            secondaryTypographyProps={{noWrap: true}}
            inset
          />
        </ListItemButton>
      </ListItem>
    </React.Fragment>
  );
}

interface QuestListProps {}

const QuestList = (props: QuestListProps) => {
  const nav = useNavigate();
  const loc = useLocation();
  const quests = useMemo(() => getMockQuestArray(10), []);

  const questRows = useMemo(() => {
    return quests.map(quest => {
      return (
        <QuestRow {...quest} onClick={() => nav(`${loc.pathname}/${quest.id.id}`)} key={`${getListKey(quest)}`} />
      );
    });
  }, [quests, loc.pathname, nav]);

  const addFab = useMemo(() => {
    return (
      <Fab onClick={() => nav(`${loc.pathname}/new`)} color="primary" sx={{position: 'absolute', bottom: 16, right: 32}}>
        <Add />
      </Fab>
    );
  }, [loc.pathname, nav]);

  return (
    <Box>
      <Paper>
        <List>
          {questRows}
        </List>
        {addFab}
      </Paper>
    </Box>
  );
}

export default QuestList;