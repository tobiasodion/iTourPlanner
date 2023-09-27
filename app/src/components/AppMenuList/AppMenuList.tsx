import React from 'react';
import './AppMenuList.css';
import AppMenuCard from '../AppMenuCard/AppMenuCard';
import {AppMenuListProp} from '../../types/PropTypes';

function AppMenuList (props : AppMenuListProp) {
  return (
    <div className="app-menu-list">
      {props.appMenuList.map((item) => (
        <AppMenuCard {...item} />
      ))}
    </div>
  );
}

export default AppMenuList;
