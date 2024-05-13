import React from 'react';
import searchicon from '../../../assets/navbar/search-icon.svg';

const TopNavSearch = () => (
  <div className="center-content">
    <h2>
      <img src={searchicon} alt="search-icon" />
      <input type="text" placeholder="Search..." className="tiny-font normal-weight-font nav-bar__input" />
    </h2>
  </div>
);

export default TopNavSearch;