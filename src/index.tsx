import { CacheProvider } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './data/redux/store';
import './index.css';
import reportWebVitals from './reportWebVitals';
import createEmotionCache from './utils/createEmotionCache';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <CacheProvider value={clientSideEmotionCache}>
        <App />
      </CacheProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

