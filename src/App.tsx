import { CacheProvider } from '@emotion/react';
import { CssBaseline, Paper, ThemeProvider } from '@mui/material';
import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import theme from './styles/theme';
import createEmotionCache from './utils/createEmotionCache';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const App = () => {
  return (
    <CacheProvider value={clientSideEmotionCache}>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Dashboard>
          <Paper sx={{display: 'flex', flexDirection: 'column', height: 600}}>

          </Paper>
        </Dashboard>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
