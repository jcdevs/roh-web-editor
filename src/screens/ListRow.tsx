import { Delete } from "@mui/icons-material";
import { IconButton, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import React from "react";
import { MudObject } from "../data/interfaces/MudObject";

interface ListRowProps extends MudObject {
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

const ListRow = (props: ListRowProps) => {
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

export default ListRow;