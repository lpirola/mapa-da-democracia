import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import PageNav from './PageNav';
const { Col, Container, Row } = require('elemental');

const App = (props) => {
  return (
    <div className="page-wrapper">
      <header className="demo-banner demo-banner--primary">
        <Container maxWidth={768} className="demo-container">
          <span className="demo-banner-illustration" />
          <h1 className="demo-banner__heading demo-banner__heading-1">Elemental UI</h1>
          <h2 className="demo-banner__heading demo-banner__heading-2">A UI Toolkit for React.js Websites and Apps</h2>
          <div className="demo-banner__buttons">
            <a className="Button Button--demo-primary" href="https://twitter.com/elementalui" target="_blank">Follow @ElementalUI on Twitter</a>
            <a className="Button Button--demo-link" href="https://github.com/elementalui/elemental" target="_blank">View the GitHub Project</a>
          </div>
        </Container>
      </header>
      <PageNav />
      <div className="page-body">
        {props.children}
      </div>
      <div className="page-footer">
        <div className="demo-container container">
          Copyright &copy; 2016 &middot; (MIT) License &middot; Built by <a href="http://www.thinkmill.com.au" target="_blank">Thinkmill</a>, initially for integration with <a href="http://www.keystonejs.com" target="_blank">KeystoneJS</a>
        </div>
      </div>
    </div>
  );
};

App.propTypes = {
  children: PropTypes.element
};

export default App;
