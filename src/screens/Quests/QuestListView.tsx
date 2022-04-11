import { Delete } from "@mui/icons-material";
import { IconButton, List, ListItem, ListItemButton, ListItemText, Paper, Typography } from "@mui/material";
import React, { useMemo } from "react";
import { getMockQuestArray, Quest } from "../../types/Quest";

type QuestRowProps = Quest;

const QuestRow = (props: QuestRowProps) => {
  return (
    <React.Fragment key={`${props.id}`}>
      <ListItem
        secondaryAction={
          <IconButton edge="end" aria-label="delete">
            <Delete />
          </IconButton>
        }
        divider
      >
        <ListItemButton role={undefined}>
          <ListItemText
            id={props.id}
            primary={
              <React.Fragment>
                <Typography component="div" variant="caption" color="text.secondary">
                  {` ${props.id}`}
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

interface QuestListViewProps {}

const QuestListView = (props: QuestListViewProps) => {
  const quests = useMemo(() => getMockQuestArray(10), []);
  const mockQuestRows = useMemo(() => quests.map(QuestRow), [quests]);

  return (
    <React.Fragment>
      <Paper>
        <List>
          {mockQuestRows}
        </List>
      </Paper>
    </React.Fragment>
  );
}

export default QuestListView;