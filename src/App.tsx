import { CacheProvider } from '@emotion/react';
import { CssBaseline, Paper, ThemeProvider } from '@mui/material';
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

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const App = () => {
  return (
    <CacheProvider value={clientSideEmotionCache}>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Dashboard>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}>
              {/* <Route index element={<Home />} />
              <Route path="teams" element={<Teams />}>
                <Route path=":teamId" element={<Team />} />
                <Route path="new" element={<NewTeamForm />} />
                <Route index element={<LeagueStandings />} />
              </Route> */}
            </Route>
          </Routes>
        </BrowserRouter>
        </Dashboard>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
