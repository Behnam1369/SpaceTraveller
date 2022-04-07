import React from 'react';
import { NavLink } from 'react-router-dom';
import * as url from '../assets/planet.png';

const Header = () => (
  <header>
    <NavLink to="/"><img className="logo" src={url.default} alt="space-logo" /></NavLink>
    <nav>
      <NavLink to="/">Rockets</NavLink>
      <NavLink to="/Missions">Missions</NavLink>
      <NavLink to="/MyProfile">My Profile</NavLink>
    </nav>
  </header>
);

export default Header;
