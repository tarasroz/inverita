import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './App';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Page1 from '../src/components/page1/nav/page1';
import Page2 from '../src/components/page2/nav/page2';
import Page3 from '../src/components/page3/page3';

import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <App >
        <Switch>
          <Route exact path='/' component={Page1} />
          <Route exact path='/page2' component={Page2} />
          <Route path='/page3' component={Page3} />
        </Switch>
      </App>
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));

registerServiceWorker();