import React from 'react';
import './AppMenuCard.css';
import AppMenuCardData from '../Types/AppMenuCardData';

function AppMenuCard(props: AppMenuCardData) {
  const { id, name, description } = props.data;

  return (
    <div key={id} className="app-menu-item">
      <div className="app-name">
        <h2>{name}</h2>
      </div>
      <div className="app-description">
        <p>{description}</p>
      </div>
      <div className="app-link">
        <a>Try App</a>
      </div>
    </div>
  );
}

export default AppMenuCard;
