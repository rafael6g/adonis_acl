import React from 'react';
import {Provider} from 'react-redux';
import ReduxToastr from 'react-redux-toastr';

import {HelmetProvider} from 'react-helmet-async';

import store from './store';
import Routes from './routes';

import GlobalStyle from './styles/global';

const App = () => (
  <HelmetProvider>
    <Provider store={store}>
      <>
        <Routes />
        <ReduxToastr />
        <GlobalStyle />
      </>
    </Provider>
  </HelmetProvider>
);

export default App;
