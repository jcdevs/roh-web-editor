import { Delete } from "@mui/icons-material";
import { IconButton, List, ListItem, ListItemButton, ListItemText, Paper, Typography } from "@mui/material";
import React, { useMemo } from "react";
import { NavigateFunction, Outlet, useNavigate } from "react-router-dom";
import { getMockQuestArray, Quest } from "../../types/Quest";

type QuestRowProps = Quest & {
  nav: NavigateFunction
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
        <ListItemButton onClick={() => props.nav(`/quests/${props.id.id}`)}>
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
  const quests = useMemo(() => getMockQuestArray(10), []);
  const questRows = useMemo(() => {
    return quests.map(quest => <QuestRow {...quest} nav={nav} key={`${quest.id.area}.${quest.id.id}`} />);
  }, [quests, nav]);

  return (
    <React.Fragment>
      <Paper>
        <List>
          {questRows}
        </List>
      </Paper>
      <Outlet />
    </React.Fragment>
  );
}

export default QuestList;