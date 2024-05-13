import React from 'react';
import search from '../../../../assets/mainbar/after-payments-div/search.svg';

export const TableFilterSecondDiv = () => (
  <div className="pr6 mr6 pt1">
    <div className="flex align-center table-filter__div--div pr1">
      <img src={search} alt="logo" />
      <input type="text" placeholder="Search Placements" className="no-border transparent-background" />
    </div>
  </div>
);


