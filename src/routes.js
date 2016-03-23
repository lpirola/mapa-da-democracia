import React from 'react';
import { Route, IndexRedirect } from 'react-router';

import App from './components/App';
import HomePage from './containers/HomePage';
import BancadasPage from './containers/BancadasPage';
import ParlamentarPage from './containers/ParlamentarPage';
import AboutPage from './components/AboutPage.js';
import NotFoundPage from './components/NotFoundPage.js';

export default (
  <Route path="/" component={App}>
    <IndexRedirect to="/parlamentares" />
    <Route path="bancadas" component={BancadasPage} />
    <Route path="parlamentares" component={HomePage} />
    <Route path="parlamentares/:name" component={ParlamentarPage} />
    <Route path="sobre" component={AboutPage}/>
    <Route path="*" component={NotFoundPage} />
  </Route>
);
