import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router';
import { Provider } from 'react-redux';
import { Switch, BrowserRouter } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import store from './store';
import history from './utils/history';

import homepage from './screens/homepage';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/" component={homepage} />
        </Switch>
      </ConnectedRouter>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
