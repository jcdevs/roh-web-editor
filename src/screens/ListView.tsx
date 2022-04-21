import { Add } from "@mui/icons-material";
import { Box, Fab, List, Paper } from "@mui/material";
import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getMockQuestArray } from "../data/interfaces/Quest";
import { getListKey } from "../utils/MudObjects";
import ListRow from "./ListRow";

interface ListViewProps {}

const ListView = (props: ListViewProps) => {
  const nav = useNavigate();
  const loc = useLocation();
  const mockItems = useMemo(() => getMockQuestArray(10), []);

  const rows = useMemo(() => {
    return mockItems.map(item => {
      return (
        <ListRow {...item} onClick={() => nav(`${loc.pathname}/${item.id.id}`)} key={`${getListKey(item)}`} />
      );
    });
  }, [mockItems, loc.pathname, nav]);

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
          {rows}
        </List>
        {addFab}
      </Paper>
    </Box>
  );
}

export default ListView;