import { CacheProvider } from '@emotion/react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import theme from './styles/theme';
import createEmotionCache from './utils/createEmotionCache';
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';
import QuestListView from './screens/Quests/QuestListView';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const App = () => {
  return (
    <CacheProvider value={clientSideEmotionCache}>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
          <BrowserRouter>
            <Dashboard>
              <Routes>
                <Route path="/" element={<QuestListView />}>
                  <Route path="rooms" element={<QuestListView />}>
                    <Route path=":roomId" />
                    <Route path="new" />
                  </Route>
                  <Route path="objects" element={<QuestListView />}>
                    <Route path=":objectId" />
                    <Route path="new" />
                  </Route>
                  <Route path="creatures" element={<QuestListView />}>
                    <Route path=":creatureId" />
                    <Route path="new" />
                  </Route>
                  <Route path="quests" element={<QuestListView />}>
                    <Route path=":questId" />
                    <Route path="new" />
                  </Route>
                  {/* <Route index element={<Home />} />
                  <Route path="teams" element={<Teams />}>
                    <Route path=":teamId" element={<Team />} />
                    <Route path="new" element={<NewTeamForm />} />
                    <Route index element={<LeagueStandings />} />
                  </Route> */}
                </Route>
              </Routes>
            </Dashboard>
          </BrowserRouter>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
