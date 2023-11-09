import React from 'react';
import './AppMenuCard.css';
import { AppMenuCardProp } from '../../types/PropTypes';
import { Link } from 'react-router-dom';

function AppMenuCard(props: AppMenuCardProp) {
  const { id, name, description, link } = props;
  return (
    <div key={id} className="app-menu-item">
      <div className="app-name">
        <h3>{name}</h3>
      </div>
      <div className="app-description">
        <p>{description}</p>
      </div>
      <div className="app-link">
        <Link to={link}>Let's go</Link>
      </div>
    </div>
  );
}

export default AppMenuCard;
