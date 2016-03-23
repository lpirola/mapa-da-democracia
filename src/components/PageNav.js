import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const NavItems = [
	{ value: '/css',         label: 'CSS' },
	{ value: '/grid',        label: 'Grid' },
	{ value: '/buttons',     label: 'Buttons' },
	{ value: '/glyphs',      label: 'Glyphs' },
	{ value: '/forms',       label: 'Forms' },
	{ value: '/spinner',     label: 'Spinner' },
	{ value: '/modal',       label: 'Modal' },
	{ value: '/misc',        label: 'Misc' }
	// { value: 'date-picker', label: 'Date Picker' }
];

let self = this;
//let height = (this.state.windowWidth < 768) ? this.state.windowHeight : 'auto';
let menuClass = 'primary-nav-menu is-visible'; //: 'primary-nav-menu is-hidden';
let menuItems = NavItems.map(function(item) {
  return (
    <Link key={item.value} className="primary-nav__item" activeClassName="active" to={item.value}>
      <span className="primary-nav__item-inner">{item.label}</span>
    </Link>
  );
});

// Since this component is simple and static, there's no parent container for it.
const PageNav = () => {
  return (
  <nav className="primary-nav">
  <Link to="/home" className="primary-nav__brand special" title="Home">
    <img src="./images/elemental-logo-paths.svg" className="primary-nav__brand-src" />
  </Link>
  {/*<Link to="home">Home</Link>*/}
  <button className="primary-nav__item primary-nav-menu-trigger">
    <span className="primary-nav-menu-trigger-icon octicon octicon-navicon" />
    <span className="primary-nav-menu-trigger-label">Menu</span>
  </button>
  <div className={menuClass} style={{ height: 'auto' }}>
    <div className="primary-nav-menu-inner">
      {menuItems}
    </div>
  </div>
  <a href="https://github.com/elementalui/elemental" target="_blank" title="View on GitHub" className="primary-nav__brand right">
    <img src="./images/github-logo.svg" className="primary-nav__brand-src" />
  </a>
  </nav>
  );
};

export default PageNav;
