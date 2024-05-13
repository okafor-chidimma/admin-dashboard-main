import React from 'react';
import Logo from './Logo';
import TopNavSearch from './TopNavSearch';
const LogoSearch = () => (
  <div className="flex flex-start nav-bar__div">
    <Logo />
    <TopNavSearch />
  </div>
);

export default LogoSearch;