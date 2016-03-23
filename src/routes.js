import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './containers/HomePage';
import AboutPage from './components/AboutPage.js';
import NotFoundPage from './components/NotFoundPage.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="sobre" component={AboutPage}/>
    <Route path="*" component={NotFoundPage} />
  </Route>
);
