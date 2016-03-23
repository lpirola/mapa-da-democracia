import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const NavItems = [
	{ value: '/bancada',     label: 'bancadas' },
	{ value: '/parlamentar', label: 'parlamentares' },
  { value: '/sobre', label: 'sobre' }
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
  </nav>
  );
};

export default PageNav;
