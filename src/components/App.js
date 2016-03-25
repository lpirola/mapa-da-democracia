import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import PageNav from './PageNav';
const { Glyph, Container } = require('elemental');

const App = (props) => {
  return (
    <div className="page-wrapper">
      <div className="page-body">
        {props.children}
      </div>
    </div>
  );
};

App.propTypes = {
  children: PropTypes.element
};

export default App;
