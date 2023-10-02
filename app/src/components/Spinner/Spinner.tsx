import React from 'react';
import './Spinner.css';
import { SpinnerProps } from '../../types/PropTypes';

function Spinner(props: SpinnerProps) {
  return (
    <div className="spinner-container">
      <div className="spinner" style={{ width: props.size, height: props.size }}>
        <div className="spinner-inner"></div>
      </div>
      <div className="spinner-message">{props.message}</div>
    </div>
  );
};

export default Spinner;