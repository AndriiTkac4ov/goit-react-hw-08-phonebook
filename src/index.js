import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import App from 'components/App/App';
import Loader from 'components/Loader/Loader';
import { theme } from 'constants/theme';
import { ThemeProvider } from 'styled-components';
import 'index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/goit-react-hw-08-phonebook'>
    {/* <BrowserRouter> */}
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          {/* <PersistGate loading={null} persistor={persistor}> */}
          <PersistGate loading={<Loader />} persistor={persistor}>
            <App />
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
