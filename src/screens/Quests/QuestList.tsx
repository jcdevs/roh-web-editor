import { Delete } from "@mui/icons-material";
import { IconButton, List, ListItem, ListItemButton, ListItemText, Paper, Typography } from "@mui/material";
import React, { useMemo } from "react";
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
        <QuestRow {...quest} onClick={() => nav(`${loc.pathname}${quest.id.id}`)} key={`${getListKey(quest)}`} />
      );
    });
  }, [quests, loc, nav]);

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