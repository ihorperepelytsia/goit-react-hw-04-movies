import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
  <header>
    <nav>
      <div>
        <NavLink to="/" exact activeClassName={'active-link'}>
          Home
        </NavLink>
      </div>
      <div>
        <NavLink to="/movies" activeClassName={'active-link'}>
          Movies
        </NavLink>
      </div>
    </nav>
  </header>
);

export default Nav;
