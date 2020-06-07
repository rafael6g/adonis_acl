import React from 'react';
import { Provider } from 'react-redux';

import { HelmetProvider } from 'react-helmet-async';

import store from './store';
import Routes from './routes';

// import GlobalStyle from './styles/global';
import GlobalStyle from './styles/global';

const App = () => (
  <HelmetProvider>
    <Provider store={store}>
      <>
        <Routes />
        <GlobalStyle />
      </>
    </Provider>
  </HelmetProvider>
);

export default App;
