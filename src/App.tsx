import { CssBaseline, ThemeProvider } from '@mui/material';
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import { LoadingBackdrop } from './components/LoadingBackdrop';
import ListView from './screens/ListView';
import { LoginForm } from './screens/LoginForm';
import QuestEdit from './screens/Quests/QuestEdit';
import theme from './styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LoadingBackdrop />
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} >
              <Route path="login" element={<LoginForm />} />
              <Route path=":area">
                <Route path=":objectType">
                  <Route index element={<ListView />}/>
                  <Route path=":id" element={<QuestEdit />} />
                </Route>
                  <Route path="rooms">
                  <Route index element={<ListView />}/>
                  <Route path=":id" element={<> </>} />
                </Route>
                {/* <Route path="objects">
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
  );
}

export default App;
