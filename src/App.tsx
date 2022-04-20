import { CacheProvider } from '@emotion/react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import ListPivot from './screens/ListPivot';
import QuestEdit from './screens/Quests/QuestEdit';
import theme from './styles/theme';
import createEmotionCache from './utils/createEmotionCache';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const App = () => {
  return (
    <CacheProvider value={clientSideEmotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <BrowserRouter>
              <Routes>
                <Route path="/" element={<Dashboard />} >
                  <Route path=":area">
                    <Route path=":objectType">
                      <Route index element={<ListPivot />}/>
                      <Route path=":id" element={<QuestEdit />} />
                    </Route>
                    {/* <Route path="rooms">
                      <Route index element={<QuestList />}/>
                      <Route path=":roomId" element={<QuestEdit />} />
                    </Route>
                    <Route path="objects">
                      <Route index element={<QuestList />}/>
                      <Route path=":objectId" element={<QuestEdit />} />
                    </Route>
                    <Route path="creatures">
                      <Route index element={<QuestList />}/>
                      <Route path=":creatureId" element={<QuestEdit />} />
                    </Route>
                    <Route path="quests">
                      <Route index element={<QuestList />}/>
                      <Route path=":questId" element={<QuestEdit />} />
                    </Route> */}
                  </Route>
                </Route>
              </Routes>
          </BrowserRouter>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;