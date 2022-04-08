import React from 'react';
import { NavLink } from 'react-router-dom';
import * as url from '../assets/planet.png';

const Header = () => (
  <header>
    <NavLink to="/">
      <img className="logo" src={url.default} alt="space-logo" />
    </NavLink>
    <h1>Space Travelers&apos; Hub</h1>
    <nav>
      <NavLink to="/">Rockets</NavLink>
      <NavLink to="/Missions">Missions</NavLink>
      <NavLink to="/MyProfile">My Profile</NavLink>
    </nav>
  </header>
);

export default Header;
