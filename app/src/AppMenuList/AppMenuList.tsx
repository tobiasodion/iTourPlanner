import React from 'react';
import './AppMenuList.css';
import data from '../Data/contentData.json';
import AppMenuCard from '../AppMenuCard/AppMenuCard';

function AppMenuList() {
  return (
    <div className="app-menu-list">
      {data.appMenuCardData.map((item) => (
        <AppMenuCard data={item} />
      ))}
    </div>
  );
}

export default AppMenuList;
