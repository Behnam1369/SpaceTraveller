import React from 'react';
import { NavLink } from 'react-router-dom';
import * as url from '../assets/planet.png';

const Header = () => (
  <header>
    <img className="logo" src={url.default} alt="space-logo" />
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/MyProfile">My Profile</NavLink>
      <NavLink to="/Missions">Missions</NavLink>
      <NavLink to="/Rockets">Rockets</NavLink>
    </nav>
  </header>
);

export default Header;
